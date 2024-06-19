'use client'
import { useOnMenuPageContentAnimation } from '@/components/common/page/PageContentContainer/PageContentContainer.hooks'
import { EyeFlamesSpacer } from '@/components/artwork/eyeFlames/EyeFlames.styles'

export const PageContentContainer = ({ children }) => {
  const container = useOnMenuPageContentAnimation()

  return (
    <main ref={container} className='relative z-3 flex h-screen flex-col items-center text-center text-white'>
      <EyeFlamesSpacer />
      {children}
    </main>
  )
}
