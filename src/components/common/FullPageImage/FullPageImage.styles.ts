import styled from 'styled-components'
import { StyledAbsoluteImage } from '@/components/artwork/flames/Flames.styles'

export const StyledFullPageImage = styled(StyledAbsoluteImage)`
  opacity: 0.17;
  left: auto;
  top: 240px;
  width: 1330px;
  max-width: 100%;

  @media only screen and (max-width: 999px) {
    top: 250px;
  }

  @media only screen and (max-width: 666px) {
    max-width: 110%;
    top: 220px;
  }
`
