'use client'
import React from 'react'
import {
  StyledDiscographyGrid,
  StyledDiscographyItem,
  StyledDiscographyItemContent,
  StyledPaperShape,
} from '@/components/common/DiscographyGrid/DiscographyGrid.styles'
import Image from 'next/image'
import { CutPaper } from '@/components/common/Shapes/CutPaper/CutPaper'
import Link from 'next/link'

export const DiscographyGrid = () => {
  return (
    <StyledDiscographyGrid>
      <StyledDiscographyItem>
        <Link href={'/music/eightball'}>
          <Image
            src={'/images/music/Bad Contact-Music-Eightball.png'}
            alt={'Eightball - Music & Discography - Bad Contact'}
            quality={100}
            width={700}
            height={455}
          />
          <StyledDiscographyItemContent>
            <h2>Eightball (2024)</h2>
            <p>
              In October 11 2024, <strong>&quot;Eightball&quot;</strong>, the first full length album of Bad Contact is
              released. The LP consists of eight tracks and is available in CD format and in digital format in all
              streaming platforms.
            </p>
            <span className='font-secondary'>VIEW MORE...</span>
            <StyledPaperShape>
              <CutPaper />
            </StyledPaperShape>
          </StyledDiscographyItemContent>
        </Link>
      </StyledDiscographyItem>
      <StyledDiscographyItem>
        <Link href={'/music/out-of-the-blue'}>
          <Image
            src={'/images/music/Bad Contact-Music-OutOfTheBlue.png'}
            alt={'Cut Paper Shape'}
            quality={100}
            width={700}
            height={455}
          />
          <StyledDiscographyItemContent>
            <h2>Out of the Blue (2023)</h2>
            <p>
              In February 2023, Bad Contact released their first official music{' '}
              <strong>&quot;Out of the Blue&quot;</strong>. A single containing one track and featuring Andreas Lagios
              (Nightstalker, Thee Holy Strangers, ex Rotting Christ) on the bass.
            </p>
            <span className='font-secondary'>VIEW MORE...</span>
            <StyledPaperShape>
              <CutPaper />
            </StyledPaperShape>
          </StyledDiscographyItemContent>
        </Link>
      </StyledDiscographyItem>
    </StyledDiscographyGrid>
  )
}
