'use client'

import { StyledPhotoGalleryContainer } from '@/components/common/MediaContent/MediaContent.styles'
import { PhotoGallery } from '@/components/common/PhotoGallery/PhotoGallery'

export const MediaContent = () => {
  return (
    <StyledPhotoGalleryContainer>
      <PhotoGallery
        img={'/images/gallery/BandGallery.png'}
        url={'/media/band-photos'}
        title={'Band Photoshooting'}
        description={'Official band photo shootings for the album Eightball by Polymnia Manopoulou.'}
        button={'View Gallery...'}
      />
      <PhotoGallery
        img={'/images/gallery/BadContactRethymnoRocks.png'}
        url={'/media/live-photos'}
        title={'Rethymno Rocks Festival (2024)'}
        description={'Photos of Bad Contact performing at Rethymno Rocks festival 2024 by Antonis Pk.'}
        button='View Gallery...'
      />
      <PhotoGallery
        img={'/images/gallery/BeerFestival.png'}
        url={'/media/live-photos'}
        title={'Beer Factory Festival (2023)'}
        description={'Bad Contact performing at Beer Factory Festival 2023 by Polymnia Manopoulou'}
        button='View Gallery...'
      />
    </StyledPhotoGalleryContainer>
  )
}
