import { createAction } from '@reduxjs/toolkit'
import { ESceneReduxActions } from '@/store/scene/definitions'

export const setAspectRatio = createAction<number>(ESceneReduxActions.SET_ASPECT_RATIO)

