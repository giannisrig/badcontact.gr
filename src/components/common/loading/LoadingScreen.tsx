'use client'
import { useAppDispatch, useAppSelector } from '@/store/store'
import React, { useState, useRef } from 'react'
import LogosTimeline from '@/components/common/loading/LogosTimeline'
import { selectIsActiveSceneLoaded } from '@/store/scene/reselectors'
import { setSceneIsInView } from '@/store/scene/actions'

const LoadingScreen = () => {
  const loadingScreen = useRef(null)

  // Set up the state for showing the loading screen
  const [showScreen, setShowScreen] = useState(true)

  // Set up the Redux State dispatch
  const dispatch = useAppDispatch()

  const isActiveSceneLoaded = useAppSelector(selectIsActiveSceneLoaded)

  const loadedClass = isActiveSceneLoaded ? '' : 'invert'

  const clickHandler = () => {
    // Hide the loading screen
    setShowScreen(false)

    // Update the entered state
    dispatch(setSceneIsInView(true))
  }

  return (
    <>
      {showScreen && (
        <div
          ref={loadingScreen}
          className={
            'fixed left-0 top-0 z-100 flex h-screen w-screen items-center justify-center bg-white text-center text-black duration-200 ' +
            loadedClass
          }
        >
          <div className='flex w-max flex-col items-center justify-center gap-25px'>
            <LogosTimeline />
            <div className='flex w-max flex-col items-center justify-center gap-5px'>
              <h1 className=' font-secondary text-4xl font-bold '>NextJS & ThreeJS Starter Template</h1>
              <p className='font-secondary text-lg '>
                A starter template for NextJS with ThreeJS and @react-three/fiber
              </p>
            </div>
            <div className='h-[56px]'>
              {isActiveSceneLoaded && (
                <button
                  className='rounded-[30px] border border-black px-25px py-10px font-semibold transition-colors duration-200 hover:bg-black hover:text-white'
                  onClick={clickHandler}
                >
                  Enter Website
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoadingScreen
