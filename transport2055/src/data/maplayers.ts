const STORAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_BASE_URL ?? ''

export const TRANSIT_LAYERS = [
  {
    id: 'skytrain',
    // url: `${import.meta.env.BASE_URL}data/geojson/skytrain.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/skytrain/skytrain.geojson`,
    defaultColor: '#0055ff',
  },
  {
    id: 'rapidbus',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/rapidbus/rapidbus.geojson`,
    defaultColor: '#26bf1b',
  },
]

