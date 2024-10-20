import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodridev | Portafolio',
  description: 'Desarrollador Frontend de 23 años, con experiencia intermedia en tecnologías frontend y conocimientos básicos de backend. Como autodidacta, siempre busco nuevas oportunidades de aprendizaje y desafíos que impulsen mi crecimiento y contribuyan a soluciones innovadoras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='scroll-smooth'>
      <head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body className='scroll-smooth'>
        <section className='bg-nosis fixed inset-0 opacity-40 mix-blend-overlay pointer-events-none'>
        </section>


        <div className="fixed w-full h-full top-0 overflow-hidden z-[-2]">
      <svg
        id="animated-background"
        className="absolute inset-0 w-full h-full opacity-0"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        data-light-colors='{"primary":"#bbe7ff","secondary":"#eef9ff"}'
        data-dark-colors='{"primary":"#1c3b67","secondary":"#030712"}'
        style={{ opacity: 1 }}
      >
        <rect
          width="150%"
          height="150%"
          x="-65%"
          y="-65%"
          fill="url(#gradient1a)"
        />
        <rect
          width="200%"
          height="200%"
          x="10%"
          y="-80%"
          fill="url(#gradient1b)"
        />
        <rect
          width="200%"
          height="150%"
          x="-50%"
          y="30%"
          fill="url(#gradient1c)"
        />
        <defs>
          <radialGradient id="gradient1a">
            <stop offset="0%" stopColor="#1c3b67">
              <animate
                attributeName="stop-color"
                values="#1c3b67;#030712;#1c3b67;#1c3b67;#030712;#1c3b67;#1c3b67"
                dur="20s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gradient1b">
            <stop offset="0%" stopColor="#030712">
              <animate
                attributeName="stop-color"
                values="#030712;#1c3b67;#1c3b67;#1c3b67;#1c3b67;#1c3b67;#030712"
                dur="20s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gradient1c">
            <stop offset="0%" stopColor="#1c3b67">
              <animate
                attributeName="stop-color"
                values="#1c3b67;#030712;#1c3b67;#1c3b67;#030712;#1c3b67;#1c3b67"
                dur="20s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
        <Header />
    
          {children}
        </body>
    </html>
  )
}
