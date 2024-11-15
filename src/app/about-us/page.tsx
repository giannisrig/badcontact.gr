import { Metadata } from 'next'
import Band from '@/images/band/bad-contact-band-heavy-metal-rock.jpg'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import Image from 'next/image'
import { AboutContent } from '@/components/common/AboutContent/AboutContent'

export const metadata: Metadata = {
  title: 'Media',
  description: 'Welcome to Next.js',
  icons: {
    icon: '/images/favicon.png',
  },
}
/**
 * Keep this as a Server Component
 * @constructor
 */
export default function Page() {
  return (
    <>
      <div className='flex w-[70%] flex-col items-center justify-center'>
        <PageHeader
          title='About Bad Contact'
          description='All you need to know about the band, our story and the current lineup.'
        />

        <AboutContent />
      </div>
    </>
  )
}
