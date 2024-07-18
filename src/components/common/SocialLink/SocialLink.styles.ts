import styled from 'styled-components'

export const StyledSocialLink = styled.div`
  position: relative;
`

export const StyleSocialLinkIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebc4be;
  width: 30px;
  height: 30px;
  border-radius: 65%;
  position: relative;
  pointer-events: none;

  img {
    width: 50%;
    position: relative;
  }
`

export const StyledSocialLinkOutline = styled.span`
  display: block;
  width: 150%;
  aspect-ratio: 1;
  background: transparent;
  border-radius: 50%;
  border: 1px solid rgba(250, 205, 197, 1);
  filter: blur(1px);
  opacity: 0.7;
  position: absolute;
  top: -25%;
  left: -25%;
  z-index: 1;
`
