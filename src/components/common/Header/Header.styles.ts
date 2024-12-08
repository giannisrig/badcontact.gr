import styled from 'styled-components'
import { MenuStyles } from '@/components/common/Header/components/Menu/Menu.styles'

export const StyledHeader = styled.header<MenuStyles>`
  position: fixed;
  z-index: 7;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  gap: 25px;
  flex-direction: column;
  pointer-events: ${(props) => props.$pointerEvents ?? 'all'};
`
