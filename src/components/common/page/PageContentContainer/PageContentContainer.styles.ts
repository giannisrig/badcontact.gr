import styled from 'styled-components'
import { StyledEyeWithFlames } from '@/components/artwork/eyeFlames/EyeFlames.styles'
import { BaseTerrainDimensions } from '@/components/artwork/terrain/Terrain.styles'

export const TerrainSpacer = styled(BaseTerrainDimensions)`
  position: relative;
`

export const EyeFlamesSpacer = styled(StyledEyeWithFlames)`
  position: relative;
  width: 100%;
  margin-bottom: 200px;
`
