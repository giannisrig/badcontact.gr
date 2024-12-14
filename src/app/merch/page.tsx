import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { Product } from '@/components/common/Product/Product'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'

export const metadata: Metadata = {
  title: 'Official Merchandise - Bad Contact',
  description: 'Official merchandise of Bad Contact. Apparel, and music available for purchase.',
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
      <PageContentContainer>
        <PageHeader
          title='Offical Merchandise'
          description='Official merchandise of Bad Contact. Apparel, and music available for purchase.'
        />
        <ContentSection fullWidth={false}>
          <div className='grid-cols1 grid md:grid-cols-2'>
            <Product
              href={'https://badcontact.bandcamp.com/'}
              imgSrc={'/images/merch/T-Shirt-Black.png'}
              imgAlt={'T-Shirt Black - Merch - Bad Contact'}
              imgWidth={700}
              imgHeight={463}
              title={'Eightball T-Shirt (Black) - 15 EUR'}
              desc={''}
            />
            <Product
              href={'https://badcontact.bandcamp.com/'}
              imgSrc={'/images/merch/T-Shirt-White.png'}
              imgAlt={'T-Shirt White - Merch - Bad Contact'}
              imgWidth={700}
              imgHeight={463}
              title={'Eightball T-Shirt (White) - 15 EUR'}
              desc={''}
            />
            <Product
              href={'https://badcontact.bandcamp.com/'}
              imgSrc={'/images/merch/T-Shirt-Red.png'}
              imgAlt={'T-Shirt Red - Merch - Bad Contact'}
              imgWidth={700}
              imgHeight={463}
              title={'Eightball T-Shirt (Red) - 15 EUR'}
              desc={''}
            />
            <div className={'flex items-end'}>
              <Product
                href={'https://badcontact.bandcamp.com/'}
                imgSrc={'/images/merch/Bad-Contact-Merch-Eightball-CD.png'}
                imgAlt={'Eightball CD - Merch - Bad Contact'}
                imgWidth={700}
                imgHeight={463}
                title={'"Eightball" CD - 10 EUR'}
                desc={''}
              />
            </div>
          </div>
        </ContentSection>
      </PageContentContainer>
    </>
  )
}
