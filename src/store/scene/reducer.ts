import { createReducer } from '@reduxjs/toolkit'
import { initialUIState } from '@/store/scene/state'
import { setAspectRatio, setImageLoaded, setIsMainContentScrollTriggered, setIsMenuOpen } from '@/store/scene/actions'

export const uiReducer = createReducer(initialUIState, (builder) => {
  builder
    .addCase(setAspectRatio, (state, { payload }) => {
      state.aspectRatio = payload
    })
    .addCase(setIsMainContentScrollTriggered, (state, { payload }) => {
      state.isMainContentScrollTriggered = payload
    })
    .addCase(setIsMenuOpen, (state, { payload }) => {
      state.isMenuOpened = payload
    })
    .addCase(setImageLoaded, (state, { payload }) => {
      if (!state.imagesLoaded.includes(payload)) {
        state.imagesLoaded = [...state.imagesLoaded, payload]
      }
    })
})
