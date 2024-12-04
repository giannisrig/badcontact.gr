'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, rootStore } from '@/store/store'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(null as unknown as AppStore)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = rootStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
