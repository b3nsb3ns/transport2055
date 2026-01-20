// const BASE_URL = import.meta.env.VITE_CONTENT_BASE_URL ?? ''

export const TRANSIT_LAYERS = [
  {
    id: 'skytrain',
    url: '/data/geojson/skytrain.geojson',
    // url: `${BASE_URL}/data/geojson/skytrain.geojson`,
    defaultColor: '#0055ff',
  },
  {
    id: 'rapidbus',
    url: '/data/geojson/rapidbus.geojson',
    // url: `${BASE_URL}/data/geojson/rapidbus.geojson`,
    defaultColor: '#26bf1b',
  },
]

