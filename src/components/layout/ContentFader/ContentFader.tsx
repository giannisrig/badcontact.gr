'use client'
import styled from 'styled-components'
import { StyledArtWorkLogo } from '@/components/artwork/logo/Logo'
import { Element } from '@/definitions/element'

export const StyledContentFader = styled(StyledArtWorkLogo)`
  background: linear-gradient(0deg, rgb(0 0 0 / 9%) 0%, rgb(0 0 0 / 85%) 49%, rgb(0 0 0 / 100%));
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  left: 0;
  transform: scaleY(0.55);
  backdrop-filter: blur(3px);
  opacity: 0;
`

export const StyledContentFaderBottom = styled.div`
  background: linear-gradient(180deg, rgb(0 0 0 / 2%) 0%, rgb(0 0 0 / 85%) 49%, rgb(0 0 0 / 100%));
  position: fixed;
  z-index: 3;
  width: 100%;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(3px);
  opacity: 1;
  height: 5vh;
`

export const ContentFader = () => (
  <>
    <StyledContentFader id={Element.CONTENT_FADER} />
    {/*<StyledContentFaderBottom />*/}
  </>
)
