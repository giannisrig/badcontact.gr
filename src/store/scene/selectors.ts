import { RootState } from '@/store/store'

export const selectAspectRatio = (state: RootState) => state.ui.aspectRatio
export const selectImagesLoaded = (state: RootState) => state.ui.imagesLoaded
export const selectIsMainContentScrollTriggered = (state: RootState) => state.ui.isMainContentScrollTriggered
export const selectIsMenuOpened = (state: RootState) => state.ui.isMenuOpened
export const selectIsMenuClosed = (state: RootState) => !state.ui.isMenuOpened
