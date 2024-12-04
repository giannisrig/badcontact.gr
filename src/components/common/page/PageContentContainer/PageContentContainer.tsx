'use client'
import { useOnMenuPageContentAnimation } from '@/components/common/page/PageContentContainer/PageContentContainer.hooks'

import {
  EyeFlamesSpacer,
  TerrainSpacer,
} from '@/components/common/page/PageContentContainer/PageContentContainer.styles'
import { Element } from '@/definitions/element'

export const PageContentContainer = ({ children }) => {
  const container = useOnMenuPageContentAnimation()

  return (
    <main id={Element.MAIN} ref={container} className='relative z-3 flex flex-col items-center text-center text-white'>
      <EyeFlamesSpacer id={Element.EYE_FLAMES_SPACER} />
      {children}
      <TerrainSpacer />
    </main>
  )
}
