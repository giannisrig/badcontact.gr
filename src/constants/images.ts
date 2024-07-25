import Band from '@/images/band/bad-contact-band-heavy-metal-rock.jpg'
import Band2 from '@/images/band/Bad-Contact-BandGroupPhoto2.jpg'
import { EGallery } from '@/definitions/images'
import { PhotoGalleryProps } from '@/types/images'

export const appImages: Record<EGallery, PhotoGalleryProps> = {
  [EGallery.BAND_PHOTOS]: {
    thumbs: [
      {
        src: Band,
        caption: 'Band Photos',
        priority: true,
      },
      {
        src: Band2,
        caption: 'Band Photos',
        priority: true,
      },
      {
        src: Band,
        caption: 'Band Photos',
        priority: true,
      },
    ],
  },
}
