import { Color, Euler, Quaternion, Vector3 } from 'three'
import { Vector3Array } from '@/types/three'

export const isColor = (value: any) => value instanceof Color
export const isVector = (value: any) => value instanceof Vector3
export const isEuler = (value: any) => value instanceof Euler
export const isVectorsEqual = (vector1: Vector3, vector2?: Vector3) => (vector2 ? vector1.equals(vector2) : false)
export const isEulerEqual = (vector1: Euler, vector2?: Euler) => (vector2 ? vector1.equals(vector2) : false)
export const isQuaternionsEqual = (quaternion1: Quaternion, quaternion2?: Quaternion) =>
  quaternion2 ? quaternion1.equals(quaternion2) : false
export const getVectorFromArray = (vector: Vector3Array) => new Vector3(vector[0], vector[1], vector[2])
export const getArrayFromEuler = (euler: Euler) => [euler.x, euler.y, euler.z]
export const vectorToFixed = (vector: Vector3) =>
  new Vector3(Math.round(vector.x), Math.round(vector.y), Math.round(vector.z))
