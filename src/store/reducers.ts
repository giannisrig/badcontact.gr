import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from '@reduxjs/toolkit'
import mobileMenuReducer from '@/store/slices/mobileMenuSlice'
import overlayReducer from '@/store/slices/overlaySlice'
import { uiReducer } from '@/store/scene/reducer'

// Define your reducers here
export const rootReducer = combineReducers({
  ui: uiReducer,
  mobileMenu: mobileMenuReducer,
  overlay: overlayReducer,
})

const combinedReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
  } else {
    return rootReducer(state, action)
  }
}
