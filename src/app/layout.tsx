import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { OrganizationSchema } from '@/components/seo/OrganizationSchema'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Evoto Technologies | Smart Home Automation Company India',
    template: '%s | Evoto Technologies',
  },
  description:
    'Evoto Technologies delivers premium smart home automation in India. KNX certified. Wired & wireless solutions: smart lighting, motorised curtains, CCTV, HVAC, audio-video, and more. Chandigarh, Punjab, pan-India.',
  metadataBase: new URL('https://evototechnologies.com'),
  keywords: [
    'smart home automation India',
    'KNX automation India',
    'home automation company Punjab',
    'smart home company Chandigarh',
    'KNX certified integrator India',
    'wired home automation India',
    'wireless home automation India',
  ],
  openGraph: {
    siteName: 'Evoto Technologies',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://evototechnologies.com',
  },
}

const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('evoto-theme');
    var p = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', s || p || 'dark');
  } catch(e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
