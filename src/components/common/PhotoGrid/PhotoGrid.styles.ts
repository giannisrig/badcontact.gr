import styled from 'styled-components'

export const StyledPhotoGrid = styled.div`
  margin: 30px 0 0;
  .lg-react-element {
    width: 100%;
    column-count: 5;
    column-gap: 10px;
    padding: 0;

    @media only screen and (max-width: 1440px) {
      column-count: 4;
    }

    @media only screen and (max-width: 999px) {
      column-count: 3;
    }

    @media only screen and (max-width: 600px) {
      column-count: 2;
    }

    a {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
      transition: 0.4s ease-in;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
