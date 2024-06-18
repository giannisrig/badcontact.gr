process.env.NODE_NO_WARNINGS = 'stream/web'
import React from 'react'
import { Metadata } from 'next'
import '@/styles/globals.scss'
import LayoutProvider from '@/components/layout/LayoutProvider'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  )
}
