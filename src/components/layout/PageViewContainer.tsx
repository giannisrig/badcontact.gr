'use client'
import React from 'react'
import { ScreenLevelView } from '@/components/layout/ScreenLevelView/ScreenLevelView'
import { PageContentContainer } from '@/components/common/page/PageContentContainer'
import { EyeFlames } from '@/components/artwork/eyeFlames/EyeFlames'

export const PageViewContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='grain' />
      {/* For BG decorations */}
      <ScreenLevelView level={0} />
      {/* For Flames & Eye */}
      <ScreenLevelView level={1}>
        <EyeFlames />
      </ScreenLevelView>
      {/* Eye */}
      <ScreenLevelView level={2} />
      <PageContentContainer>{children}</PageContentContainer>
      {/* Anything that covers content, Terrain */}
      <ScreenLevelView level={4} />
      {/* Anything that's above everything, logo, buttons */}
      <ScreenLevelView level={5} />
    </>
  )
}
