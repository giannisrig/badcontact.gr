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

        <Product
          href={'/merch/music/eightball-cd'}
          imgSrc={'/images/merch/Bad-Contact-Merch-Eightball-CD.png'}
          imgAlt={'Eightball CD - Merch - Bad Contact'}
          imgWidth={700}
          imgHeight={463}
          title={'"Eightball" CD - 10 EUR'}
          desc={
            ' For Old-School fans, limited edition of 100 printed copies, for the latest release of the band,\n' +
            '           "Eightball".'
          }
        />
      </ContentSection>

      <ContentSection>
        <h3>Listen & Stream</h3>
        <p>
          Our latest release and first LP, &quot;Eightball&quot; as also our whole music, is and will always be free and
          accessible to all people around the world. You can listen to all the songs of Bad Contact in any streaming
          platform you prefer.
        </p>

        <StreamingLinks />
      </ContentSection>
    </PageContentContainer>
  )
}
