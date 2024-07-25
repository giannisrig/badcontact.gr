import { StaticImport } from 'next/dist/shared/lib/get-img-props'

export interface PhotoGalleryThumb {
  src: StaticImport | string
  priority: boolean
  caption: string
}

export interface PhotoGalleryProps {
  thumbs: PhotoGalleryThumb[]
}
