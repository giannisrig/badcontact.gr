import { RootState } from '@/store/store'

export const selectAspectRatio = (state: RootState) => state.scene.aspectRatio
