export type Project = {
  id: string
  title: string
  category: string
  categorySlug: string
  location: string
  description: string
  tags: string[]
  gradient: string
  image?: string
}

export const projectCategories = [
  { label: 'All', slug: 'all' },
  { label: 'Smart Home', slug: 'smart-home' },
  { label: 'Security', slug: 'home-security' },
  { label: 'Industrial', slug: 'industrial-application' },
  { label: 'Lighting', slug: 'smart-ambient-lights' },
  { label: 'Shading', slug: 'smart-shading-system' },
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Luxury Villa Automation',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    location: 'Chandigarh, Punjab',
    description: 'Complete 4BHK automation with KNX lighting, motorised shading, climate control, and multi-room audio.',
    tags: ['KNX', 'Lighting', 'Shading', 'Climate'],
    gradient: 'from-stone-800 to-stone-950',
    image: '/images/projects/project-3.jpg',
  },
  {
    id: 'p2',
    title: 'Commercial Office Security',
    category: 'Home Security',
    categorySlug: 'home-security',
    location: 'Chandigarh',
    description: '32-camera IP surveillance system with access control, biometric entry, and 24/7 monitoring dashboard.',
    tags: ['CCTV', 'Access Control', 'Biometric'],
    gradient: 'from-slate-800 to-slate-950',
    image: '/images/projects/project-2.jpg',
  },
  {
    id: 'p3',
    title: 'Finesse Dental Clinic',
    category: 'Smart Ambient Lights',
    categorySlug: 'smart-ambient-lights',
    location: 'Mohali, Punjab',
    description: 'Scene-based clinical and ambient lighting with circadian rhythm scheduling for patient comfort.',
    tags: ['KNX', 'Circadian', 'Scene Control'],
    gradient: 'from-amber-900 to-stone-950',
    image: '/images/projects/project-4.jpg',
  },
  {
    id: 'p4',
    title: 'Industrial Plant Control',
    category: 'Industrial Application',
    categorySlug: 'industrial-application',
    location: 'Ludhiana, Punjab',
    description: 'SCADA-integrated automation for a manufacturing unit with energy management and remote monitoring.',
    tags: ['SCADA', 'Energy', 'Remote Monitor'],
    gradient: 'from-zinc-800 to-zinc-950',
  },
  {
    id: 'p5',
    title: 'Penthouse Shading & Lighting',
    category: 'Smart Shading System',
    categorySlug: 'smart-shading-system',
    location: 'Mohali, Punjab',
    description: 'Motorised blackout and sheer blinds across 14 zones, integrated with KNX lighting for full ambience control.',
    tags: ['Motorised Blinds', 'KNX', '14 Zones'],
    gradient: 'from-neutral-800 to-neutral-950',
    image: '/images/projects/project-1.jpg',
  },
  {
    id: 'p6',
    title: 'Ganpati Realtors — Residences',
    category: 'Smart Home',
    categorySlug: 'smart-home',
    location: 'Punjab',
    description: 'Smart home packages for 24 residential units — lighting control, security, and app-based management.',
    tags: ['Multi-unit', 'Lighting', 'Security'],
    gradient: 'from-stone-700 to-stone-950',
  },
]
