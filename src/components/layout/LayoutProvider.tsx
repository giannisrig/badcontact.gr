'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import fonts from '../../constants/fonts'
import {PageViewContainer} from "@/components/layout/PageViewContainer";

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GoogleAnalytics trackPageViews />
      <div className={`${fonts.primary.variable} ${fonts.secondary.variable} font-primary`}>
          <PageViewContainer>{children}</PageViewContainer>
      </div>
    </Provider>
  )
}
