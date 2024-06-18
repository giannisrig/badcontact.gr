import { Euler, Vector3 } from 'three'

export interface CameraState {
  position: Vector3
  rotation: Euler
  fov: number
  far: number
  near: number
  zoom: number
  focus: number
}
