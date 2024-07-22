'use client'

import Image from 'next/image'
import { StyledBaseImage } from '@/components/artwork/flames/Flames.styles'
import { StyledEye } from '@/components/artwork/eye/Eye.styles'
import { useEyeAnimations } from '@/components/artwork/eye/Eye.animations'
import { Element } from '@/definitions/element'
import { consoleLogger } from '@/helpers/consoleLogger'
import { ELog } from '@/definitions/logger'

export const EYE_DIMENSIONS = {
  width: 1189,
  height: 572,
}

export const Eye = () => {
  const { eye } = useEyeAnimations()
  return (
    <StyledEye id={Element.EYE} ref={eye}>
      <StyledBaseImage>
        <Image
          src={'/images/artwork/eeye.svg'}
          alt={'Bad Contact Eightball Eye'}
          width={EYE_DIMENSIONS.width}
          height={EYE_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Eye is loaded')
          }}
        />
      </StyledBaseImage>
    </StyledEye>
  )
}
