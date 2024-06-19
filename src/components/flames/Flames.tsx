'use client'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const StyledFlames = styled.div`
  position: relative;
  max-width: 100%;
  width: 70%;
  display: inline-block;
  top: 5%;
  z-index: 2;
`
export const StyledBaseImage = styled.img`
  position: relative;
  width: 100%;
  display: block;
`

export const StyledLightingImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`

export const StyledMediumImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
`
export const StyledDarkImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`
export const StyledBGImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

export const Flames = () => {
  const light = useRef(null)
  const medium = useRef(null)
  const dark = useRef(null)
  const bg = useRef(null)

  useEffect(() => {
    if (light?.current && medium?.current && dark?.current) {
      gsap.to(light.current, {
        duration: 0.1,
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
      })
      gsap.to(medium.current, {
        duration: 0.2,
        delay: 0.4,
        opacity: 0.5,
        scaleX: 1.02,
        repeat: -1,
        yoyo: true,
      })
      gsap.to(dark.current, {
        duration: 1,
        delay: 0.6,
        scaleX: 0.99,
        opacity: 0.6,
        repeat: -1,
        yoyo: true,
      })
      gsap.to(bg.current, {
        duration: 0.1,
        opacity: 0.5,
        scale: 1.02,
        repeat: -1,
        yoyo: true,
      })
    }
  }, [light, medium, dark, bg])

  return (
    <StyledFlames>
      <StyledBaseImage src={'/images/flames/FlamesBase.svg'} alt={'Logo of the Project'} width={1238} height={808} />
      <StyledBGImage
        ref={bg}
        src={'/images/flames/FlamesBase.svg'}
        alt={'Logo of the Project'}
        width={1238}
        height={808}
      />
      <StyledLightingImage
        ref={light}
        src={'/images/flames/FlamesLight.svg'}
        alt={'Logo of the Project'}
        width={1238}
        height={808}
      />
      <StyledMediumImage
        ref={medium}
        src={'/images/flames/FlamesMedium.svg'}
        alt={'Logo of the Project'}
        width={1238}
        height={808}
      />
      <StyledDarkImage
        ref={dark}
        src={'/images/flames/FlamesDark.svg'}
        alt={'Logo of the Project'}
        width={1238}
        height={808}
      />
    </StyledFlames>
  )
}
