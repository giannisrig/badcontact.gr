'use client'

import styled from 'styled-components'
import { Flames } from '@/components/artwork/flames/Flames'
import { Eye } from '@/components/artwork/eye/Eye'

export const StyledEyeWithFlames = styled.div`
  position: absolute;
  max-width: 90%;
  width: auto;
  aspect-ratio: 1244 / 1028;
  display: flex;
  justify-content: center;
  max-height: 70vh;
`

export const EyeFlames = () => (
  <StyledEyeWithFlames>
    <Flames />
    <Eye />
  </StyledEyeWithFlames>
)
