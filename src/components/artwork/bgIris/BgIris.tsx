import React from 'react'
import { StyledBgIris } from '@/components/artwork/bgIris/BgIris.styles'
import Image from 'next/image'

export const BgIris = () => (
  <StyledBgIris>
    <Image
      src={'/images/artwork/BgEyeLines.png'}
      alt={'Background eye iris'}
      width={2031}
      height={1901}
      quality={100}
    />
  </StyledBgIris>
)
