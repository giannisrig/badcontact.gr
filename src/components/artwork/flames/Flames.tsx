'use client'
import { useFlamesAnimation } from './Flames.animations'
import {
  StyledBaseImage,
  StyledFlames,
  StyledGradientCircle,
  StyledAbsoluteImage,
} from '@/components/artwork/flames/Flames.styles'
import { Sparkles } from '@/components/artwork/sparkles/Sparkles'

export const FLAMES_DIMENSIONS = {
  width: 1238,
  height: 807,
}

export const Flames = () => {
  const { lightFlames, mediumFlames, darkFlames, clonedBaseFlames, fireGradient } = useFlamesAnimation()

  return (
    <StyledFlames id='flames'>
      <StyledBaseImage
        src={'/images/flames/FlamesBase.svg'}
        alt={'Bad Contact Eightball Flames'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
      />
      <StyledAbsoluteImage
        ref={clonedBaseFlames}
        src={'/images/flames/FlamesBase.svg'}
        alt={'Bad Contact Eightball Flames duplicate'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z--1'
      />
      <StyledAbsoluteImage
        ref={lightFlames}
        src={'/images/flames/FlamesLight.png'}
        alt={'Bad Contact Eightball Flames Light'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-1'
      />
      <StyledAbsoluteImage
        ref={mediumFlames}
        src={'/images/flames/FlamesMedium.png'}
        alt={'Bad Contact Eightball Flames Neutral'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-2'
      />
      <StyledAbsoluteImage
        ref={darkFlames}
        src={'/images/flames/FlamesDark.png'}
        alt={'Bad Contact Eightball Flames Dark'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-3'
      />
      <Sparkles />
      <StyledGradientCircle ref={fireGradient} />
    </StyledFlames>
  )
}
