import { useEffect, useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import Content from './components/Content'
import MapPanel from './components/MapPanel'

import 'leaflet/dist/leaflet.css'

const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get("page") || "home"
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>(getInitialPage)
  const [isMapVisible, setIsMapVisible] = useState(true)

  const handleSelectContent = (id: string) => {
    setSelectedTopic(id)

    const url = new URL(window.location.href)
    url.searchParams.set("page", id)
    window.history.pushState({}, "", url)
  }

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search)
      setSelectedTopic(params.get("page") || "home")
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])

  return (
    <>
      <Navigation onSelectContentId={handleSelectContent} />

      <Content contentId={selectedTopic} onSelectContent={handleSelectContent}/>
      
      <main className="main-layout">
        <MapPanel
          isVisible={isMapVisible}
          onToggle={() => setIsMapVisible(v => !v)}
          onSelectTopic={handleSelectContent}
        />
      </main>
      
    </>
  )
}

export default App
