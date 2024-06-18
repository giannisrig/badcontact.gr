import { createReducer } from '@reduxjs/toolkit'
import { initialSceneState } from '@/store/scene/state'
import {
  setAspectRatio,
} from '@/store/scene/actions'

export const sceneReducer = createReducer(initialSceneState, (builder) => {
  builder
    .addCase(setAspectRatio, (state, { payload }) => {
      state.aspectRatio = payload
    })
})
