'use client'

import { StyledPhotoGalleryContainer } from '@/components/common/MediaContent/MediaContent.styles'
import { PhotoGallery } from '@/components/common/PhotoGallery/PhotoGallery'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'

export const MediaContent = () => {
  return (
    <StyledPhotoGalleryContainer>
      <PhotoGallery {...appImages[EGallery.BAND_PHOTOS]} url={'/media/band-photos'} label={'View Gallery'} />
      <PhotoGallery {...appImages[EGallery.LIVE_PHOTOS]} url={'/media/live-photos'} label='View Gallery' />
    </StyledPhotoGalleryContainer>
  )
}
