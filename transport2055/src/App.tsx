import { useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import Content from './components/Content'
import MapPanel from './components/MapPanel'

import 'leaflet/dist/leaflet.css'

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>('home')
  const [isMapVisible, setIsMapVisible] = useState(true)

  return (
    <>
      <Navigation onSelectContentId={setSelectedTopic} />

      <Content contentId={selectedTopic} />
      
      <main className="main-layout">
        <MapPanel
          isVisible={isMapVisible}
          onToggle={() => setIsMapVisible(v => !v)}
          onSelectTopic={setSelectedTopic}
        />
      </main>
      
    </>
  )
}

export default App
