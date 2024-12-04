import styled from 'styled-components'

export const StyledBreadcrumbs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 15px;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`
