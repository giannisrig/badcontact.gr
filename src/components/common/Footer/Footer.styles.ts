import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: fixed;
  z-index: 6;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: max(10px, 0.5vw) max(7px, 0.8vw);
  font-size: max(10px, 0.5vw);
  color: #d5b1a9;
  text-shadow: 1px 2px 1px #e8601e;
  line-height: 11px;

  > div {
    max-width: 25vw;
  }

  > div:last-child {
    text-align: right;
  }
`
