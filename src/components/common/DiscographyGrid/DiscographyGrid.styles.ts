import styled from 'styled-components'

export const StyledDiscographyGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
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
  padding: 20px 40px;
  position: relative;
  z-index: 2;

  h2 {
    margin-top: 0;
    font-size: 30px;
  }

  p {
    margin-top: 0;
    font-size: 20px;
    line-height: 20px;
  }

  span {
    color: #ff623b;
    font-size: 13px;
    font-weight: 200;
    cursor: pointer;
  }

  strong {
    font-weight: 400;
    color: #edb2a9;
  }
`

export const StyledPaperShape = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  svg {
    width: 104%;
    height: 104%;
    vertical-align: unset;
    left: -2%;
    position: absolute;
    top: -2%;
    stroke: #464646;
    stroke-width: 2px;
  }
`
