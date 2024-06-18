'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import fonts from '../../constants/fonts'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
      <div className={`${fonts.primary.variable} ${fonts.secondary.variable} font-primary`}>
        <div className='grain' />
        {children}
      </div>
    </Provider>
  )
}
