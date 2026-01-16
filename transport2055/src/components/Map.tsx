import '../styles//Map.css'
import 'leaflet/dist/leaflet.css'
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
    <GeoJSON
      data={data}
      style={(feature) => ({
        color: feature?.properties?.color || defaultColor,
        weight: feature?.properties?.weight || 3
      })}
      onEachFeature={(feature, layer) => {
        layer.on('click', () => {
          const lineId = feature.properties?.id
          if (lineId) onSelectTopic(lineId)
        })
      }}
    />
  )
}

function Map({onSelectTopic}: MapProps) {
  const [skytrain, setSkytrain] = useState<FeatureCollection<LineString> | null>(null)
  const [rapidbus, setRapidbus] = useState<FeatureCollection<LineString> | null>(null)

  useEffect(() => {
    fetch('/data/geojson/skytrain.geojson') // replace with S3/Firebase URL later
      .then(res => res.json())
      .then((data: FeatureCollection<LineString>) => setSkytrain(data))
      .catch(err => console.error('Failed to load SkyTrain GeoJSON', err))

      fetch('/data/geojson/rapidbus.geojson')
        .then(res => res.json())
        .then((data: FeatureCollection<LineString>) => setRapidbus(data))
        .catch(err => console.error('Failed to load RapidBus GeoJSON', err))
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
        {skytrain && (
          <TransitLayer
            data={skytrain}
            onSelectTopic={onSelectTopic}
            defaultColor="#0055ff"
          />
        )}
        {rapidbus && (
          <TransitLayer
            data={rapidbus}
            onSelectTopic={onSelectTopic}
            defaultColor="#26bf1b"
          />
        )}
    </MapContainer>
    </div>
  )
}

export default Map
