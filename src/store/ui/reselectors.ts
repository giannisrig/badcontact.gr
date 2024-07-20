import { createSelector } from 'reselect'
import { selectImagesLoaded } from '@/store/ui/selectors'

export const selectIsAllImagesLoaded = createSelector([selectImagesLoaded], (images) => images.length === 13)
