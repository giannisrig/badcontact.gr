import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { DiscographyGrid } from '@/components/common/DiscographyGrid/DiscographyGrid'
import { StreamingLinks } from '@/components/common/StreamingLinks/StreamingLinks'
import React from 'react'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { Product } from '@/components/common/Product/Product'
import Image from 'next/image'
import { StyledDiscographyGrid } from '@/components/common/DiscographyGrid/DiscographyGrid.styles'

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
        title='Eightball (2024)'
        description='..The first full length album of Bad Contact "Eightball", includes eight tracks of 70s & 80s inspired heavy metal that will bring you feelings of nostalgia...'
      />

      <div className='grid grid-cols-2 gap-15px md:gap-50px'>
        <Image
          src={'/images/music/Bad-Contact-Eightball-Album-Cover.jpg'}
          alt={'Eightball Cover - Music & Discography - Bad Contact'}
          quality={100}
          width={600}
          height={600}
        />
        <Image
          src={'/images/music/Bad-Contact-Eightball-Back-Cover.jpg'}
          alt={'Eightball Back Cover - Music & Discography - Bad Contact'}
          quality={100}
          width={600}
          height={600}
        />
      </div>

      <ContentSection>
        <h3>About the Album</h3>
        <p>
          Our first album "Eightball" is our perspective of what an 80s heavy metal music could sound like in the modern
          era. It includes around 35min of music that will travel you back in time and will evoke you feelings of
          nostalgia. Drums were recorded at Odeon Studios by Ilias Lakkas, instruments and vocals were recorded at
          Ignite Studios by Giorgos Christoforidis aka Georger "Tirouris". Mixed by George Tirouris and produced by
          George and Bad Contact. Artwork created by Dimos Stathis.
        </p>

        <div className='mb-15px mt-30px w-[90%] md:w-[80%]'>
          <iframe
            src='https://open.spotify.com/embed/album/1YcknMptGh4vis3941E9PA?utm_source=generator&theme=0'
            width='100%'
            height='630'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>

        <StreamingLinks />
      </ContentSection>
    </PageContentContainer>
  )
}
