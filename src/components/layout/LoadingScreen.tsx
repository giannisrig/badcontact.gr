// 'use client'
import { selectIsAllImagesLoaded } from '@/store/scene/reselectors'
import { ConditionalComponent } from '@/components/shared/ConditionalComponent'
import { useAppSelector } from '@/store/store'

export const LoadingScreen = () => {
  const isImagesLoaded = useAppSelector(selectIsAllImagesLoaded)
  return (
    <ConditionalComponent condition={!isImagesLoaded}>
      <div className='fixed left-0 top-0 z-99 h-screen w-full bg-black' />
    </ConditionalComponent>
  )
}
