import styled from 'styled-components'
import { StyledAbsoluteImage } from '@/components/artwork/flames/Flames.styles'

export const BaseTerrainDimensions = styled.div`
  max-height: min(35vh, 300px);
  min-height: 25vw;
  aspect-ratio: 1310/559;
  width: 100%;
`

export const StyledTerrainContainer = styled(BaseTerrainDimensions)`
  position: fixed;
  bottom: 0;
  z-index: 4;
`

export const StyledTerrainLave = styled(StyledAbsoluteImage)`
  width: 110%;
  opacity: 1;
  left: 0;
  aspect-ratio: 1310/559;

  img {
    width: 100%;
    height: auto;
  }
`
