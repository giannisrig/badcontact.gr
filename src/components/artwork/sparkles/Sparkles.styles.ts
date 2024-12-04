import styled from 'styled-components'
export const SPARKLES_DIMENSIONS = {
  width: 1310,
  height: 827,
}

export const StyledSparkles = styled.div`
  position: absolute;
  max-width: 100%;
  width: 100%;
  display: inline-block;
  aspect-ratio: ${SPARKLES_DIMENSIONS.width} / ${SPARKLES_DIMENSIONS.height};
  height: auto;
  top: 0;
  z-index: -1;
`
