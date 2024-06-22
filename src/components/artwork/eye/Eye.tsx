'use client'

import { StyledBaseImage } from '@/components/artwork/flames/Flames.styles'
import { StyledEye } from '@/components/artwork/eye/Eye.styles'
import { useEyeAnimations } from '@/components/artwork/eye/Eye.animations'
import { Element } from '@/definitions/element'

export const Eye = () => {
  const { eye } = useEyeAnimations()
  return (
    <StyledEye id={Element.EYE} ref={eye}>
      <StyledBaseImage src={'/images/Eye.svg'} alt={'Bad Contact Eightball Eye'} width={1189} height={572} />
    </StyledEye>
  )
}
