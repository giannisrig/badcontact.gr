'use client'

import Image from 'next/image'

import LightGallery from 'lightgallery/react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { PhotoGalleryProps } from '@/types/images'
import { StyledPhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid.styles'

export interface PhotoGridProps {
  images: PhotoGalleryProps['thumbs']
}

export const PhotoGrid = ({ images }: PhotoGridProps) => {
  return (
    <StyledPhotoGrid>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
        {images.map(({ src, caption, priority }, index) => (
          <a key={`img-grid-${index}`} href={src?.src}>
            <Image src={src} alt={'Bad Contact Eightball Eye'} quality={100} priority={priority} />
          </a>
        ))}
      </LightGallery>
    </StyledPhotoGrid>
  )
}
