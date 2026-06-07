import Map from './Map.tsx'
import '../styles//MapView.css'
import { useRef } from 'react'
import { Map as LeafletMap } from 'leaflet'

function MapView({ onSelectTopic }: { onSelectTopic: (topic: string) => void }) {

  const mapRef = useRef<LeafletMap | null>(null)

  return (
    <div className={'map-view'}>
      <Map 
        onSelectTopic={onSelectTopic}
        setMapRef={(map) => (mapRef.current = map)}
      />
    </div>
  )
}

export default MapView