import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'PlayPal Tech | Premium Web & App Development',
  description: 'We build stunning websites, mobile apps, and SaaS products that help ambitious startups and enterprises succeed.',
  keywords: ['web development', 'mobile apps', 'SaaS', 'software development', 'PlayPal Tech'],
  authors: [{ name: 'PlayPal Tech' }],
  openGraph: {
    title: 'PlayPal Tech | Premium Web & App Development',
    description: 'We build stunning websites, mobile apps, and SaaS products that help ambitious startups and enterprises succeed.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PlayPal Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PlayPal Tech | Premium Web & App Development',
    description: 'We build stunning websites, mobile apps, and SaaS products.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased noise-overlay">
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
