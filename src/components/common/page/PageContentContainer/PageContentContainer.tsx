'use client'
import { useOnMenuPageContentAnimation } from '@/components/common/page/PageContentContainer/PageContentContainer.hooks'

export const PageContentContainer = ({ children }) => {
  const container = useOnMenuPageContentAnimation()

  return (
    <div ref={container} className='relative z-3 flex h-screen items-center justify-center text-center text-white'>
      {children}
    </div>
  )
}
