export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Evoto Technologies',
    description:
      'Premium smart home automation company in India. KNX certified integrator offering wired and wireless automation, security systems, motorised curtains, HVAC control, audio-video solutions, CCTV, video door phone, and EPABX.',
    url: 'https://evototechnologies.com',
    logo: 'https://evototechnologies.com/images/evoto-logo.png',
    telephone: '+917009861539',
    email: 'info@evototechnologies.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chandigarh',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    areaServed: ['Punjab', 'Chandigarh', 'Delhi NCR', 'India'],
    sameAs: [
      'https://www.facebook.com/evototechnologies/',
      'https://www.instagram.com/evototechnologies/',
      'https://www.linkedin.com/company/evototechnologies/',
    ],
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'KNX Certified Partner' },
      { '@type': 'EducationalOccupationalCredential', name: 'BIS Certified' },
      { '@type': 'EducationalOccupationalCredential', name: 'WPC Certified' },
    ],
    knowsAbout: [
      'KNX Home Automation',
      'Wireless Smart Home',
      'Motorised Curtains',
      'Motorised Gates',
      'CCTV Security',
      'Video Door Phone',
      'Smart Lighting',
      'HVAC Automation',
      'Audio Video Solutions',
      'EPABX Systems',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
