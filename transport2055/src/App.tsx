import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './components/Navigation'
import Content from './components/Content'
import Map from './components/Map'

import 'leaflet/dist/leaflet.css'

function App() {
  const [count, setCount] = useState(0)
  const [selectedTopic, setSelectedTopic] = useState<string>('Home');

  return (
    <>
      <Navigation onSelectTopic={setSelectedTopic} />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR (Hot Module Replacement)
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Content text={selectedTopic} />

      <Map onSelectTopic={setSelectedTopic} />
    </>
  )
}

export default App
