export interface Project {
  slug: string;
  title: string;
  href: string;
  description: string;
  dateRange: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  isVideo?: boolean;
  showInProjectsIndex?: boolean;
}

export interface SubpageItem {
  id: string;
  label: string;
  href: string;
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
    coverAlt: 'Aeolus rocket CAD preview'
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
    coverAlt: 'Penny Hockey game board'
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

export const aeolusNav: SubpageItem[] = [
  { id: 'overview', label: '01. Overview', href: '/projects/aeolus' },
  { id: 'vehicle', label: '02. Vehicle', href: '/projects/aeolus/vehicle' },
];

export function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Project metadata not found for "${slug}".`);
  }

  return project;
}
