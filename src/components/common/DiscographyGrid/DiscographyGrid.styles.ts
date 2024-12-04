import styled from 'styled-components'

export const StyledDiscographyGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;

  @media only screen and (max-width: 999px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`

export const StyledDiscographyItem = styled.div`
  position: relative;
`

export const StyledDiscographyItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  margin-top: -27px;
  padding: 25px 40px;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 666px) {
    padding: 20px;
    margin-top: -22px;
  }

  h2 {
    margin-top: 0;
    font-size: 30px;

    @media only screen and (max-width: 666px) {
      font-size: 25px;
    }
  }

  p {
    margin-top: 0;
    font-size: 20px;
    line-height: 20px;

    @media only screen and (max-width: 666px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  span {
    color: #ff623b;
    font-size: 13px;
    font-weight: 200;
    cursor: pointer;

    @media only screen and (max-width: 666px) {
      font-size: 12px;
    }
  }

  strong {
    font-weight: 400;
    color: #edb2a9;
  }
`
