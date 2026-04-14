export const NAV_ITEMS = [
  {
    id: 'skytrain',
    label: 'SkyTrain',
    contentId: 'skytrain',
    children: [
      { id: 'expo', label: 'Expo Line' },
      { id: 'millennium', label: 'Millennium Line' },
      { id: 'canada', label: 'Canada Line'},
      { id: 'inlet', label: 'Inlet+Hastings Line'},
      { id: 's-crosstown', label: 'South Crosstown'},
      { id: 'kgb', label: 'King George Boulevard'},
    ],
  },
  {
    id: 'brt',
    label: 'BRT',
    contentId: 'brt',
    children: [
      { id: 'legacyrx', label: 'Legacy RapidBus'},
      { id: 'northshore', label: 'North Vancouver'},
      { id: 'downtown', label: 'Downtown-Kingsway'},
      { id: 'marine', label: 'Downtown-Arbutus-Marine'},
      { id: 'drive', label: 'Commercial/Victoria-Richmond'},
      { id: 'legacybrt', label: 'Langley-Haney Place'},
      { id: 'legacybrt', label: 'Newton-White Rock'},
    ],
  },
  {
    id: 'regionalrail',
    label: 'Regional Rail',
    contentId: 'regionalrail',
    children: [
      { id: 'fvx', label: 'Fraser Valley Express' },
      { id: 'wce', label: 'West Coast Express'},
      { id: 'tcx', label: 'Tri-Cities Express'},
      { id: 'nwx', label: 'New Westminster Express'}
    ],
  },
  {
    id: 'rapidbus',
    label: 'RapidBus',
    contentId: 'rapidbus',
    children: [
      { id: 'legacyrx', label: 'Legacy RapidBus'},
      { id: 'surrey', label: 'Surrey East-West' },
      { id: 'richmond', label: 'Richmond'},
      { id: 'canadaway', label: 'Canada Way'},
      { id: 'austin', label: 'Austin Ave'},
    ],
  },
  {
    id: 'expressbus',
    label: 'ExpressBus',
    contentId: 'expressbus',
    children: [
      { id: 'sew', label: 'Surrey East-West' },
      { id: 'wr', label: 'White Rock' },
      { id: 'rt', label: 'Richmond-Tsawwassen' },
      { id: 'langley', label: 'Langley' },
    ],
  },
  {
    id: 'misc',
    label: 'Misc',
    contentId: 'misc',
    children: [
      { id: 'bus', label: 'Bus' },
      { id: 'gondola', label: 'SkyBus' },
      { id: 'tram', label: 'Tram' },
      { id: 'test', label: 'Test Failure to Load' }
    ],
  },
  {
    id: 'bonus',
    label: 'Bonus Phases',
    contentId: 'bonus',
    children: [
      { id: 's-central', label: 'South Central SkyTrain'},
      { id: 'tram', label: 'Tram Extension'},
      { id: 'sbx', label: 'South Burrard Express'},
      { id: 'davie-pacificrail', label: 'Davie-Pacific Rail'},
      { id: 'cascades', label: 'Amtrak Cascades'},
      { id: 'ssx', label: 'Sea-to-Sky Express'},
      { id: 'oak-abrt', label: 'Oak Autonomous BRT'}
    ],
  }
]