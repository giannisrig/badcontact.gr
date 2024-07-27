import { Metadata } from 'next'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'
import { PhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid'
import { Breadcrumbs } from '@/components/common/Breadcrumbs/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Official Band Photos - Bad Contact',
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
        <h1>{`Band Photos`}</h1>
        <Breadcrumbs />
        <p>Official photos of Bad Contact, band images from photo shootings of group and member photos.</p>

        <PhotoGrid images={appImages[EGallery.BAND_PHOTOS].grid} />
      </div>
    </>
  )
}
