import { Metadata } from 'next'
import { PolaroidImage } from '@/components/common/PolaroidImage/PolaroidImage'
import Image from 'next/image'
import { EYE_DIMENSIONS } from '@/components/artwork/eye/Eye'
import Band from '@/public/images/band/bad-contact-band-heavy-metal-rock.jpg'
import Band2 from '@/public/images/band/Bad-Contact-BandGroupPhoto2.jpg'
import { PolaroidGallery } from '@/components/common/PolaroidGallery/PolaroidGallery'

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
        <PolaroidGallery>
          <PolaroidImage>
            <Image src={Band} alt={'Bad Contact Eightball Eye'} quality={100} priority={true} />
            <caption>Band Photos</caption>
          </PolaroidImage>
          <PolaroidImage>
            <Image src={Band} alt={'Bad Contact Eightball Eye'} quality={100} priority={true} />
            <caption>Band Photos</caption>
          </PolaroidImage>
          <PolaroidImage>
            <Image src={Band} alt={'Bad Contact Eightball Eye'} quality={100} priority={true} />
            <caption>Band Photos</caption>
          </PolaroidImage>
        </PolaroidGallery>
      </div>
    </>
  )
}
