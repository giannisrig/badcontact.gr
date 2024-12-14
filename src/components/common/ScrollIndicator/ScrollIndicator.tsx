'use client'
import React from 'react'
import { StyledScrollIndicator } from '@/components/common/ScrollIndicator/ScrollIndicator.styles'
import { Element } from '@/definitions/element'

export const ScrollIndicator = () => {
  return (
    <StyledScrollIndicator id={Element.SCROLL_INDICATOR} className='font-secondary'>
      ...KEEP SCROLLING...
    </StyledScrollIndicator>
  )
}
