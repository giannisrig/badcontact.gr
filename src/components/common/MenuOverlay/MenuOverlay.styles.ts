'use client'

import styled from 'styled-components'

export const StyledMenuOverlay = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: inset rgb(0 0 0) 0 0 40px 0, inset rgb(0 0 0) 0 0 40px 0, inset rgba(0, 0, 0, 1) 0 0 36px -24px;
`
