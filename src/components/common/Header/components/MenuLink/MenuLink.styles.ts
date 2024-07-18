import styled from 'styled-components'
import { MAX_VIEWPORT_HEIGHT, MAX_VIEWPORT_WIDTH, RADIUS } from '@/components/common/Header/components/Menu/Menu.styles'

export interface MenuListPointProps {
  $angle: number
}

export const StyleMenuCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(8deg 48.39% 81.76%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
  pointer-events: none;

  img {
    width: 70%;
    opacity: 0;
    transform: scale(0);
    position: relative;
  }
`

export const StyledPointBase = styled.li`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledMenuListPoint = styled(StyledPointBase)<MenuListPointProps>`
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%)
    translateX(
      calc(
        cos(${(props) => props.$angle}deg) *
          min(${RADIUS}, calc(${MAX_VIEWPORT_WIDTH} / 2), calc(${MAX_VIEWPORT_HEIGHT} / 2))
      )
    )
    translateY(
      calc(
        sin(${(props) => props.$angle}deg) *
          min(${RADIUS}, calc(${MAX_VIEWPORT_WIDTH} / 2), calc(${MAX_VIEWPORT_HEIGHT} / 2)) * -1
      )
    );

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

export const StyledLink = styled.span`
  display: block;
  font-size: 22px;
  line-height: 34px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 2px 1px #e8601e;
`
