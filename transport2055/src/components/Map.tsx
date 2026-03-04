import '../styles//Map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { TRANSIT_LAYERS } from '../data/maplayers.ts'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import type { FeatureCollection, LineString } from 'geojson'
import { useMap } from 'react-leaflet'
import type { Map as LeafletMap } from 'leaflet'
import { LayersControl } from 'react-leaflet'
import { LayerGroup } from 'react-leaflet'

interface MapProps {
  onSelectTopic: (topic: string) => void;
  setMapRef: (map: L.Map) => void;
}

function MapRefSetter({ setMapRef }: { setMapRef: (map: LeafletMap) => void }) {
  const map = useMap()

  useEffect(() => {
    setMapRef(map)
  }, [map, setMapRef])

  return null
}

function TransitLayer({
    data,
    onSelectTopic,
    defaultColor,
  }: {
    data: FeatureCollection<LineString>
    onSelectTopic: (topic: string) => void
    defaultColor: string
  }) {
  return (
    <LayerGroup>
      <GeoJSON
        data={data}
        style={(feature) => ({
          color: feature?.properties?.color || defaultColor,
          weight: feature?.properties?.weight || 3,
          dashArray: feature?.properties?.dashArray || null,
          lineCap: feature?.properties?.lineCap || null,
          interactive: false
        })}
      />

      {/*render invisible, wider lines for click/tapability*/}
      <GeoJSON
        data={data}
        style={
          {
            color: '#000',
            weight: 11,       
            opacity: 0,       
            interactive: true
          }
        }
        onEachFeature={(feature, layer) => {
          const path = layer as L.Path

          const lineId = feature.properties?.id
          const name = feature.properties?.line
          const colour = feature.properties?.color

          if (name) {
            layer.bindTooltip(name, {
              sticky: true,       // follows cursor
              direction: 'top',
              className: 'transit-tooltip',
              opacity: 0.9
            })
          }

          layer.on({
            mouseover: () => {
              path.setStyle({ 
                opacity: 0.35,
                color: colour,
                weight: 11
               })
            },
            mouseout: () => {
              path.setStyle({ opacity: 0 })
            },
            click: () => {
              if (lineId) onSelectTopic(lineId)
            },
          })
        }}
      />
    </LayerGroup>
  )
}

function Map({onSelectTopic, setMapRef}: MapProps) {
  const [layers, setLayers] = useState<Record<string, FeatureCollection<LineString>>>({})

  useEffect(() => {
    Promise.all(
      TRANSIT_LAYERS.map(layer =>
        fetch(layer.url)
          .then(res => res.json())
          .then(data => ({ id: layer.id, data }))
      )
    )
      .then(results => {
        const layerMap: Record<string, FeatureCollection<LineString>> = {}
        results.forEach(({ id, data }) => {
          layerMap[id] = data
        })
        setLayers(layerMap)
      })
      .catch(err => console.error('Failed to load transit layers', err))
  }, [])


  return (
    <MapContainer 
        center={[49.1811172, -122.9266192]} 
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        >

        <MapRefSetter setMapRef={setMapRef} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[49.1811172, -122.9266192]}>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        <LayersControl position='topright'>
          {TRANSIT_LAYERS.map(layer =>
            layers[layer.id] ? (
              <LayersControl.Overlay
                  key={layer.id}
                  name={layer.label}
                  checked={!layer.hiddenByDefault}
              >
                <TransitLayer
                  data={layers[layer.id]}
                  onSelectTopic={onSelectTopic}
                  defaultColor={layer.defaultColor}
                />
              </LayersControl.Overlay>
            ) : null
          )}
        </LayersControl>
    </MapContainer>
  )
}

export default Map
