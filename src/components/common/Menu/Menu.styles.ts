import styled from 'styled-components'
import { CSSProperties } from 'react'

export const RADIUS = '170px'

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
  z-index: 5;
  width: calc(${RADIUS} * 2);
  height: calc(${RADIUS} * 2);
  pointer-events: ${(props) => props.$pointerEvents ?? 'all'};

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`

export const StyledMenuList = styled.ul`
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const StyledPointBase = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export interface MenuListPointProps {
  $angle: number
}

export const StyledMenuListPoint = styled(StyledPointBase)<MenuListPointProps>`
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%) translateX(calc(cos(${(props) => props.$angle}deg) * ${RADIUS}))
    translateY(calc(sin(${(props) => props.$angle}deg) * ${RADIUS} * -1));

  a {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const StyleMenuCircle = styled.span`
  display: block;
  background: hsl(8deg 48.39% 81.76%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
`

export const StyledLink = styled.span`
  display: block;
  font-size: 22px;
  line-height: 34px;
  text-transform: uppercase;
  color: #fff;
`
