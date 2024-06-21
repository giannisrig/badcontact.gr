import React from 'react'
import { StyledTerrainContainer, StyledTerrainLave } from '@/components/artwork/terrain/Terrain.styles'

export const Terrain = () => (
  <StyledTerrainContainer>
    <StyledTerrainLave src={'/images/artwork/Terrain.png'} alt={'Terrain'} width={1345} height={664} />
  </StyledTerrainContainer>
)
