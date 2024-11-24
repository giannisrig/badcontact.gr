'use client'
import Image from 'next/image'
import { PhotoGalleryProps } from '@/types/images'
import Link from 'next/link'
import { StyledProductItem, StyledProductItemContent } from '@/components/common/Product/Product.styles'
import { PixelatedButton } from '@/components/common/PixelatedButton/PixelatedButton'
import { CutPaper } from '@/components/common/Shapes/CutPaper/CutPaper'
import React from 'react'
import { ConditionalComponent } from '@/components/shared/ConditionalComponent'

export interface IPhotoGalleryProps {
  url: string
  img: string
  title: string
  description?: string
  button: string
}

export const PhotoGallery = ({ img, title, url, description, button }: IPhotoGalleryProps) => {
  return (
    <StyledProductItem>
      <Link href={url}>
        <Image src={img} alt={'Eightball CD - Merch - Bad Contact'} quality={100} width={700} height={463} />
        <StyledProductItemContent>
          <h2>{title}</h2>
          <ConditionalComponent condition={!!description}>
            <p>{description}</p>
          </ConditionalComponent>
          <PixelatedButton text={button} />
          <CutPaper />
        </StyledProductItemContent>
      </Link>
    </StyledProductItem>
  )
}
