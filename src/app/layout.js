import { DM_Sans } from 'next/font/google'
import './globals.css'
import PageTransition from './components/PageTransition'
import { AuroraBackground } from '@/components/ui/aurora-background'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: "Zakir's Portfolio",
  subtitle: "Zakir Gowani is a full-stack software engineer with 7+ years of experience.",
  description: "Zakir Gowani's portfolio of software projects",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
      </head>
      <body className={`${dmSans.className}`}>
        <AuroraBackground>
          <PageTransition>
            <div className="container mx-auto px-4 py-8 relative z-10">
              {children}
            </div>
          </PageTransition>
        </AuroraBackground>
      </body>
    </html>
  )
}
