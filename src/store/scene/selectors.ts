import { RootState } from '@/store/store'

export const selectAspectRatio = (state: RootState) => state.ui.aspectRatio
export const selectImagesLoaded = (state: RootState) => state.ui.imagesLoaded
export const selectIsMainContentScrollTriggered = (state: RootState) => state.ui.isMainContentScrollTriggered
