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
      { id: 'r6', label: 'R6 Rail'},
      { id: 's-central', label: 'South Central'}
    ],
  },
  {
    id: 'rapidbus',
    label: 'RapidBus',
    contentId: 'rapidbus',
    children: [
      { id: 'legacyrx', label: 'Legacy RapidBus'},
      { id: 'surrey', label: 'Surrey East-West' },
      { id: 'nvan', label: 'North Vancouver'},
      { id: 'richmond', label: 'Richmond'},
      { id: '6thave', label: 'New West Crosstown'},
      { id: 'canadaway', label: 'Canada Way'},
      { id: 'austin', label: 'Austin Ave'},
      { id: '152st', label: 'Surrey-Coquitlam'},
      { id: 'downtown', label: 'Downtown'},
      { id: 'marine', label: 'Burrard-Arbutus-Marine'}
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
      { id: 'sbx', label: 'South Burrard Express'}
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
      { id: 'brt', label: 'BRT'},
      { id: 'gondola', label: 'SkyBus' },
      { id: 'tram', label: 'Tram' },
      { id: 'test', label: 'Test Failure to Load' }
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
      { id: 'millenniumextend', label: 'Millennium Maple Ridge Extension'},
      { id: 'r6extend', label: 'R6 Extension'},
      { id: 'tram', label: 'Tram Extension'}
    ],
  },
  {
    id: 'bonus2',
    label: 'Bonus Phase 2',
    contentId: 'bonus2',
    children: [
      { id: 'davie-pacificrail', label: 'Davie-Pacific Rail'},
      { id: 'kensington', label: 'Hastings Skytrain Extension'},
      { id: 'cascades', label: 'Amtrak Cascades'},
      { id: 'ssx', label: 'Sea-to-Sky Express'},
      { id: 'oak-abrt', label: 'Oak Autonomous BRT'}
    ],
  },
]