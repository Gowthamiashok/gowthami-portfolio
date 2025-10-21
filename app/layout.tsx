import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gowthami A - Portfolio',
  description: 'Full Stack Developer & UI/UX Designer Portfolio',
  keywords: ['portfolio', 'developer', 'designer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Gowthami A' }],
  openGraph: {
    title: 'Gowthami A - Portfolio',
    description: 'Full Stack Developer & UI/UX Designer Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
