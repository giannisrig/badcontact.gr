import { ReactNode } from 'react'

export interface ContentSectionProps {
  children: ReactNode
  fullWidth?: boolean
}

export const ContentSection = ({ children, fullWidth = false }: ContentSectionProps) => {
  const sectionClass = fullWidth ? '' : 'md:w-[70%]'
  return <div className={`flex w-full flex-col items-center justify-center ${sectionClass}`}>{children}</div>
}
