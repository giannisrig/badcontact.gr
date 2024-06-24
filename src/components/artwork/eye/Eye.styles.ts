import styled from 'styled-components'
import { ViewLevel } from '@/definitions/viewLevel'

export const StyledEye = styled.div`
  position: absolute;
  max-width: 100%;
  width: 100%;
  display: inline-block;
  bottom: -2%;
  z-index: ${ViewLevel.LEVEL_3};
`
