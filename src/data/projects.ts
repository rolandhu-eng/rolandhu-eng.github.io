export interface Project {
  slug: string;
  title: string;
  href: string;
  description: string;
  dateRange: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  heroPosition?: string;
  isVideo?: boolean;
  showInProjectsIndex?: boolean;
  sidebarTitle?: string;
}

export interface SubpageItem {
  id: string;
  label: string;
  href: string;
  children?: SubpageItem[];
}

export const projects: Project[] = [
  {
    slug: 'aeolus',
    title: 'Aeolus',
    href: '/projects/aeolus',
    description: 'EDF-powered hybrid TVC/fin active control rocket',
    dateRange: 'Jan 2026 - Present',
    tags: ['CAD', 'MATLAB/Simulink', 'CFD', 'C++', 'Python'],
    cover: '/assets/aeolus/aeolustemp.png',
    coverAlt: 'Aeolus rocket CAD preview',
    sidebarTitle: 'Contents'
  },
  {
    slug: 'wind-tunnel',
    title: 'Wind Tunnel',
    href: '/projects/wind-tunnel',
    description: 'Designed and built a subsonic wind tunnel for aerodynamic testing of scale models.',
    dateRange: 'Dec 2024 - Feb 2025',
    tags: ['Aerodynamics', 'CAD', 'Fabrication'],
    cover: '/assets/wind-tunnel/windtunnelEAD.mp4',
    coverAlt: 'Wind tunnel airflow demonstration',
    isVideo: true
  },
  {
    slug: 'quadruped-robot',
    title: 'Quadruped Robot',
    href: '/projects/quadruped-robot',
    description: 'Four-legged robot integrating mechanical design, electronics, and programming.',
    dateRange: 'October - November 2024',
    tags: ['Robotics', 'CAD', 'Fabrication'],
    cover: '/assets/robot-dog/cad.webp',
    coverAlt: 'Quadruped robot'
  },
  {
    slug: 'penny-hockey',
    title: 'Penny Hockey',
    href: '/projects/penny-hockey',
    description: 'Tabletop game board with laser-cut construction, 3D-printed parts, and Arduino scoring.',
    dateRange: 'Dec 2024 - Feb 2025',
    tags: ['CAD', 'Arduino', 'Fabrication'],
    cover: '/assets/penny-hockey/pennyHockey.jpg',
    coverAlt: 'Penny Hockey game board',
    heroPosition: 'top'
  },
  {
    slug: 'schlieren-imaging',
    title: 'Schlieren Imaging',
    href: '/projects/schlieren-imaging',
    description: 'Visualizing invisible airflow and density gradients with a DIY schlieren setup.',
    dateRange: 'In Progress',
    tags: ['Optics', 'CAD', 'Fabrication'],
    cover: '/assets/images/sunrise.webp',
    coverAlt: 'Schlieren imaging project placeholder'
  },
  {
    slug: 'ship-model',
    title: 'Ship Models',
    href: '/projects/ship-model',
    description: 'Precision-built scale models and historical recreation of naval ships.',
    dateRange: 'Ongoing',
    tags: ['Scale Modeling', 'History', 'Craftsmanship'],
    cover: '/assets/ship-model/ModelShip.jpg',
    coverAlt: 'Scale ship model',
    showInProjectsIndex: false
  }
];

export const projectIndexProjects = projects.filter((project) => project.showInProjectsIndex !== false);


//child pages example
  // { id: 'overview', label: '00 Overview', href: '/projects/aeolus' },
  // ({
  //   id: 'vehicle',
  //   label: '01 Vehicle',
  //   href: '/projects/aeolus/vehicle',
  //   children: [
  //     { id: 'vehicle-av', label: '1.1 Avionics', href: '/projects/aeolus/vehicle/avionics' },
  //     { id: 'vehicle-structure', label: '1.2 Structure', href: '/projects/aeolus/vehicle/structure' },
  //     { id: 'vehicle-aerodynamics', label: '1.3 Aerodynamics', href: '/projects/aeolus/vehicle/aerodynamics' }
  //   ]
  // } as any),
  
export const aeolusNav = [
  { id: 'overview', label: '0. Overview', href: '/projects/aeolus' },

  {
    id: 'vehicle',
    label: '1. Vehicle',
    href: '/projects/aeolus/vehicle'
  },

  {
    id: 'propulsion',
    label: '2. Propulsion',
    href: '/projects/aeolus/propulsion',
  },

  {
    id: 'control',
    label: '3. Control',
    href: '/projects/aeolus/control',
  },

  {
    id: 'avionics',
    label: '4. Avionics',
    href: '/projects/aeolus/avionics',
  },

  {
    id: 'state-estimation',
    label: '5. State Estimation',
    href: '/projects/aeolus/state-estimation',
  },

  {
    id: 'simulation',
    label: '6. Simulation',
    href: '/projects/aeolus/simulation',
  },

  {
    id: 'communications',
    label: '7. Communications',
    href: '/projects/aeolus/communications',
  },

  {
    id: 'testing',
    label: '8. Testing',
    href: '/projects/aeolus/testing',
  },
];
export const windTunnelNav = []; 
export const quadrupedNav = [];

// ADD THIS NEW FUNCTION:
export function getProjectNav(slug: string): SubpageItem[] {
  const navigations: Record<string, SubpageItem[]> = {
    'aeolus': aeolusNav,
    'wind-tunnel': windTunnelNav,
    'quadruped-robot': quadrupedNav,
    // Add future projects here...
  };

  // Return the matching nav, or an empty array if the project has no subpages
  return navigations[slug] || []; 
}

export function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Project metadata not found for "${slug}".`);
  }

  return project;
}
