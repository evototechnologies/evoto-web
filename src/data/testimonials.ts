export type Testimonial = {
  name: string
  title: string
  company: string
  quote: string
  rating: number
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Harshdeep Multani',
    title: 'Owner',
    company: 'Finesse Dental Clinic',
    rating: 5,
    image: '/images/testimonials/dr-multani.jpg',
    quote:
      'Evoto Technologies transformed our clinic with a seamless smart lighting and security system. The installation was professional, the team was knowledgeable, and the result exceeded our expectations. Our patients notice the difference the moment they walk in.',
  },
  {
    name: 'Arjun Sharma',
    title: 'Director',
    company: 'Ganpati Realtors',
    rating: 5,
    image: '/images/testimonials/arjun.jpg',
    quote:
      'We have integrated Evoto\'s smart home systems across multiple residential projects and the feedback from our buyers has been outstanding. Their KNX-certified solutions add genuine value and help us differentiate our developments in a competitive market.',
  },
  {
    name: 'D.S. Bhatia',
    title: 'Director',
    company: 'Holiday Concepts / Primeland Estates',
    rating: 5,
    image: '/images/testimonials/dsbhatia.jpg',
    quote:
      'Working with Evoto Technologies has been a pleasure from consultation to completion. Their understanding of both technology and design sensibility is rare. The motorised shading and ambient lighting they installed at our flagship property are simply world-class.',
  },
]
