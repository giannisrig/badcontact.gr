import styled from 'styled-components'

export interface PolaroidGalleryStyles {
  $variant: string
}

export const StyledPolaroidGallery = styled.div<PolaroidGalleryStyles>`
  width: 340px;
  aspect-ratio: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    position: absolute;

    &:nth-child(2) {
      transform: ${(props) =>
        props.$variant === 'left' ? 'translateX(2%) rotate(-9deg)' : 'translateX(2%) rotate(9deg)'};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.$variant === 'left' ? 'rotate(15deg)' : 'rotate(-15deg)')};
    }
  }
`
