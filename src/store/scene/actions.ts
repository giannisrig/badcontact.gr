import { createAction } from '@reduxjs/toolkit'
import { ESceneReduxActions } from '@/store/scene/definitions'
import { EImage } from '@/definitions/element'

export const setAspectRatio = createAction<number>(ESceneReduxActions.SET_ASPECT_RATIO)
export const setImageLoaded = createAction<EImage>(ESceneReduxActions.SET_IMAGE_LOADED)
export const setIsMainContentScrollTriggered = createAction<boolean>(
  ESceneReduxActions.SET_IS_MAIN_CONTENT_SCROLL_TRIGGER
)
export const setIsMenuOpen = createAction<boolean>(ESceneReduxActions.SET_IS_MENU_OPEN)
