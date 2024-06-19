'use client'

import { StyledBaseImage } from '@/components/artwork/flames/Flames.styles'
import { StyledEye } from '@/components/artwork/eye/Eye.styles'

export const Eye = () => {
  return (
    <StyledEye id='eye'>
      <StyledBaseImage src={'/images/Eye.svg'} alt={'Bad Contact Eightball Eye'} width={1189} height={572} />
    </StyledEye>
  )
}
