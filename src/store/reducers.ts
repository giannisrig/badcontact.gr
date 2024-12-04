// import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from '@reduxjs/toolkit'
import { uiReducer } from '@/store/ui/reducer'

// Define your reducers here
export const rootReducer = combineReducers({
  ui: uiReducer,
})

// const combinedReducer = (state: any, action: any) => {
//   if (action.type === HYDRATE) {
//     return {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     }
//   } else {
//     return rootReducer(state, action)
//   }
// }
