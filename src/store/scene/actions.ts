import { createAction } from '@reduxjs/toolkit'
import { ESceneReduxActions } from '@/store/scene/definitions'
import { EImage } from '@/definitions/element'

export const setAspectRatio = createAction<number>(ESceneReduxActions.SET_ASPECT_RATIO)
export const setImageLoaded = createAction<EImage>(ESceneReduxActions.SET_IMAGE_LOADED)
