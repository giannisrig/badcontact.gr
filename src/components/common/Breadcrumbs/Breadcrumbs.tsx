'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { StyledBreadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs.styles'

type TBreadCrumbProps = {
  capitalizeLinks?: boolean
}

const separator = '/'

export const Breadcrumbs = ({ capitalizeLinks = true }: TBreadCrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
    <div>
      <StyledBreadcrumbs className='font-secondary'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const itemClasses = paths === href ? `current-page` : ''
          const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink.replace('-', ' ')}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </StyledBreadcrumbs>
    </div>
  )
}
