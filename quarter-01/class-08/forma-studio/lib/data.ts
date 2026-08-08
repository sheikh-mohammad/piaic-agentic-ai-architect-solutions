const u = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
] as const;

export const MARQUEE_ITEMS = [
  'Interior Architecture',
  'Residential Design',
  'Commercial & Workplace',
  'Product & Furniture',
  'Master Planning',
  'Retail & Hospitality',
] as const;

export type Project = {
  index: string;
  title: string;
  category: string;
  location: string;
  year: string;
  src: string;
  alt: string;
  wide?: boolean;
};

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'The Halo House',
    category: 'Residential',
    location: 'Lahore',
    year: '2025',
    src: u('photo-1600585154340-be6161a56a0c'),
    alt: 'Modern home exterior at dusk with warm interior glow',
  },
  {
    index: '02',
    title: 'Pinnacle Workspace',
    category: 'Commercial',
    location: 'Karachi',
    year: '2024',
    src: u('photo-1486406146926-c627a92ad1ab'),
    alt: 'Glass and steel corporate tower looking upward',
    wide: true,
  },
  {
    index: '03',
    title: 'Villa Meridian',
    category: 'Residential',
    location: 'Dubai',
    year: '2024',
    src: u('photo-1512917774080-9991f1c4c750'),
    alt: 'Luxury villa with pool and landscaped garden',
  },
  {
    index: '04',
    title: 'Oak & Steel Loft',
    category: 'Interior',
    location: 'Islamabad',
    year: '2023',
    src: u('photo-1618221195710-dd6b41faaea6'),
    alt: 'Minimalist loft living room with natural light',
    wide: true,
  },
  {
    index: '05',
    title: 'Casa Lumière',
    category: 'Hospitality',
    location: 'Doha',
    year: '2023',
    src: u('photo-1600607687939-ce8a6c25118c'),
    alt: 'Hotel interior with sculptural staircase',
  },
];

export const STATS = [
  { value: 18, suffix: '', label: 'Years of practice' },
  { value: 240, suffix: '+', label: 'Projects delivered' },
  { value: 32, suffix: '', label: 'International awards' },
  { value: 6, suffix: '', label: 'Countries, one studio' },
] as const;

export const SERVICES = [
  {
    index: '01',
    title: 'Interior Architecture',
    description:
      'Spatial planning and structure that shape how rooms feel before a single surface is chosen.',
  },
  {
    index: '02',
    title: 'Residential Design',
    description:
      'Homes tuned to the way families actually live — light, circulation and calm in balance.',
  },
  {
    index: '03',
    title: 'Commercial & Workplace',
    description:
      'Offices and retail environments engineered for culture, brand and daily human flow.',
  },
  {
    index: '04',
    title: 'Product & Furniture',
    description:
      'A small atelier of pieces designed in-house, from joinery details to signature lighting.',
  },
  {
    index: '05',
    title: 'Master Planning',
    description:
      'Site-scale thinking — landscape, massing and infrastructure composed as one gesture.',
  },
] as const;

export const PROCESS_STEPS = [
  {
    index: '01',
    title: 'Discover',
    description:
      'We listen first — your brief, site and rituals become the constraints that unlock the design.',
  },
  {
    index: '02',
    title: 'Design',
    description:
      'Iterative studies in light, material and proportion. Concepts are drawn, tested and refined.',
  },
  {
    index: '03',
    title: 'Develop',
    description:
      'Bespoke detailing and construction documents, costed and coordinated down to the last fixing.',
  },
  {
    index: '04',
    title: 'Deliver',
    description:
      'We stay through handover — commissioning, styling and the final walkthrough with you.',
  },
] as const;

export const JOURNAL = [
  {
    tag: 'Essay',
    title: 'Light as a material: designing with luminance',
    read: '6 min read',
    src: u('photo-1511818966892-d7d671e672a2', 1200),
    alt: 'Interior flooded with warm natural light through tall windows',
  },
  {
    tag: 'Materiality',
    title: 'The quiet luxury of natural materials',
    read: '4 min read',
    src: u('photo-1523217582562-09d0def993a6', 1200),
    alt: 'House exterior glowing at dusk with wooden cladding',
  },
  {
    tag: 'Research',
    title: 'Biophilic interiors that breathe',
    read: '8 min read',
    src: u('photo-1616486338812-3dadae4b4ace', 1200),
    alt: 'Indoor plants and organic textures in a modern interior',
  },
] as const;

export const CONTACT = {
  email: 'studio@formastudio.pk',
  phone: '+92 21 3456 7890',
  address: '13-A Clifton Block, Karachi, Pakistan',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Pinterest', href: '#' },
  ],
} as const;
