import { Metadata } from 'next'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'
import { PhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid'

export const metadata: Metadata = {
  title: 'Live Photos',
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
        <h1>{`Live Photos`}</h1>
        <PhotoGrid images={appImages[EGallery.LIVE_PHOTOS].grid} />
      </div>
    </>
  )
}
