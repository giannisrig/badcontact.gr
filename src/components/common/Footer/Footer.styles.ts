import styled from 'styled-components'

export const StyledFooterText = styled.footer`
  position: fixed;
  z-index: 8;
  bottom: max(10px, 0.5vw);
  left: max(7px, 0.8vw);
  font-size: max(10px, 0.5vw);
  color: #d5b1a9;
  text-shadow: 1px 2px 1px #e8601e;
  line-height: 11px;
  max-width: 25vw;
`
export const StyledFooterDevelopedBy = styled(StyledFooterText)`
  text-align: right;
  right: max(7px, 0.8vw);
  left: unset;
`
