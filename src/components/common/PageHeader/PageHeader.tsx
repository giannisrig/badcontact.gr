import { Breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs'
import React from 'react'
import { ScrollIndicator } from '@/components/common/ScrollIndicator/ScrollIndicator'

export interface PageHeaderProps {
  title: string
  description: string
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className='mb-[80px] flex w-full flex-col items-center gap-15px'>
      <Breadcrumbs />
      <h1 className='m-0'>{title}</h1>
      <p className='m-0 w-full md:w-[70%]'>{description}</p>
      <ScrollIndicator />
    </div>
  )
}
