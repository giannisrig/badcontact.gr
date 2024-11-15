import Band from '@/images/gallery/band/group/BadContactGroupPhoto1.jpg'
import Band2 from '@/images/gallery/band/group/BadContactGroupPhoto2.jpg'
import Band3 from '@/images/gallery/band/group/BadContactGroupPhoto3.jpg'
import Live1 from '@/images/gallery/live/beer-factory/Bad-Contact-Beer-Factory-live-22.jpg'
import Live2 from '@/images/gallery/live/beer-factory/Bad-Contact-Beer-Factory-live-24.jpg'
import Live3 from '@/images/gallery/live/beer-factory/Bad-Contact-Beer-Factory-live-36.jpg'
import { EGallery } from '@/definitions/images'
import { PhotoGalleryProps } from '@/types/images'
import { beerFestivalGallery } from '@/constants/gallery/beerFestival'
import { bandGallery } from '@/constants/gallery/bandGallery'
import { membersGallery } from '@/constants/gallery/membersGallery'

export const appImages: Record<EGallery, PhotoGalleryProps> = {
  [EGallery.BAND_PHOTOS]: {
    thumbs: [
      {
        src: Band3,
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
    grid: bandGallery,
    variant: 'left',
  },
  [EGallery.LIVE_PHOTOS]: {
    thumbs: [
      {
        src: Live3,
        caption: 'Band Photos',
        priority: true,
      },
      {
        src: Live2,
        caption: 'Beer Factory',
        priority: true,
      },
      {
        src: Live1,
        caption: 'Live Photos',
        priority: true,
      },
    ],
    grid: beerFestivalGallery,
    variant: 'right',
  },
  [EGallery.MEMBERS_PHOTOS]: {
    thumbs: membersGallery,
    grid: membersGallery,
    variant: 'right',
  },
}
