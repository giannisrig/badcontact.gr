import { StaticImageData } from 'next/dist/shared/lib/get-img-props'

export interface PhotoGalleryThumb {
  src: StaticImageData
  priority: boolean
  caption: string
}

export interface PhotoGalleryProps {
  thumbs: PhotoGalleryThumb[]
  grid: PhotoGalleryThumb[]
  variant: 'left' | 'right'
}
