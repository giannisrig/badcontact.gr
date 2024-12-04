import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { Product } from '@/components/common/Product/Product'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'

export const metadata: Metadata = {
  title: 'Official Merchandise - Bad Contact',
  description: 'Official Merchandise - Bad Contact',
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
        <PageHeader title='Offical Merchandise' description='Official live dates and posters of Bad Contact.' />
        <ContentSection fullWidth={false}>
          <Product
            href={'/merch/music/eightball-cd'}
            imgSrc={'/images/merch/T-Shirt-Black.png'}
            imgAlt={'T-Shirt Black - Merch - Bad Contact'}
            imgWidth={700}
            imgHeight={463}
            title={'Eightball T-Shirt (Black) - 15 EUR'}
            desc={
              ' For Old-School fans, limited edition of 100 printed copies, for the latest release of the band,\n' +
              '           "Eightball".'
            }
          />
        </ContentSection>
      </PageContentContainer>
    </>
  )
}
