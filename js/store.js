/**
 * Akshara Plotted Developments - Reactive Store & CMS Engine (V2 Showcase Mode)
 */

const STORAGE_KEY_PROJECTS = 'akshara_projects_v8';
const STORAGE_KEY_BOARD = 'akshara_board_v3';
const STORAGE_KEY_LEADS = 'akshara_leads_v2';
const STORAGE_KEY_SETTINGS = 'akshara_settings_v2';
const STORAGE_KEY_ANALYTICS = 'akshara_analytics_v2';

// Default Projects Showcase (Pricing Removed)
const DEFAULT_PROJECTS = [
  {
    id: 'proj-1',
    name: 'Akshara Green Acres',
    city: 'Vellore',
    location: 'Katpadi Extension, Vellore',
    status: 'Ready',
    totalPlots: '128 Plots',
    plotSizes: '1,200 - 3,200 sq.ft.',
    featured: true,
    image: 'assets/project_vellore.png',
    layoutPlan: 'assets/blueprint_master plan_vellore.png',
    dtcpApproval: 'DTCP No: 42/2024 (Vellore Region)',
    reraNo: 'TN/05/Layout/0182/2024',
    description: 'Premier DTCP & RERA approved plotted community featuring 40ft wide blacktop roads, underground storm water drainage, solar street lighting, and manicured park avenues.',
    highlights: [
      '100% Clear Title & Immediate Registration',
      '40ft & 30ft Blacktop Asphalt Roads',
      'Underground Electrical & Drainage Cabling',
      '5 Mins from Katpadi Railway Junction',
      '24/7 Gated Security with CCTV Monitoring'
    ],
    amenities: ['Wide Asphalt Roads', 'Underground Utilities', 'Avenue Plantation', 'Children Park', 'Water Supply Line', 'Compound Security']
  },
  {
    id: 'proj-2',
    name: 'Akshara Hilltop Heights',
    city: 'Tirupati',
    location: 'Renigunta Highway, Tirupati',
    status: 'Upcoming',
    totalPlots: '94 Plots',
    plotSizes: '1,500 - 4,500 sq.ft.',
    featured: true,
    image: 'assets/project_tirupati.png',
    layoutPlan: 'assets/masterplan_blueprint.png',
    dtcpApproval: 'TUDA Approved Layout L.P. No. 12/2025',
    reraNo: 'AP/RERA/LAYOUT/2025/089',
    description: 'Elevated luxury residential township located at the foothills of Tirumala, offering panoramic natural views, wide concrete roads, and subterranean utility networks.',
    highlights: [
      'TUDA Approved Layout with Clear Legal Certification',
      '3-Phase Underground Electrical Cabling',
      'Dedicated Overhead Water Tank System',
      'Direct Highway Connectivity to Airport',
      'Gated Community Entrance Portal'
    ],
    amenities: ['TUDA Approved', 'Elevated Vista Views', 'Walking Track', 'Underground Cables', 'Overhead Tank', 'Solar Streetlights']
  },
  {
    id: 'proj-3',
    name: 'Akshara Urban Enclave',
    city: 'Chittoor',
    location: 'Bangalore Road, Chittoor',
    status: 'Ready',
    totalPlots: '160 Plots',
    plotSizes: '1,200 - 2,400 sq.ft.',
    featured: false,
    image: 'assets/project_chittoor.png',
    layoutPlan: 'assets/blueprint_master plan_chittoor.png',
    dtcpApproval: 'AP DGTCP Approved LP No. 78/2024',
    reraNo: 'AP/RERA/CHITTOOR/00421',
    description: 'Strategically located on the thriving Chittoor-Bangalore industrial corridor, Akshara Urban Enclave provides ready-to-build plots with complete road and water infrastructure.',
    highlights: [
      'AP DGTCP Layout Clearance with Clear Titles',
      '50ft Main Entrance Avenue & 33ft Internal Roads',
      'Avenue Trees & Landscaping Park',
      'Immediate Boundary Marking for Each Plot',
      'Adjacent to Educational Institutes & Hospitals'
    ],
    amenities: ['Approved Layout', '50ft Main Avenue', 'Rainwater Harvesting', 'Individual Plot Fencing', 'Greenery Parks']
  },
  {
    id: 'proj-4',
    name: 'Akshara Grand Canopy',
    city: 'Chennai',
    location: 'Punamallee-Sriperumbudur, Chennai',
    status: 'Ready',
    totalPlots: '85 Villa Plots',
    plotSizes: '1,800 - 4,800 sq.ft.',
    featured: true,
    image: 'assets/project_chennai.png',
    layoutPlan: 'assets/masterplan_blueprint.png',
    dtcpApproval: 'CMDA Approved Layout No: 114/2024',
    reraNo: 'TN/29/Layout/0892/2024',
    description: 'Exclusive luxury villa plot development situated in West Chennai’s high-growth corridor. High appreciation potential with ultra-premium infrastructure standards.',
    highlights: [
      'CMDA Approved & RERA Registered Premium Layout',
      'Fully Paved Pedestrian Walkways & Solar Lights',
      'Underground Fiber Optic & Power Cables',
      '10 Mins to Outer Ring Road Expressway',
      'Modern Residents Clubhouse & Play Area'
    ],
    amenities: ['CMDA Approved', 'Clubhouse Facility', 'Fiber Optic Ready', 'Solar Lighting', '24/7 Security Patrol', 'High Quality Infrastructure']
  }
];

