/**
 * Akshara Plotted Developments - Reactive Store & CMS Engine (V2 Showcase Mode)
 */

const STORAGE_KEY_PROJECTS = 'akshara_projects_v2';
const STORAGE_KEY_BOARD = 'akshara_board_v2';
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
    layoutPlan: 'assets/masterplan_blueprint.png',
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
    layoutPlan: 'assets/masterplan_blueprint.png',
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

// Board Members (Lokesh, Payani, Sandeep)
const DEFAULT_BOARD = [
  {
    id: 'board-1',
    name: 'Lokesh',
    designation: 'Founder & Managing Director',
    photo: 'assets/board_lokesh.png',
    bio: 'Visionary leader with over two decades of expertise in real estate land acquisition, masterplan layout developments, and strategic growth across Tamil Nadu & Andhra Pradesh.'
  },
  {
    id: 'board-2',
    name: 'Payani',
    designation: 'Director - Operations & Legal Compliance',
    photo: 'assets/board_payani.png',
    bio: 'Oversees project execution, statutory clearances, RERA/DTCP regulatory approvals, and ensures 100% legal title clarity for every Akshara plotted development.'
  },
  {
    id: 'board-3',
    name: 'Sandeep',
    designation: 'Director - Infrastructure & Projects',
    photo: 'assets/board_sandeep.png',
    bio: 'Leads civil engineering, heavy asphalt road construction, subterranean utility grids, and park avenue landscaping across all ongoing layout developments.'
  }
];

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
