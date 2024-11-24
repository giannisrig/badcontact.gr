'use client'

import React from 'react'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2 },
}

export const InstagramStories = () => {
  return (
    <div className='mt-50px w-full'>
      <AliceCarousel mouseTracking responsive={responsive} disableButtonsControls={true} controlsStrategy='alterante'>
        <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'} key={0}>
          <source src='/images/videos/RethymnoDay1Overview.mp4' type='video/mp4' />
        </video>
        <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'} key={1}>
          <source src='/images/videos/RethymnoInterview.mp4' type='video/mp4' />
        </video>
        <video width='300' height='300' controls className={'aspect-[18/9] w-full object-cover p-15px'} key={2}>
          <source src='/images/videos/RethymnoDay1Teaser.mp4' type='video/mp4' />
        </video>
      </AliceCarousel>
    </div>
  )
}
