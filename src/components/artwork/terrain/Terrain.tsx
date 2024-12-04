'use client'
import React from 'react'
import Image from 'next/image'
import { StyledTerrainContainer, StyledTerrainLave } from '@/components/artwork/terrain/Terrain.styles'
import { EImage, Element } from '@/definitions/element'
import { useImageLoader } from '@/hooks/useImageLoader'

export const Terrain = () => {
  const { onLoadImage } = useImageLoader()

  return (
    <StyledTerrainContainer>
      <StyledTerrainLave id={Element.TERRAIN}>
        <Image
          src={'/images/artwork/Terrain.png'}
          alt={'Terrain'}
          width={1310}
          height={559}
          quality={100}
          priority={true}
          onLoad={onLoadImage(EImage.TERRAIN)}
        />
      </StyledTerrainLave>
    </StyledTerrainContainer>
  )
}
