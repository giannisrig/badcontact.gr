import styled from 'styled-components'
import { CSSProperties } from 'react'

export const RADIUS = '150px'
export const MAX_VIEWPORT_WIDTH = '80vw'
export const MAX_VIEWPORT_HEIGHT = '40vh'

export interface MenuStyles {
  $pointerEvents?: CSSProperties['pointerEvents']
}

export const StyledMenu = styled.nav<MenuStyles>`
  border-radius: 50%;
  transform-origin: bottom center;
  transform: translate(0, -50px);
  opacity: 0;
  margin-top: auto;
  width: min(${MAX_VIEWPORT_WIDTH}, ${MAX_VIEWPORT_HEIGHT}, calc(${RADIUS} * 2));
  height: min(${MAX_VIEWPORT_WIDTH}, ${MAX_VIEWPORT_HEIGHT}, calc(${RADIUS} * 2));
  pointer-events: ${(props) => props.$pointerEvents ?? 'all'};

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`
