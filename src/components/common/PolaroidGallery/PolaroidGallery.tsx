'use client'

import { StyledPolaroidGallery } from '@/components/common/PolaroidGallery/PolaroidGallery.styles'
import { ReactNode } from 'react'

export interface PolaroidGalleryProps {
  children: ReactNode
  variant: 'left' | 'right'
}

export const PolaroidGallery = ({ children, variant = 'left' }) => {
  return <StyledPolaroidGallery $variant={variant}>{children}</StyledPolaroidGallery>
}
