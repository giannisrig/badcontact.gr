import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { DiscographyGrid } from '@/components/common/DiscographyGrid/DiscographyGrid'
import { StreamingLinks } from '@/components/common/StreamingLinks/StreamingLinks'

export const metadata: Metadata = {
  title: 'Music & Discography - Bad Contact',
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
      <div className='flex w-[70%] flex-col items-center justify-center gap-80px'>
        <PageHeader
          title='Music & Discography of Bad Contact'
          description='...From day one, the band has been dedicated to creating original heavy metal music with passion and respect to the 70s & 80s era. Bad Contact crafts a nostalgic sound inspired by the bands and music that many of us grew up with...'
        />

        <DiscographyGrid />

        <div className='w-[70%]'>
          <p>
            Our latest release and first LP, &quot;Eightball&quot; as also our whole music, is and will always be free
            and accessible to all people around the world. You can listen to all the songs of Bad Contact in any
            streaming platform you prefer.
          </p>

          <StreamingLinks />
        </div>
      </div>
    </>
  )
}
