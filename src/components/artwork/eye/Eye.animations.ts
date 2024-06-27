import { useRef } from 'react'

export const useEyeAnimations = () => {
  const eye = useRef(null)

  return {
    eye,
  }
}
