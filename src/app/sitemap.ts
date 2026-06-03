import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://evototechnologies.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://evototechnologies.com/about', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://evototechnologies.com/services/knx-automation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://evototechnologies.com/services/wireless-automation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/motorised-curtains-blinds', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/motorised-gates', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/cctv-security', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/video-door-phone', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/audio-video', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/hvac-control', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/smart-lighting', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/smart-shading', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/services/epabx', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://evototechnologies.com/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://evototechnologies.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://evototechnologies.com/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://evototechnologies.com/terms-conditions', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
