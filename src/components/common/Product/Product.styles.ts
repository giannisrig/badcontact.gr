import styled from 'styled-components'

export const StyledProductItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
`

export const StyledProductItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: -45px auto 0;
  padding: 30px 25px;
  position: relative;
  z-index: 2;
  width: 90%;

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

  strong {
    font-weight: 400;
    color: #edb2a9;
  }
`
