import StoreProvider from './StoreProvider'

process.env.NODE_NO_WARNINGS = 'stream/web'
import React from 'react'
import { Metadata } from 'next'
import '@/styles/globals.scss'
import { GoogleAnalyticsProvider } from './GoogleAnalyticsProvider'
import fonts from '@/constants/fonts'
import { PageViewContainer } from '@/components/layout/PageViewContainer'

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
      <body suppressHydrationWarning>
        <StoreProvider>
          <GoogleAnalyticsProvider />
          <div className={`${fonts.primary.variable} ${fonts.secondary.variable} font-primary`}>
            <PageViewContainer>{children}</PageViewContainer>
          </div>
        </StoreProvider>
      </body>
    </html>
  )
}
