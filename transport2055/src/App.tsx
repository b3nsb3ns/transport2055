import { useEffect, useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import MapView from './components/MapView'
import Content from './components/Content'

import { ExpandedContext } from './styles/ExpandedContext'
import type { ExpandedContextType } from './styles/ExpandedContext'

import 'leaflet/dist/leaflet.css'

// get id of current topic
const getInitialPage = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get("page") || "home"
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState<string>(getInitialPage)
  // const [isMapVisible, setIsMapVisible] = useState(true)

  const [expanded, setExpanded] = useState(true)

  const toggleExpanded = () => {
    setExpanded(true)
  }

  const toggleCollapsed = () => {
    setExpanded(false)
  }

  const providerValue: ExpandedContextType = {
    expanded: expanded,
    toggleExpanded: toggleExpanded,
    toggleCollapsed: toggleCollapsed
  }

  // set id and push state to browser history
  const handleSelectContent = (id: string) => {
    setSelectedTopic(id)

    const url = new URL(window.location.href)
    url.searchParams.set("page", id)
    window.history.pushState({}, "", url)
  }

  // sync selected topic and browser window state
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
      <ExpandedContext.Provider value={providerValue}>
        <div className='app-shell'>

          {/* <MapPanel
              isVisible={isMapVisible}
              onToggle={() => setIsMapVisible(v => !v)}
              onSelectTopic={handleSelectContent}
          /> */}

          <MapView onSelectTopic={handleSelectContent} />

          <Content contentId={selectedTopic} onSelectContent={handleSelectContent} />

          <Navigation onSelectContentId={handleSelectContent} />
          
          {/* <main className="main-layout">
            <MapPanel
              isVisible={isMapVisible}
              onToggle={() => setIsMapVisible(v => !v)}
              onSelectTopic={handleSelectContent}
            />
          </main> */}

        </div>
      </ExpandedContext.Provider>
    </>
  )
}

export default App
