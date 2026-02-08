const STORAGE_BASE_URL = import.meta.env.VITE_CLOUDFRONT_BASE_URL ?? ''

export const TRANSIT_LAYERS = [
  {
    id: 'skytrain',
    // url: `${import.meta.env.BASE_URL}data/geojson/skytrain.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/skytrain/skytrain-260203-0.geojson`,
    defaultColor: '#0055ff',
  },
  {
    id: 'rapidbus',
    // url: `${STORAGE_BASE_URL}/data/geojson/rapidbus/rapidbus-260201-0.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/rapidbus/rapidbus-260201-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'regionalrail',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/regionalrail/regionalrail-260201-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'expressbus',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/expressbus/expressbus-260204-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'tram',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/landtrain/landtrain-260205-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'brt',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/brt/brt-260206-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'gondola',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/skybus/skybus-260206-0.geojson`,
    defaultColor: '#26bf1b',
  },
  {
    id: 'bonus',
    // url: `${import.meta.env.BASE_URL}data/geojson/rapidbus.geojson`,
    url: `${STORAGE_BASE_URL}/data/geojson/bonus/bonus-260207-0.geojson`,
    defaultColor: '#26bf1b',
  }
]

