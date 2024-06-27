'use client'
import styled from 'styled-components'
import { StyledArtWorkLogo } from '@/components/artwork/logo/Logo'
import { Element } from '@/definitions/element'

export const StyledContentFader = styled(StyledArtWorkLogo)`
  background: linear-gradient(0deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 85%) 49%, rgb(0 0 0 / 100%));
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  left: 0;
  transform: scaleY(0.5);
  backdrop-filter: blur(2px);
  opacity: 0;
`

export const ContentFader = () => {
  return <StyledContentFader id={Element.CONTENT_FADER} />
}
