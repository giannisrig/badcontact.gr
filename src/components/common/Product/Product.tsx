'use client'

import Image from 'next/image'
import React from 'react'
import { StyledProductItem, StyledProductItemContent } from '@/components/common/Product/Product.styles'
import Link from 'next/link'
import { CutPaper } from '@/components/common/Shapes/CutPaper/CutPaper'
import { PixelatedButton } from '@/components/common/PixelatedButton/PixelatedButton'

export interface ProductProps {
  href: string
  imgSrc: string
  imgAlt: string
  imgWidth: number
  imgHeight: number
  title: string
  desc: string
}

export const Product = (props: ProductProps) => {
  const { href, imgSrc, imgAlt, imgWidth, imgHeight, title, desc } = props
  return (
    <StyledProductItem>
      <Link href={href}>
        <Image src={imgSrc} alt={imgAlt} quality={100} width={imgWidth} height={imgHeight} />
        <StyledProductItemContent>
          <h2>{title}</h2>
          <p>{desc}</p>
          <PixelatedButton text='BUY NOW...' />
          <CutPaper />
        </StyledProductItemContent>
      </Link>
    </StyledProductItem>
  )
}
