import styled from 'styled-components'

export const StyledFlames = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  display: inline-block;
  transform-origin: center;
`

export const StyledBaseImage = styled.div`
  position: relative;
  width: 100%;
`

export const StyledAbsoluteImage = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
`

export const StyledGradientCircle = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 2/1;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  //background: linear-gradient(90deg, rgba(0, 0, 0, 1) 2%, rgba(253, 29, 29, 0.6) 50%, rgba(0, 0, 0, 1) 98%);
  background: radial-gradient(circle, rgba(253, 29, 29, 0.5) 0%, rgba(0, 0, 0, 1) 90%);
`
