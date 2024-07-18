import styled from 'styled-components'
import { CSSProperties } from 'react'

export const RADIUS = '150px'
export const MAX_VIEWPORT_WIDTH = '80vw'

export interface MenuStyles {
  $pointerEvents?: CSSProperties['pointerEvents']
}

export const StyledMenu = styled.div<MenuStyles>`
  border-radius: 50%;
  position: fixed;
  bottom: 7%;
  left: 50%;
  transform-origin: bottom center;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 7;
  width: min(${MAX_VIEWPORT_WIDTH}, calc(${RADIUS} * 2));
  height: min(${MAX_VIEWPORT_WIDTH}, calc(${RADIUS} * 2));
  pointer-events: ${(props) => props.$pointerEvents ?? 'all'};

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`
