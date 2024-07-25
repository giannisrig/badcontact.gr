import { Metadata } from 'next'
import { PhotoGallery } from '@/components/common/PhotoGallery/PhotoGallery'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'

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
        <h1>{`Media`}</h1>
        <PhotoGallery {...appImages[EGallery.BAND_PHOTOS]} />
      </div>
    </>
  )
}
