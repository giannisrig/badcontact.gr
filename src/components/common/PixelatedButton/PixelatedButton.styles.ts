import styled from 'styled-components'

export const StyledPixelatedButton = styled.button`
  font-size: 22px;
  background-color: #bf442d;
  color: #e6e6e6;
  width: max-content;
  margin: 0 auto;
  padding: 4px 11px;
  border-radius: 2px;
  position: relative;
  z-index: 1;
  text-shadow: 3px 1px 1px #222222;
  box-shadow: 5px 3px 7px rgb(0 0 0);

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: -10px;
    right: -10px;
    background-color: inherit;
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: -6px;
    right: -6px;
    background-color: inherit;
    z-index: -1;
  }
`
