import { Metadata } from 'next'
import { appImages } from '@/constants/images'
import { EGallery } from '@/definitions/images'
import { PhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'

export const metadata: Metadata = {
  title: 'Official Band Photos - Bad Contact',
  description: 'Official photos of Bad Contact, band images from photo shootings of group and member photos.',
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
          title='Band Photos'
          description='Official photos of Bad Contact, band images from photo shootings of group and member photos.'
        />
        <PhotoGrid images={appImages[EGallery.BAND_PHOTOS].grid} />
      </PageContentContainer>
    </>
  )
}
