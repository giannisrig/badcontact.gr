import Image from 'next/image'
import React from 'react'
import { StyledFullPageImage } from '@/components/common/FullPageImage/FullPageImage.styles'

export const FullPageImage = () => {
  return (
    <StyledFullPageImage>
      <Image src={'/images/pages/homepage.jpg'} alt={'Bad Contact'} quality={100} width={1920} height={2185} />
    </StyledFullPageImage>
  )
}
