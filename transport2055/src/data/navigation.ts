export const NAV_ITEMS = [
  {
    id: 'skytrain',
    label: 'SkyTrain',
    contentId: 'skytrain',
    children: [
      { id: 'expo', label: 'Expo Line' },
      { id: 'millennium', label: 'Millennium Line' },
      { id: 'canada', label: 'Canada Line'},
      { id: 'inlet', label: 'Inlet Line'},
      { id: 's-crosstown', label: 'South Crosstown'},
      { id: 'kgb', label: 'King George Boulevard'},
      { id: 'r6', label: 'R6 Rail'},
      { id: 's-central', label: 'South Central'}
    ],
  },
  {
    id: 'rapidbus',
    label: 'Rapidbus',
    contentId: 'rapidbus',
    children: [
      { id: 'surrey-we', label: 'Surrey East-West' },
      { id: 'lonsdale', label: 'Lonsdale-Lynn Valley'},
      { id: '6thave', label: 'New West Crosstown'},
      { id: 'richmond', label: 'Richmond'},
      { id: 'canadaway', label: 'Canada Way'},
      { id: 'austin', label: 'Austin Ave'},
      { id: '152st', label: '152 St-Coq'},
      { id: 'burrardrapidbus', label: 'Burrard St'},
      { id: 'dtorbit', label: 'Downtown Orbital'}, 
      { id: 'marine', label: 'Marine Dr/Wy'}
    ],
  },
  {
    id: 'regionalrail',
    label: 'Regional Rail',
    contentId: 'regionalrail',
    children: [
      { id: 'fvx', label: 'Fraser Valley Express' },
      { id: 'wce', label: 'West Coast Express'}, 
      { id: 'tcx', label: 'Tri-Cities Express'}
    ],
  },
  {
    id: 'expressbus',
    label: 'Expressbus',
    contentId: 'expressbus',
    children: [
      { id: 'e1', label: 'Surrey-Richmond' },
      { id: 'e2', label: 'Surrey-Delta/Richmond' },
      { id: 'e3', label: 'White Rock' },
      { id: 'e4', label: 'Richmond-Tsawwassen' },
      { id: 'e5', label: 'North Shore' },
      { id: 'e6', label: 'Langley-Fraser Valley' },
      { id: 'e7', label: 'Langley-Newton' },
    ],
  },
  {
    id: 'misc',
    label: 'Misc',
    contentId: 'misc',
    children: [
      { id: 'bus', label: 'Bus' },
      { id: 'brt', label: 'BRT'},
      { id: 'gondola', label: 'Skybus'},
      { id: 'tram', label: 'Tram'}
    ],
  },
  {
    id: 'bonus',
    label: 'Bonus Phase 1',
    contentId: 'bonus',
    children: [
      { id: 'twx', label: 'Delta+Tsawwassen Express'},
      { id: 'kgbextend', label: 'KGB Extension' },
      { id: 'chilliwack', label: 'FVX Chilliwack'},
      { id: 'sbx', label: 'South Burrard Express'},
      { id: 'r6extend', label: 'R6 Extension'}
    ],
  },
  {
    id: 'bonus2',
    label: 'Bonus Phase 2',
    contentId: 'bonus',
    children: [
      { id: 'millenniumextend', label: 'Millennium Maple Ridge Extension'},
      { id: 'davie-pacificrail', label: 'Davie-Pacific Rail'},
      { id: 'kensington', label: 'Hastings Skytrain Extension'},
      { id: 'cascades', label: 'Amtrak Cascades'},
      { id: 'ssx', label: 'Sea-to-Sky Express'},
      { id: 'oak-abrt', label: 'Oak Autonomous BRT'}
    ],
  },
]