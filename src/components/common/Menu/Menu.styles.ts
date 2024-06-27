import styled from 'styled-components'

export const RADIUS = '20vmin'

export const StyledMenuList = styled.ul`
  border: 2px dashed hsl(180 100% 60%);
  border-radius: 50%;
  position: fixed;
  bottom: 7%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  width: calc(${RADIUS} * 2);
  height: calc(${RADIUS} * 2);
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
  background: hsl(343 100% 60% / 50%);
  width: 2.5vmin;
  height: 2.5vmin;
  border-radius: 50%;
  transform: translate(-50%, -50%) translateX(calc(cos(${(props) => props.$angle}deg) * ${RADIUS}))
    translateY(calc(sin(${(props) => props.$angle}deg) * ${RADIUS} * -1));
`
