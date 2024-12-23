import styled from 'styled-components'

export const StyledEyeWithFlames = styled.div`
  position: absolute;
  max-width: min(90%, 350px);
  width: auto;
  aspect-ratio: 1244 / 1028;
  display: flex;
  justify-content: center;
  max-height: 350px;

  @media only screen and (max-width: 666px) {
    max-width: min(90%, 270px);
    max-height: 270px;
  }
`
