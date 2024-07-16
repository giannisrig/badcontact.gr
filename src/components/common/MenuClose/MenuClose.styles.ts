import { StyledMenuButton } from '@/components/common/MenuButton/MenuButton.styles'
import styled from 'styled-components'

export const StyledMenuClose = styled(StyledMenuButton)`
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: unset;
  top: 105%;
`

export const StyledCloseIcon = styled.div`
  width: 55px;
  aspect-ratio: 1;
  position: relative;

  img {
    position: relative;
    z-index: 2;
  }
`

export const StyledMenuCloseText = styled.h5`
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
`
