'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '917009861539'
const WHATSAPP_MESSAGE = 'Hi! I\'m interested in Evoto Technologies\' smart home solutions. Could you share more details?'

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      style={{
        boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)',
        animation: 'whatsapp-pulse 2.5s ease-in-out infinite',
      }}
    >
      <style>{`
        @keyframes whatsapp-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70%  { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
      <MessageCircle size={26} fill="white" strokeWidth={1.5} />
    </a>
  )
}
