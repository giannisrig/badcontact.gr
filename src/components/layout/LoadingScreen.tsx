// 'use client'
import { selectIsAllImagesLoaded } from '@/store/scene/reselectors'
import { ConditionalComponent } from '@/components/shared/ConditionalComponent'
import { useAppSelector } from '@/store/store'
import { EImage } from '@/definitions/element'
import Image from 'next/image'
import { useImageLoader } from '@/hooks/useImageLoader'

/**
 * The loading screen needs to be a server component and loaded as soon as possible
 * to avoid displaying any kind of glitch when loading the images
 * @constructor
 */
export const LoadingScreen = () => {
  const isImagesLoaded = useAppSelector(selectIsAllImagesLoaded)
  const { onLoadImage } = useImageLoader()

  return (
    <ConditionalComponent condition={!isImagesLoaded}>
      <div className='fixed left-0 top-0 z-99 flex h-screen w-full items-center justify-center bg-black'>
        <Image
          className='opacity-50'
          src={'/images/BadContactLogo.svg'}
          alt={'Bad Contact Eightball Logo'}
          width={250}
          height={140}
          quality={100}
          priority={true}
          onLoad={onLoadImage(EImage.LOGO)}
        />
      </div>
    </ConditionalComponent>
  )
}
