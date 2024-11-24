'use client'

import React, { useRef } from 'react'
import OwlCarousel from 'next-owl-carousel'
export const InstagramStories = () => {
  const carouselRef = useRef(null)

  const options = {
    loop: true,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: { items: 1, dots: true },
      768: { items: 2 },
    },
  }

  return (
    <OwlCarousel ref={carouselRef} options={options} className='owl-carousel'>
      <div className='item'>
        <video width='300' height='300' controls className='aspect-[18/9] w-full object-cover'>
          <source src='/images/videos/RethymnoDay1Overview.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='item'>
        <video width='300' height='300' controls className='aspect-[18/9] w-full object-cover'>
          <source src='/images/videos/RethymnoInterview.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='item'>
        <video width='300' height='300' controls className='aspect-[18/9] w-full object-cover'>
          <source src='/images/videos/RethymnoDay1Teaser.mp4' type='video/mp4' />
        </video>
      </div>
    </OwlCarousel>
  )
}
