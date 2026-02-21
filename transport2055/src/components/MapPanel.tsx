import Map from './Map.tsx'
import '../styles//MapPanel.css'
import { useState, useRef } from 'react'
import { Map as LeafletMap } from 'leaflet'

function MapPanel({
  isVisible,
  onToggle,
  onSelectTopic,
}: {
  isVisible: boolean
  onToggle: () => void
  onSelectTopic: (topic: string) => void
}) {

  const [isExpanded, setIsExpanded] = useState(false)
  const mapRef = useRef<LeafletMap | null>(null)

  const toggleExpand = () => {
    setIsExpanded(prev => !prev)

    setTimeout(() => {
      if (mapRef.current) mapRef.current.invalidateSize()
    }, 350)
  }

  return (
    <section className={`map-panel ${isExpanded ? 'expanded' : ''}`}>
      <div className="map-header">
        <button
          onClick={onToggle}
          aria-pressed={isVisible}
          className="map-toggle"
        >
          {isVisible ? 'Hide ⭣' : 'Show ⭡'}
        </button>

        {isVisible && (
          <button
            onClick={toggleExpand}
            className="map-expand"
          >
            {isExpanded? 'Minimize ⛶' : 'Expand ⛶'}
          </button>
        )}
      </div>

      <div className={`map-container ${isVisible ? 'open' : 'closed'}`}>
        <Map 
          onSelectTopic={onSelectTopic}
          setMapRef={(map) => (mapRef.current = map)}
        />
      </div>
    </section>
  )
}

export default MapPanel