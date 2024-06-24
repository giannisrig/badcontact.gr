import React from 'react'
import { StyledTerrainContainer, StyledTerrainLave } from '@/components/artwork/terrain/Terrain.styles'
import Image from 'next/image'

export const Terrain = () => (
  <StyledTerrainContainer>
    <StyledTerrainLave>
      <Image src={'/images/artwork/Terrain.png'} alt={'Terrain'} width={1345} height={664} quality={100} />
    </StyledTerrainLave>
  </StyledTerrainContainer>
)
