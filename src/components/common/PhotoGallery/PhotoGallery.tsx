'use client'
import { PolaroidImage } from '@/components/common/PolaroidImage/PolaroidImage'
import Image from 'next/image'
import { PolaroidGallery } from '@/components/common/PolaroidGallery/PolaroidGallery'
import { PhotoGalleryProps } from '@/types/images'
import { StyledLinkText, StyledPhotoGallery } from '@/components/common/PhotoGallery/PhotoGallery.styles'
import Link from 'next/link'

export type IPhotoGalleryProps = PhotoGalleryProps & {
  url: string
  label: string
}

export const PhotoGallery = ({ thumbs, variant, url, label }: IPhotoGalleryProps) => {
  return (
    <StyledPhotoGallery>
      <Link href={url}>
        <PolaroidGallery variant={variant}>
          {thumbs.map(({ src, caption, priority }, index) => (
            <PolaroidImage key={`image-${index}`}>
              <Image src={src} alt={'Bad Contact Eightball Eye'} quality={100} priority={priority} />
              <caption>{caption}</caption>
            </PolaroidImage>
          ))}
        </PolaroidGallery>
        <StyledLinkText>{label}</StyledLinkText>
      </Link>
    </StyledPhotoGallery>
  )
}
