'use client'

import Image from 'next/image'
import { useFlamesAnimation } from './Flames.animations'
import {
  StyledBaseImage,
  StyledFlames,
  StyledGradientCircle,
  StyledAbsoluteImage,
} from '@/components/artwork/flames/Flames.styles'
import { Sparkles } from '@/components/artwork/sparkles/Sparkles'
import { Element } from '@/definitions/element'

export const FLAMES_DIMENSIONS = {
  width: 1238,
  height: 807,
}

export const Flames = () => {
  const { lightFlames, mediumFlames, darkFlames, clonedBaseFlames, fireGradient, flamesContainer } =
    useFlamesAnimation()

  return (
    <StyledFlames id={Element.FLAMES} ref={flamesContainer}>
      <StyledBaseImage>
        <Image
          src={'/images/flames/FlamesBase.svg'}
          alt={'Bad Contact Eightball Flames'}
          width={FLAMES_DIMENSIONS.width}
          height={FLAMES_DIMENSIONS.height}
          quality={100}
        />
      </StyledBaseImage>
      <StyledAbsoluteImage ref={clonedBaseFlames} className='z--1'>
        <Image
          src={'/images/flames/FlamesBase.svg'}
          alt={'Bad Contact Eightball Flames duplicate'}
          width={FLAMES_DIMENSIONS.width}
          height={FLAMES_DIMENSIONS.height}
          quality={100}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={lightFlames} className='z-1'>
        <Image
          src={'/images/flames/FlamesLight.png'}
          alt={'Bad Contact Eightball Flames Light'}
          width={FLAMES_DIMENSIONS.width}
          height={FLAMES_DIMENSIONS.height}
          quality={100}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={mediumFlames} className='z-2'>
        <Image
          src={'/images/flames/FlamesMedium.png'}
          alt={'Bad Contact Eightball Flames Neutral'}
          width={FLAMES_DIMENSIONS.width}
          height={FLAMES_DIMENSIONS.height}
          quality={100}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={darkFlames} className='z-3'>
        <Image
          src={'/images/flames/FlamesDark.png'}
          alt={'Bad Contact Eightball Flames Dark'}
          width={FLAMES_DIMENSIONS.width}
          height={FLAMES_DIMENSIONS.height}
          quality={100}
        />
      </StyledAbsoluteImage>
      <Sparkles />
      <StyledGradientCircle ref={fireGradient} />
    </StyledFlames>
  )
}
