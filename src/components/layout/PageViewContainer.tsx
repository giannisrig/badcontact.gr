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
import { MenuButton } from '@/components/common/MenuButton/MenuButton'
import { AnimationsLoader } from '@/components/common/AnimationsLoader/AnimationsLoader'
import MenuOverlay from '@/components/common/MenuOverlay/MenuOverlay'
import { Footer } from '@/components/common/Footer/Footer'
import { Header } from '@/components/common/Header/Header'
import { FullPageImage } from '@/components/common/FullPageImage/FullPageImage'

export const PageViewContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingScreen />
      <div className='grain' />
      {/*=== LEVEL 0 ===*/}
      <ScreenLevelView level={0}>
        <BgIris />
        <FullPageImage />
      </ScreenLevelView>
      {/*=== LEVEL 1 ===*/}
      <ScreenLevelView level={1}>
        <EyeFlames />
      </ScreenLevelView>
      {/*=== LEVEL 2 ===*/}
      {/*=== LEVEL 3 - Main Content ===*/}
      <PageContentContainer>{children}</PageContentContainer>
      {/*=== LEVEL 4 ===*/}
      <ContentFader />
      <Terrain />
      <MenuOverlay />
      {/*=== LEVEL 5 ===*/}
      <div id={`level-view-5`} className={`fixed left-0 top-0 z-5 flex h-auto w-full justify-center`}>
        <Logo />
      </div>
      {/*=== LEVEL 6 ===*/}
      <Footer />
      {/*=== LEVEL 7 ===*/}
      <Header />
      <MenuButton />
      <AnimationsLoader />
    </>
  )
}
