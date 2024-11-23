import { ReactNode } from 'react'

export interface PageContentContainerProps {
  children: ReactNode
}

export const PageContentContainer = ({ children }: PageContentContainerProps) => (
  <div className='flex w-[90%] flex-col items-center justify-center gap-50px md:w-[70%] md:gap-80px'>{children}</div>
)