// Board Members (Ritheesh, Payani, Sandeep)
const DEFAULT_BOARD = [
  {
    id: 'board-2',
    name: 'Payani',
    designation: 'Partner'
  },
  {
    id: 'board-1',
    name: 'Ritheesh',
    designation: 'Partner'
  },
  {
    id: 'board-3',
    name: 'Sandeep',
    designation: 'Partner'
  }
];

// Interactive Blueprint Plot Data
const PLOT_DATA = {
  // Vellore (Option A) Exact CAD Units
  'vellore-commercial': { id: 'Commercial Space', name: 'Commercial Space', areaSqFt: 14111, status: 'Available', boundaryDims: '272\'0" x 172\'0" (Irregular)', facing: 'Dual Highway / Road Facing', phase: 'commercial' },
  'vellore-plot-5': { id: 'Plot 5', name: 'Plot 5', areaSqFt: 6784, status: 'Available', boundaryDims: '113\'0" x 60\'0"', facing: 'North-East Facing', phase: 'residential' },
  'vellore-plot-3': { id: 'Plot 3', name: 'Plot 3', areaSqFt: 4924, status: 'Available', boundaryDims: '87\'4" x 52\'3"', facing: 'North Facing', phase: 'residential' },
  'vellore-plot-4': { id: 'Plot 4', name: 'Plot 4', areaSqFt: 4543, status: 'Available', boundaryDims: '87\'4" x 52\'3"', facing: 'South Facing', phase: 'residential' },
  'vellore-plot-1': { id: 'Plot 1', name: 'Plot 1 (Prime Corner)', areaSqFt: 5700, status: 'Available', boundaryDims: '87\'4" x 52\'3"', facing: 'East Facing (Prime Corner)', phase: 'residential' },
  'vellore-plot-2': { id: 'Plot 2', name: 'Plot 2', areaSqFt: 4454, status: 'Available', boundaryDims: '85\'7" x 52\'3"', facing: 'East / South Road Facing', phase: 'residential' },

  // Chittoor Masterplan (Exact CAD Numbers 1 to 83)
  'chittoor-plot-71': {"id":71,"name":"Plot #71","areaSqFt":1150,"status":"Available","boundaryDims":"Irregular (1150 sq.ft)","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1150 sq.ft)"},
  'chittoor-plot-72': {"id":72,"name":"Plot #72","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-73': {"id":73,"name":"Plot #73","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-74': {"id":74,"name":"Plot #74","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-75': {"id":75,"name":"Plot #75","areaSqFt":1150,"status":"Available","boundaryDims":"Irregular (1150 sq.ft)","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1150 sq.ft)"},
  'chittoor-plot-76': {"id":76,"name":"Plot #76","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-77': {"id":77,"name":"Plot #77","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-78': {"id":78,"name":"Plot #78","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-79': {"id":79,"name":"Plot #79","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-80': {"id":80,"name":"Plot #80","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-81': {"id":81,"name":"Plot #81","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-82': {"id":82,"name":"Plot #82","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-83': {"id":83,"name":"Plot #83","areaSqFt":1265,"status":"Available","boundaryDims":"Irregular (1265 sq.ft)","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1265 sq.ft)"},
  'chittoor-plot-68': {"id":68,"name":"Plot #68","areaSqFt":1244,"status":"Available","boundaryDims":"Irregular (1244 sq.ft)","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1244 sq.ft)"},
  'chittoor-plot-67': {"id":67,"name":"Plot #67","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-66': {"id":66,"name":"Plot #66","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-65': {"id":65,"name":"Plot #65","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-64': {"id":64,"name":"Plot #64","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-63': {"id":63,"name":"Plot #63","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-62': {"id":62,"name":"Plot #62","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-61': {"id":61,"name":"Plot #61","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-60': {"id":60,"name":"Plot #60","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-59': {"id":59,"name":"Plot #59","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-58': {"id":58,"name":"Plot #58","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-57': {"id":57,"name":"Plot #57","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-45': {"id":45,"name":"Plot #45","areaSqFt":1010,"status":"Available","boundaryDims":"Irregular (1010 sq.ft)","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1010 sq.ft)"},
  'chittoor-plot-46': {"id":46,"name":"Plot #46","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-47': {"id":47,"name":"Plot #47","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-48': {"id":48,"name":"Plot #48","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-49': {"id":49,"name":"Plot #49","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-50': {"id":50,"name":"Plot #50","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-51': {"id":51,"name":"Plot #51","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-52': {"id":52,"name":"Plot #52","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-53': {"id":53,"name":"Plot #53","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-54': {"id":54,"name":"Plot #54","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-55': {"id":55,"name":"Plot #55","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-56': {"id":56,"name":"Plot #56","areaSqFt":1265,"status":"Available","boundaryDims":"Irregular (1265 sq.ft)","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1265 sq.ft)"},
  'chittoor-plot-42': {"id":42,"name":"Plot #42","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-41': {"id":41,"name":"Plot #41","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-40': {"id":40,"name":"Plot #40","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-39': {"id":39,"name":"Plot #39","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-38': {"id":38,"name":"Plot #38","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-37': {"id":37,"name":"Plot #37","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-36': {"id":36,"name":"Plot #36","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-35': {"id":35,"name":"Plot #35","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-34': {"id":34,"name":"Plot #34","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-33': {"id":33,"name":"Plot #33","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-32': {"id":32,"name":"Plot #32","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-31': {"id":31,"name":"Plot #31","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-30': {"id":30,"name":"Plot #30","areaSqFt":1089,"status":"Available","boundaryDims":"Irregular (1089 sq.ft)","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1089 sq.ft)"},
  'chittoor-plot-29': {"id":29,"name":"Plot #29","areaSqFt":1089,"status":"Available","boundaryDims":"Irregular (1089 sq.ft)","facing":"West Facing (25ft Road)","phase":"residential","dimensions":"Irregular (1089 sq.ft)"},
  'chittoor-plot-16': {"id":16,"name":"Plot #16","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-17': {"id":17,"name":"Plot #17","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-18': {"id":18,"name":"Plot #18","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-19': {"id":19,"name":"Plot #19","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-20': {"id":20,"name":"Plot #20","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-21': {"id":21,"name":"Plot #21","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-22': {"id":22,"name":"Plot #22","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-23': {"id":23,"name":"Plot #23","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-24': {"id":24,"name":"Plot #24","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-25': {"id":25,"name":"Plot #25","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-26': {"id":26,"name":"Plot #26","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-27': {"id":27,"name":"Plot #27","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-28': {"id":28,"name":"Plot #28","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (25ft Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-14': {"id":14,"name":"Plot #14","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-13': {"id":13,"name":"Plot #13","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-12': {"id":12,"name":"Plot #12","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-11': {"id":11,"name":"Plot #11","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-10': {"id":10,"name":"Plot #10","areaSqFt":1200,"status":"Available","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-9': {"id":9,"name":"Plot #9","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-8': {"id":8,"name":"Plot #8","areaSqFt":1200,"status":"Sold","boundaryDims":"30'0\" x 40'0\"","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"30'0\" x 40'0\""},
  'chittoor-plot-7': {"id":7,"name":"Plot #7","areaSqFt":1380,"status":"Available","boundaryDims":"Irregular (1380 sq.ft)","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"Irregular (1380 sq.ft)"},
  'chittoor-plot-3': {"id":3,"name":"Plot #3","areaSqFt":1322,"status":"Available","boundaryDims":"Irregular (1322 sq.ft)","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"Irregular (1322 sq.ft)"},
  'chittoor-plot-2': {"id":2,"name":"Plot #2","areaSqFt":1089,"status":"Available","boundaryDims":"Irregular (1089 sq.ft)","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"Irregular (1089 sq.ft)"},
  'chittoor-plot-1': {"id":1,"name":"Plot #1","areaSqFt":810,"status":"Available","boundaryDims":"Irregular (810 sq.ft)","facing":"East Facing (Park & Buffer Road)","phase":"residential","dimensions":"Irregular (810 sq.ft)"},
};

const DEFAULT_LEADS = [
  {
    id: 'lead-101',
    date: '2026-08-15 14:30',
    name: 'Suresh Kumar',
    phone: '+91 98401 23456',
    email: 'suresh.k@gmail.com',
    cityPref: 'Vellore',
    projectPref: 'Akshara Green Acres',
    plotSizePref: '2,400 sq.ft. (60x40)',
    message: 'Interested in inspecting corner plot availability at Katpadi project. Please send layout map.',
    status: 'New'
  },
  {
    id: 'lead-102',
    date: '2026-08-14 11:15',
    name: 'Dr. Venkat Rao',
    phone: '+91 94440 98765',
    email: 'drvenkat@apollo.org',
    cityPref: 'Tirupati',
    projectPref: 'Akshara Hilltop Heights',
    plotSizePref: '3,000 sq.ft.',
    message: 'Looking to visit layout near Renigunta. Schedule a site visit.',
    status: 'Contacted'
  },
  {
    id: 'lead-103',
    date: '2026-08-12 16:45',
    name: 'Priya Sundar',
    phone: '+91 98844 11223',
    email: 'priya.s@techcorp.com',
    cityPref: 'Chennai',
    projectPref: 'Akshara Grand Canopy',
    plotSizePref: '1,800 sq.ft.',
    message: 'Visited Sriperumbudur layout site yesterday. Excellent road work quality.',
    status: 'Closed'
  }
];

const DEFAULT_SETTINGS = {
  companyName: 'Akshara Plotted Developments',
  tagline: 'Showcasing Premium Residential Layouts & Land Developments',
  phone1: '+91 94432 88990',
  phone2: '+91 94432 88991',
  email: 'enquiry@aksharalayouts.com',
  whatsappNumber: '919443288990',
  address: 'Akshara Towers, No. 42 Katpadi Main Road, Near Collectorate, Vellore - 632004',
  citiesServed: ['Vellore', 'Chittoor', 'Tirupati', 'Chennai'],
  mapEmbedUrl: 'https://maps.google.com/maps?q=Vellore+Collectorate&t=&z=13&ie=UTF8&iwloc=&output=embed',
  metaTitle: 'Akshara - DTCP & RERA Approved Residential Plotted Layouts',
  metaDesc: 'Explore premium approved residential plots in Vellore, Chittoor, Tirupati, and Chennai. 100% clear titles, 40ft asphalt roads, and complete infrastructure by Akshara.'
};

const DEFAULT_ANALYTICS = {
  totalVisitors: 4280,
  uniqueVisitors: 3120,
  todayVisitors: 142,
  totalPageViews: 12450,
  deviceBreakdown: { mobile: 68, desktop: 32 },
  projectViews: {
    'proj-1': 1420,
    'proj-2': 980,
    'proj-3': 640,
    'proj-4': 1240
  },
  dailyVisitsHistory: [
    { day: 'Mon', visits: 110 },
    { day: 'Tue', visits: 135 },
    { day: 'Wed', visits: 128 },
    { day: 'Thu', visits: 156 },
    { day: 'Fri', visits: 172 },
    { day: 'Sat', visits: 198 },
    { day: 'Sun', visits: 142 }
  ]
};

// Store Class
class AksharaStore {
  constructor() {
    this.projects = this.load(STORAGE_KEY_PROJECTS, DEFAULT_PROJECTS);
    this.boardMembers = this.load(STORAGE_KEY_BOARD, DEFAULT_BOARD);
    this.leads = this.load(STORAGE_KEY_LEADS, DEFAULT_LEADS);
    this.settings = this.load(STORAGE_KEY_SETTINGS, DEFAULT_SETTINGS);
    this.analytics = this.load(STORAGE_KEY_ANALYTICS, DEFAULT_ANALYTICS);
    
    this.listeners = [];
    this.trackSessionVisit();
  }

  getPlotData(plotId) {
    return PLOT_DATA[plotId] || null;
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`Failed to parse ${key} from storage:`, e);
      return fallback;
    }
  }

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      this.notify();
    } catch (e) {
      console.error(`Failed to save ${key}:`, e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn());
  }

  // Analytics Tracking
  trackSessionVisit() {
    const sessionKey = 'akshara_visited_session';
    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, '1');
      this.analytics.totalVisitors += 1;
      this.analytics.uniqueVisitors += 1;
      this.analytics.todayVisitors += 1;
      this.save(STORAGE_KEY_ANALYTICS, this.analytics);
    }
  }

  trackProjectView(projectId) {
    if (this.analytics.projectViews[projectId]) {
      this.analytics.projectViews[projectId] += 1;
    } else {
      this.analytics.projectViews[projectId] = 1;
    }
    this.analytics.totalPageViews += 1;
    this.save(STORAGE_KEY_ANALYTICS, this.analytics);
  }

  // Projects CRUD
  getProjects(city = 'All') {
    if (city === 'All') return this.projects;
    return this.projects.filter(p => p.city.toLowerCase() === city.toLowerCase());
  }

  getProjectById(id) {
    return this.projects.find(p => p.id === id);
  }

  addProject(projectData) {
    const newProj = {
      id: 'proj-' + Date.now(),
      featured: false,
      status: 'Ready',
      highlights: [],
      amenities: [],
      ...projectData
    };
    this.projects.unshift(newProj);
    this.save(STORAGE_KEY_PROJECTS, this.projects);
    return newProj;
  }

  updateProject(id, updatedData) {
    const idx = this.projects.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.projects[idx] = { ...this.projects[idx], ...updatedData };
      this.save(STORAGE_KEY_PROJECTS, this.projects);
    }
  }

  deleteProject(id) {
    this.projects = this.projects.filter(p => p.id !== id);
    this.save(STORAGE_KEY_PROJECTS, this.projects);
  }

  toggleFeatured(id) {
    const proj = this.getProjectById(id);
    if (proj) {
      proj.featured = !proj.featured;
      this.save(STORAGE_KEY_PROJECTS, this.projects);
    }
  }

  // Board CRUD
  getBoardMembers() {
    return this.boardMembers;
  }

  addBoardMember(data) {
    const newMember = {
      id: 'board-' + Date.now(),
      ...data
    };
    this.boardMembers.push(newMember);
    this.save(STORAGE_KEY_BOARD, this.boardMembers);
  }

  updateBoardMember(id, data) {
    const idx = this.boardMembers.findIndex(b => b.id === id);
    if (idx !== -1) {
      this.boardMembers[idx] = { ...this.boardMembers[idx], ...data };
      this.save(STORAGE_KEY_BOARD, this.boardMembers);
    }
  }

  deleteBoardMember(id) {
    this.boardMembers = this.boardMembers.filter(b => b.id !== id);
    this.save(STORAGE_KEY_BOARD, this.boardMembers);
  }

  // Leads & Submissions
  getLeads() {
    return this.leads;
  }

  addLead(leadData) {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newLead = {
      id: 'lead-' + Date.now(),
      date: formattedDate,
      status: 'New',
      ...leadData
    };
    this.leads.unshift(newLead);
    this.save(STORAGE_KEY_LEADS, this.leads);
    return newLead;
  }

  updateLeadStatus(id, newStatus) {
    const lead = this.leads.find(l => l.id === id);
    if (lead) {
      lead.status = newStatus;
      this.save(STORAGE_KEY_LEADS, this.leads);
    }
  }

  deleteLead(id) {
    this.leads = this.leads.filter(l => l.id !== id);
    this.save(STORAGE_KEY_LEADS, this.leads);
  }

  // Settings & CMS Content
  getSettings() {
    return this.settings;
  }

  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.save(STORAGE_KEY_SETTINGS, this.settings);
  }

  // Analytics Getter
  getAnalytics() {
    return this.analytics;
  }
}

window.store = new AksharaStore();
