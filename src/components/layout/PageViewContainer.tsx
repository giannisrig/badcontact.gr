'use client'
import React from 'react'
import { ScreenLevelView } from '@/components/layout/ScreenLevelView/ScreenLevelView'
import { PageContentContainer } from '@/components/common/page/PageContentContainer'
import { EyeFlames } from '@/components/artwork/eyeFlames/EyeFlames'
import { Logo } from '@/components/artwork/logo/Logo'
import { BgIris } from '@/components/artwork/bgIris/BgIris'
import { Terrain } from '@/components/artwork/terrain/Terrain'
import { ContentFader } from '@/components/layout/ContentFader/ContentFader'
import { LoadingScreen } from '@/components/layout/LoadingScreen'

export const PageViewContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingScreen />
      <div className='grain' />
      {/* For BG decorations */}
      <ScreenLevelView level={0}>
        <BgIris />
      </ScreenLevelView>
      {/* For Flames & Eye */}
      <ScreenLevelView level={1}>
        <EyeFlames />
      </ScreenLevelView>
      {/* Eye */}
      <ScreenLevelView level={2} />
      <PageContentContainer>{children}</PageContentContainer>
      {/* Anything that covers content, Terrain */}
      <ScreenLevelView level={4} />
      <Terrain />
      <ContentFader />
      {/* Anything that's above everything, logo, buttons */}
      <div id={`level-view-5`} className={`fixed left-0 top-0 z-5 flex h-auto w-full justify-center`}>
        <Logo />
      </div>
    </>
  )
}
