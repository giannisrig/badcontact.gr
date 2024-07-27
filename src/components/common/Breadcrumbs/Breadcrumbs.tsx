'use client'

import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
  capitalizeLinks?: boolean
}

const separator = '/'

export const Breadcrumbs = ({ capitalizeLinks = true }: TBreadCrumbProps) => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)

  return (
    <div>
      <ul>
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
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}
