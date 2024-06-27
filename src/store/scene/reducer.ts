import { createReducer } from '@reduxjs/toolkit'
import { initialSceneState } from '@/store/scene/state'
import { setAspectRatio, setImageLoaded } from '@/store/scene/actions'

export const sceneReducer = createReducer(initialSceneState, (builder) => {
  builder
    .addCase(setAspectRatio, (state, { payload }) => {
      state.aspectRatio = payload
    })
    .addCase(setImageLoaded, (state, { payload }) => {
      state.imagesLoaded = [...state.imagesLoaded, payload]
    })
})
