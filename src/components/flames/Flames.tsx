'use client'
import { useFlamesAnimation } from '@/components/flames/Flames.animations'
import { StyledBaseImage, StyledFlames, StyledShadeImage } from '@/components/flames/Flames.styles'

export const FLAMES_DIMENSIONS = {
  width: 1238,
  height: 807,
}

export const Flames = () => {
  const { lightFlames, mediumFlames, darkFlames, clonedBaseFlames } = useFlamesAnimation()

  return (
    <StyledFlames>
      <StyledBaseImage
        src={'/images/flames/FlamesBase.svg'}
        alt={'Bad Contact Eightball Flames'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
      />
      <StyledShadeImage
        ref={clonedBaseFlames}
        src={'/images/flames/FlamesBase.svg'}
        alt={'Bad Contact Eightball Flames duplicate'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z--1'
      />
      <StyledShadeImage
        ref={lightFlames}
        src={'/images/flames/FlamesLight.svg'}
        alt={'Bad Contact Eightball Flames Light'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-1'
      />
      <StyledShadeImage
        ref={mediumFlames}
        src={'/images/flames/FlamesMedium.svg'}
        alt={'Bad Contact Eightball Flames Neutral'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-2'
      />
      <StyledShadeImage
        ref={darkFlames}
        src={'/images/flames/FlamesDark.svg'}
        alt={'Bad Contact Eightball Flames Dark'}
        width={FLAMES_DIMENSIONS.width}
        height={FLAMES_DIMENSIONS.height}
        className='z-3'
      />
    </StyledFlames>
  )
}
