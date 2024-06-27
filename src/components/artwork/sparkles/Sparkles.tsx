'use client'
import Image from 'next/image'
import { StyledAbsoluteImage } from '@/components/artwork/flames/Flames.styles'
import { SPARKLES_DIMENSIONS, StyledSparkles } from '@/components/artwork/sparkles/Sparkles.styles'
import { Element } from '@/definitions/element'
import { useSparklesAnimation } from './Sparkles.animations'
import { consoleLogger } from '@/helpers/consoleLogger'
import { ELog } from '@/definitions/logger'

export const SPARKLES_PATH = '/images/sparkles'

export const Sparkles = () => {
  const { sparklesBase, sparkles1, sparkles2, sparkles3, sparkles4 } = useSparklesAnimation()

  return (
    <StyledSparkles id={Element.SPARKLES}>
      <StyledAbsoluteImage ref={sparklesBase}>
        <Image
          src={`${SPARKLES_PATH}/BaseSparkles.png`}
          alt={'Bad Contact Eightball Sparkles'}
          width={SPARKLES_DIMENSIONS.width}
          height={SPARKLES_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Base Sparkles is loaded')
          }}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={sparkles1}>
        <Image
          src={`${SPARKLES_PATH}/sparkles1.png`}
          alt={'Sparkles part 1'}
          width={SPARKLES_DIMENSIONS.width}
          height={SPARKLES_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Base Sparkles is loaded')
          }}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={sparkles2}>
        <Image
          src={`${SPARKLES_PATH}/sparkles2.png`}
          alt={'Sparkles part 2'}
          width={SPARKLES_DIMENSIONS.width}
          height={SPARKLES_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Sparkles 2 is loaded')
          }}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={sparkles3}>
        <Image
          src={`${SPARKLES_PATH}/sparkles3.png`}
          alt={'Sparkles part 3'}
          width={SPARKLES_DIMENSIONS.width}
          height={SPARKLES_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Sparkles 3 is loaded')
          }}
        />
      </StyledAbsoluteImage>
      <StyledAbsoluteImage ref={sparkles4}>
        <Image
          src={`${SPARKLES_PATH}/sparkles4.png`}
          alt={'Sparkles part 4'}
          width={SPARKLES_DIMENSIONS.width}
          height={SPARKLES_DIMENSIONS.height}
          quality={100}
          priority={true}
          onLoad={() => {
            consoleLogger.log(ELog.IMAGE, 'Sparkles 4 is loaded')
          }}
        />
      </StyledAbsoluteImage>
    </StyledSparkles>
  )
}
