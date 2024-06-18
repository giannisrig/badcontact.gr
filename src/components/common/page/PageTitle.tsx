'use client'
import { useDomEventScene } from '@/hooks/scene/useDomEventScene'
import { EScene } from '@/types/scenes'

export default function PageTitle({ title }) {
  const { handleOnEventFire } = useDomEventScene(EScene.SHOW_CAMERA_PLANE)

  return (
    <h1 id='pageTitle' onClick={handleOnEventFire} className='font-secondary text-[80px] leading-[90px] text-white'>
      {title}
    </h1>
  )
}
