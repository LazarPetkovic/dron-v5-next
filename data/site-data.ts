export type Service = {
  title: string
  text: string
  featured?: boolean
}

export type Project = {
  title: string
  category: string
  tag: string
  text: string
  size?: 'large' | 'medium' | 'small'
  imageSrc?: string
  videoSrc?: string
}

export type ProcessStep = {
  title: string
  text: string
}

export type FAQ = {
  question: string
  answer: string
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
]

export const contactInfo = {
  email: 'hello@dronv5.com',
  phone: '+381 60 555 0000',
  serviceArea: 'Belgrade',
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/dronv5' },
  { label: 'YouTube', href: 'https://youtube.com/@dronv5' },
  { label: 'TikTok', href: 'https://tiktok.com/@dronv5' },
  { label: 'Vimeo', href: 'https://vimeo.com/dronv5' },
]

export const services: Service[] = [
  {
    title: 'Property Drone Films',
    text: 'Cinematic aerial films for houses, buildings, real estate listings, venues, and locations that need scale and polish.',
    featured: true,
  },
  {
    title: 'Aerial Photography',
    text: 'Clean drone stills for property presentations, land showcases, websites, social media, and promotional campaigns.',
  },
  {
    title: 'Wedding Drone Coverage',
    text: 'Atmospheric aerial shots for outdoor weddings, venues, arrivals, group moments, and cinematic highlight edits.',
  },
  {
    title: 'Event and Manifestation Visuals',
    text: 'Drone coverage for public events, private gatherings, festivals, sports moments, launches, and branded activations.',
  },
  {
    title: 'Land and Location Showcases',
    text: 'Wide aerial views for land, plots, construction-ready locations, tourism spots, and investment presentations.',
  },
  {
    title: 'Construction Progress Coverage',
    text: 'Planned aerial updates for construction sites, development progress, investor reports, and before-after documentation.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Plan',
    text: 'Define the location, timing, project goal, and key shots before the flight.',
  },
  {
    title: 'Capture',
    text: 'Film aerial movement, stills, location details, and the strongest angles with a clear shot direction.',
  },
  {
    title: 'Edit',
    text: 'Shape the material into cinematic sequences, short social cuts, selected still frames, or delivery-ready assets.',
  },
  {
    title: 'Deliver',
    text: 'Prepare polished files for web, social media, presentations, listings, or client review.',
  },
]

export const projects: Project[] = [
  {
    title: 'Sunset Property Film',
    category: 'Property',
    tag: 'Featured placeholder',
    text: 'A cinematic property film placeholder for houses, buildings, and premium real estate presentations in Belgrade.',
    size: 'large',
    imageSrc: '/images/SunSetImg.jpg',
  },
  {
    title: 'Belgrade Land Showcase',
    category: 'Land',
    tag: 'Land / Placeholder media',
    text: 'A future aerial overview for plots, location potential, access roads, and surrounding context.',
    size: 'small',
  },
  {
    title: 'Wedding Venue Aerials',
    category: 'Wedding',
    tag: 'Wedding / Placeholder media',
    text: 'A future visual block for venue atmosphere, arrivals, ceremony context, and cinematic exterior movement.',
    size: 'small',
  },
  {
    title: 'Event Highlight Coverage',
    category: 'Events',
    tag: 'Event / Placeholder media',
    text: 'A future event coverage tile for manifestations, launches, festivals, sports moments, and crowd atmosphere.',
    size: 'small',
  },
  {
    title: 'Construction Progress View',
    category: 'Construction',
    tag: 'Construction / Placeholder media',
    text: 'A future progress documentation tile for development sites, investor updates, and before-after records.',
    size: 'small',
  },
  {
    title: 'Brand Location Film',
    category: 'Brand',
    tag: 'Brand / Placeholder media',
    text: 'A future brand/location story for hotels, restaurants, tourism, architecture, and campaign visuals.',
    size: 'medium',
  },
]

export const projectTypes = [
  'Property / house / building',
  'Land or location showcase',
  'Wedding',
  'Event / manifestation',
  'Construction progress',
  'Brand or venue promo',
]

export const trustPoints = [
  {
    title: 'Belgrade based',
    text: 'Focused on drone visuals for Belgrade properties, events, venues, and locations.',
  },
  {
    title: 'Drone + edit workflow',
    text: 'Planning, aerial capture, and polished delivery can stay in one clean production flow.',
  },
  {
    title: 'Visual-first approach',
    text: 'Shots are planned around movement, light, angle, and the final use of the material.',
  },
]

export const faqs: FAQ[] = [
  {
    question: 'Do you work only in Belgrade?',
    answer:
      'For now, Dron V5 is focused on Belgrade. Projects outside Belgrade can be discussed later if the location, timing, and scope make sense.',
  },
  {
    question: 'What types of projects can be filmed with a drone?',
    answer:
      'Houses, buildings, land, wedding venues, outdoor weddings, events, manifestations, construction sites, hotels, restaurants, locations, and brand stories can all work well with aerial visuals.',
  },
  {
    question: 'What should I send before booking?',
    answer:
      'Send the location, preferred date, project type, rough goal, and any examples of the visual style you like. If you are not sure what you need, a short description is enough to start.',
  },
  {
    question: 'How long does a typical drone shoot take?',
    answer:
      'Smaller property or land shoots can often be planned as a focused session, while weddings, events, and construction coverage depend on the schedule and required shots.',
  },
  {
    question: 'Do you deliver both video and photos?',
    answer:
      'Yes. Depending on the project, Dron V5 can prepare aerial photos, cinematic video, short social media cuts, and selected still frames.',
  },
  {
    question: 'Can drone footage be used for social media?',
    answer:
      'Yes. Final edits can include vertical or short-form cuts for Instagram, TikTok, YouTube Shorts, and other social platforms.',
  },
]
