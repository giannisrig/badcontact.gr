import { RefObject } from 'react'
import { Mesh } from 'three'

export * from '@/types/three/state'
export * from '@/types/three/objects'

export type Vector3Array = [number, number, number]

export type ThreeRefObject = RefObject<Mesh | null>

export interface AppShaderMaterialProps {
  meshRef: ThreeRefObject
  visible?: boolean
}
