import { Metadata } from 'next'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'
import { PhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'

export const metadata: Metadata = {
  title: 'Official Live Photos - Bad Contact',
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
          title='Live Photos'
          description='Official photos of Bad Contact, band images from lives they have played.'
        />
        <PhotoGrid images={appImages[EGallery.LIVE_PHOTOS].grid} />
      </div>
    </>
  )
}
