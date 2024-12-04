'use client'

import { Flames } from '@/components/artwork/flames/Flames'
import { Eye } from '@/components/artwork/eye/Eye'
import { StyledEyeWithFlames } from '@/components/artwork/eyeFlames/EyeFlames.styles'

export const EyeFlames = () => (
  <StyledEyeWithFlames>
    <Flames />
    <Eye />
  </StyledEyeWithFlames>
)
