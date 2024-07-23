import styled from 'styled-components'

export const StyledPolaroidGallery = styled.div`
  width: 340px;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;

    &:nth-child(2) {
      transform: translateX(2%) rotate(-9deg);
    }
    &:nth-child(3) {
      transform: rotate(15deg);
    }
  }
`
