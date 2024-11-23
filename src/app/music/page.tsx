import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { DiscographyGrid } from '@/components/common/DiscographyGrid/DiscographyGrid'
import { StreamingLinks } from '@/components/common/StreamingLinks/StreamingLinks'
import React from 'react'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { Product } from '@/components/common/Product/Product'

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
        title='Music & Discography of Bad Contact'
        description='...From day one, the band has been dedicated to creating original heavy metal music with passion and respect to the 70s & 80s era. Bad Contact crafts a nostalgic sound inspired by the bands and music that many of us grew up with...'
      />

      <DiscographyGrid />

      <ContentSection>
        <h3>Purchase Music</h3>
        <p className='mb-50px'>
          If you are the old-school person that wants the physical stuff or... just want to support the band, then we
          got you covered! The album &quot;Eightball&quot; is available in CD format (limited edition 100 copies) and
          you can buy it online from the merch.
        </p>

        <Product />
      </ContentSection>

      <ContentSection>
        <h3>Listen & Stream</h3>
        <p>
          Our latest release and first LP, &quot;Eightball&quot; as also our whole music, is and will always be free and
          accessible to all people around the world. You can listen to all the songs of Bad Contact in any streaming
          platform you prefer.
        </p>

        {/*<div className='mb-15px mt-15px w-[70%]'>*/}
        {/*  <iframe*/}
        {/*    src='https://open.spotify.com/embed/track/2rQf1kkT3H4e6sQDmcr4rf?utm_source=generator&theme=1'*/}
        {/*    width='100%'*/}
        {/*    height='152'*/}
        {/*    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'*/}
        {/*    loading='lazy'*/}
        {/*  ></iframe>*/}
        {/*</div>*/}

        <StreamingLinks />
      </ContentSection>
    </PageContentContainer>
  )
}
