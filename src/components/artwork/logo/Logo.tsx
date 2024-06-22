import styled from 'styled-components'
import { Element } from '@/definitions/element'

export const StyledArtWorkLogo = styled.img`
  width: min(50%, 250px);
  position: relative;
  aspect-ratio: 520/293;
  max-height: 160px;
  transform-origin: top;
`

export const Logo = () => {
  return (
    <StyledArtWorkLogo
      id={Element.LOGO}
      src={'/images/BadContactLogo.svg'}
      alt={'Bad Contact Eightball Logo'}
      width={520}
      height={293}
    />
  )
}
