import type { Metadata } from 'next'
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({ 
  subsets: ["latin"],
  variable: '--font-bricolage',
  display: 'swap',
})

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: '--font-public-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: 'Onias da Rocha - Software Engineer',
  description: 'Platform-focused Software Engineer at Mercado Livre. Building scalable SSR frameworks, micro frontend architectures, and design systems.',
  openGraph: {
    title: 'Onias da Rocha - Software Engineer',
    description: 'Platform-focused Software Engineer at Mercado Livre. Building scalable SSR frameworks, micro frontend architectures, and design systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${publicSans.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
      </body>
    </html>
  )
}
