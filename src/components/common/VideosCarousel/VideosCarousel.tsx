'use client'

import React from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { StyledVideoItem } from '@/components/common/VideosCarousel/VideosCarousel.styles'
import { CutPaper } from '@/components/common/Shapes/CutPaper/CutPaper'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
}

export const VideosCarousel = () => {
  return (
    <div className='mt-30px w-full'>
      <AliceCarousel mouseTracking responsive={responsive} disableButtonsControls={true} controlsStrategy='alterante'>
        <StyledVideoItem key='video-1'>
          <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'}>
            <source src='/images/videos/RethymnoDay1Overview.mp4' type='video/mp4' />
          </video>
          <CutPaper />
        </StyledVideoItem>

        <StyledVideoItem key='video-2'>
          <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'}>
            <source src='/images/videos/RethymnoInterview.mp4' type='video/mp4' />
          </video>
          <CutPaper />
        </StyledVideoItem>

        <StyledVideoItem key='video-3'>
          <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'} key={2}>
            <source src='/images/videos/RethymnoDay1Teaser.mp4' type='video/mp4' />
          </video>
          <CutPaper />
        </StyledVideoItem>
      </AliceCarousel>
    </div>
  )
}
