import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { MediaContent } from '@/components/common/MediaContent/MediaContent'

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
          title='Band Media'
          description='Official photos, videos, press releases and media from Bad Contact.'
        />
        <MediaContent />
      </div>
    </>
  )
}
