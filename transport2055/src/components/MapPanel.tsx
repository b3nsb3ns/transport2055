import Map from './Map.tsx'
import '../styles//MapPanel.css'

function MapPanel({
  isVisible,
  onToggle,
  onSelectTopic,
}: {
  isVisible: boolean
  onToggle: () => void
  onSelectTopic: (topic: string) => void
}) {
  return (
    <section className="map-panel">
      <div className="map-header">
        <button
          onClick={onToggle}
          aria-pressed={isVisible}
          className="map-toggle"
        >
          {isVisible ? 'Hide map' : 'Show map'}
        </button>
      </div>

      <div className={`map-container ${isVisible ? 'open' : 'closed'}`}>
        <Map onSelectTopic={onSelectTopic} />
      </div>
    </section>
  )
}

export default MapPanel