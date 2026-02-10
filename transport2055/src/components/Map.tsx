import '../styles//Map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { TRANSIT_LAYERS } from '../data/maplayers.ts'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import type { FeatureCollection, LineString } from 'geojson'

interface MapProps {
  onSelectTopic: (topic: string) => void;
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
    <>
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

      // render invisible, wider lines for click/tapability
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
    </>
  )
}

function Map({onSelectTopic}: MapProps) {
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
    <div>
    <MapContainer 
        center={[49.1811172, -122.9266192]} 
        zoom={10} 
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
        >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[49.1811172, -122.9266192]}>
          <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {TRANSIT_LAYERS.map(layer =>
          layers[layer.id] ? (
            <TransitLayer
              key={layer.id}
              data={layers[layer.id]}
              onSelectTopic={onSelectTopic}
              defaultColor={layer.defaultColor}
            />
          ) : null
        )}
    </MapContainer>
    </div>
  )
}

export default Map
