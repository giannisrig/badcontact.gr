import { ReactNode } from 'react'

export interface ContentSectionProps {
  children: ReactNode
}

export const ContentSection = ({ children }: ContentSectionProps) => (
  <div className='flex w-full flex-col items-center justify-center md:w-[70%]'>{children}</div>
)
