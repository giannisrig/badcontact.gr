import styled from 'styled-components'
import Image from 'next/image'
import { EImage, Element } from '@/definitions/element'
import { useImageLoader } from '@/hooks/useImageLoader'
import Link from 'next/link'

export const StyledArtWorkLogo = styled.div`
  width: min(50%, 170px);
  position: relative;
  aspect-ratio: 520/293;
  max-height: 160px;
  transform-origin: top;
`

export const Logo = () => {
  const { onLoadImage } = useImageLoader()

  return (
    <StyledArtWorkLogo id={Element.LOGO}>
      <Link href={'/'}>
        <Image
          src={'/images/BadContactLogo.svg'}
          alt={'Bad Contact Eightball Logo'}
          width={520}
          height={293}
          quality={100}
          priority={true}
          onLoad={onLoadImage(EImage.LOGO)}
        />
      </Link>
    </StyledArtWorkLogo>
  )
}
