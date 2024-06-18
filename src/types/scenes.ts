import { Color, Vector3 } from 'three'

export enum EScene {
  INITIAL = 'initialScene',
  HOMEPAGE = 'homepageScene',
  PAGE = 'pageScene',
  SHOW_CAMERA_PLANE = 'showCameraPlane',
}

export interface SceneDirection {
  cameraPosition: Vector3
  targetPosition: Vector3
  skyColor: Color
}

export type Scenes = Record<EScene, SceneDirection>
