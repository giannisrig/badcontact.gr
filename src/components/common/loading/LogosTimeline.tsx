'use client'
import React from 'react'
import Image from 'next/image'
import { useAppSelector } from '@/store/store'
import { selectIsActiveSceneLoaded } from '@/store/scene/reselectors'

const LogosTimeline = () => {
  // Get the Redux state for the objects loaded and scene loaded
  const sceneLoaded = useAppSelector(selectIsActiveSceneLoaded)

  return (
    <div className='relative flex items-center gap-30px'>
      <Image
        className={!sceneLoaded ? 'animate-pulse' : ''}
        src={'/images/nextjs-logo.svg'}
        alt={'NextJS Starter Template'}
        width={80}
        height={80}
        priority={true}
      />
      <Image
        src={'/images/threejs-logo.svg'}
        className={!sceneLoaded ? 'animate-pulse' : ''}
        alt={'ThreeJS React NextJS Template'}
        width={100}
        height={100}
        priority={true}
      />
      <Image
        className={!sceneLoaded ? 'animate-pulse' : ''}
        src={'/images/demo/vercel.svg'}
        alt={'Vercel Logo'}
        width={80}
        height={80}
        priority={true}
      />
    </div>
  )
}

export default LogosTimeline
