import styled from 'styled-components'

export const StyledPolaroidImage = styled.div`
  width: 75%;
  background-color: #f6e3e1;
  background-image: linear-gradient(135deg, transparent 35%, rgba(0, 0, 0, 0.1));
  border-radius: 2px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -1;
  padding: 10px 10px 45px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.45), inset -1px -1px 1px rgba(0, 0, 0, 0.5),
    inset 1px 1px 1px rgba(255, 255, 255, 0.5);

  img {
    filter: saturate(1.2) contrast(80%);
  }

  &:after {
    display: block;
    content: '';
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 42%, transparent 55%);
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 55px);
    top: 10px;
    left: 10px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.15), inset 1px 1px 2px rgba(0, 0, 0, 0.5),
      inset -1px -1px 2px rgba(255, 255, 255, 0.95);
    z-index: 1;
  }

  caption {
    font-family: Brush Script MT;
    position: absolute;
    bottom: 7px;
    left: 9px;
    color: #867674;
    font-style: italic;
    font-size: 26px;
  }
`
