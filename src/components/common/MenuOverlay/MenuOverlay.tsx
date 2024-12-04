'use client'

import { StyledMenuOverlay } from '@/components/common/MenuOverlay/MenuOverlay.styles'
import { useMenuOverlayAnimations } from '@/components/common/MenuOverlay/MenuOverlay.animations'

export default function MenuOverlay() {
  const { menuOverlayRef } = useMenuOverlayAnimations()

  return <StyledMenuOverlay ref={menuOverlayRef} />
}
