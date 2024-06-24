'use client'

import Image from 'next/image'
import { StyledBaseImage } from '@/components/artwork/flames/Flames.styles'
import { StyledEye } from '@/components/artwork/eye/Eye.styles'
import { useEyeAnimations } from '@/components/artwork/eye/Eye.animations'
import { Element } from '@/definitions/element'

export const Eye = () => {
  const { eye } = useEyeAnimations()
  return (
    <StyledEye id={Element.EYE} ref={eye}>
      <StyledBaseImage>
        <Image src={'/images/Eye.svg'} alt={'Bad Contact Eightball Eye'} width={1189} height={572} quality={100} />
      </StyledBaseImage>
    </StyledEye>
  )
}
