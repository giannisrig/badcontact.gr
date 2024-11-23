'use client'

import Image from 'next/image'
import React from 'react'
import { StyledProductItem, StyledProductItemContent } from '@/components/common/Product/Product.styles'
import Link from 'next/link'
import { CutPaper } from '@/components/common/Shapes/CutPaper/CutPaper'
import { PixelatedButton } from '@/components/common/PixelatedButton/PixelatedButton'

export const Product = () => {
  return (
    <StyledProductItem>
      <Link href={'/merch/music/eightball-cd'}>
        <Image
          src={'/images/merch/Bad-Contact-Merch-Eightball-CD.png'}
          alt={'Eightball CD - Merch - Bad Contact'}
          quality={100}
          width={700}
          height={463}
        />
        <StyledProductItemContent>
          <h2>&quot;Eightball&quot; CD - 10 EUR</h2>
          <p>
            For Old-School funs, limited edition of 100 printed copies, for the latest release of the band,
            &quot;Eightball&quot;.
          </p>
          <PixelatedButton text='BUY NOW...' />
          <CutPaper />
        </StyledProductItemContent>
      </Link>
    </StyledProductItem>
  )
}
