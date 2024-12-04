import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StreamingLinks } from '@/components/common/StreamingLinks/StreamingLinks'
import React from 'react'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import Image from 'next/image'

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
    <PageContentContainer>
      <PageHeader
        title='Out of the Blue (2023)'
        description='..The first single and official music realease of the band featuring Andreas Lagios (Nightstalker, Thee Holy Strangers, ex. Rotting Christ) on the bass..'
      />

      <div className='grid grid-cols-2 gap-15px md:gap-50px'>
        <Image
          src={'/images/music/Bad-Contact-Out-of-the-blue-cover.jpg'}
          alt={'Out of the Blue Cover - Music & Discography - Bad Contact'}
          quality={100}
          width={600}
          height={600}
        />
        <video width='600' height='600' controls className='h-full object-cover	grayscale'>
          <source src='/images/music/andreas-lagios-out-of-the-blue-rec.mp4' type='video/mp4' />
        </video>
      </div>

      <ContentSection>
        <h3>About the Single</h3>
        <p>
          Our first album &quot;Eightball&quot; is our perspective of what an 80s heavy metal music could sound like in the modern
          era. It includes around 35min of music that will travel you back in time and will evoke you feelings of
          nostalgia. Drums were recorded at Odeon Studios by Ilias Lakkas, instruments and vocals were recorded at
          Ignite Studios by Giorgos Christoforidis aka Georger &quot;Tirouris&quot;. Mixed by George Tirouris and produced by
          George and Bad Contact. Artwork created by Dimos Stathis.
        </p>

        <div className='mb-15px mt-30px w-[80%]'>
          <iframe
            src='https://open.spotify.com/embed/album/3KtsGWIZ3O1IlQULcWsUei?utm_source=generator'
            width='100%'
            height='352'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>

        <StreamingLinks />
      </ContentSection>
    </PageContentContainer>
  )
}
