'use client'

import styled from 'styled-components'
import { CSSProperties } from 'react'

export interface MenuButtonStyles {
  $pointerEvents?: CSSProperties['pointerEvents']
}

export const StyledMenuButton = styled.button<MenuButtonStyles>`
  width: 130px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 7;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  pointer-events: ${(props) => props.$pointerEvents ?? 'all'};
`

export const StyledMenuIcon = styled.div`
  width: 50px;
  aspect-ratio: 1;
  position: relative;

  img {
    position: relative;
    z-index: 2;
  }
`

export const StyledCircleOutline = styled.div`
  width: 136%;
  aspect-ratio: 1;
  background: transparent;
  border-radius: 50%;
  border: 1px solid rgba(250, 205, 197, 1);
  filter: blur(1px);
  opacity: 0.7;
  position: absolute;
  top: -18%;
  left: -18%;
  z-index: 1;
`

export const StyledMenuFader = styled.div`
  background: radial-gradient(circle, rgb(0 0 0 / 90%) 50%, rgb(0 0 0 / 0%) 70%);
  width: 220%;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  top: -40%;
  left: -60%;
  z-index: -1;
`

export const StyledMenuText = styled.h5`
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
`
