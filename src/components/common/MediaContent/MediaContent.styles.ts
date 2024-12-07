import styled from 'styled-components'

export const StyledPhotoGalleryContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media only screen and (max-width: 999px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`
