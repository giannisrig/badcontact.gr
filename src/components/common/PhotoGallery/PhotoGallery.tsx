'use client'
import { PolaroidImage } from '@/components/common/PolaroidImage/PolaroidImage'
import Image from 'next/image'
import { PolaroidGallery } from '@/components/common/PolaroidGallery/PolaroidGallery'
import { PhotoGalleryProps } from '@/types/images'
import { StyledPhotoGallery } from '@/components/common/PhotoGallery/PhotoGallery.styles'

export const PhotoGallery = (props: PhotoGalleryProps) => {
  return (
    <StyledPhotoGallery>
      <PolaroidGallery>
        {props.thumbs.map(({ src, caption, priority }, index) => (
          <PolaroidImage key={`image-${index}`}>
            <Image src={src} alt={'Bad Contact Eightball Eye'} quality={100} priority={priority} />
            <caption>{caption}</caption>
          </PolaroidImage>
        ))}
      </PolaroidGallery>
    </StyledPhotoGallery>
  )
}
