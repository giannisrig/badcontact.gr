import { RootState } from '@/store/store'

export const selectIsMenuOpen = (state: RootState) => state.mobileMenu.open
