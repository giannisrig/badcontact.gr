import { Metadata } from 'next'
import { PhotoGrid } from '@/components/common/PhotoGrid/PhotoGrid'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { posterGallery } from '@/constants/gallery/posterGallery'

export const metadata: Metadata = {
  title: 'Live & Tour Dates and Info - Bad Contact',
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
      <PageContentContainer>
        <PageHeader title='Live Dates' description='Official live dates and posters of Bad Contact.' />
        <PhotoGrid images={posterGallery} />
      </PageContentContainer>
    </>
  )
}
