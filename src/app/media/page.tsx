import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { MediaContent } from '@/components/common/MediaContent/MediaContent'
import { VideosCarousel } from '@/components/common/VideosCarousel/VideosCarousel'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'
import { ContentSection } from '@/components/common/ContentSection/ContentSection'
import { PressReleases } from '@/components/common/PressReleases/PressReleases'

export const metadata: Metadata = {
  title: 'Media, Photos & Videos - Bad Contact',
  description:
    'Official photos from band photo shootings and live performances, exclusive video footage, press releases and more media from Bad Contact.',
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
        title='Band Media'
        description='Official photos from band photo shootings and live performances, exclusive video footage, press releases and more media from Bad Contact.'
      />

      <ContentSection>
        <h3 className='mt-50px'>Photos</h3>
        <p className='mb-50px'>Official band photo shootings, images from live performance at festivals.</p>
        <MediaContent />
      </ContentSection>

      <ContentSection fullWidth={true}>
        <h3>Videos</h3>
        <p className='w-full md:w-[70%]'>
          Official video footage of the Bad Contact from live performances, interviews and behind the scene videos of
          the band.
        </p>
        <VideosCarousel />
      </ContentSection>

      <ContentSection>
        <h3>Press Releases</h3>
        <p className='w-full md:w-[70%]'>Interviews of Bad Contact and Album reviews from magazines and webzines.</p>
        <PressReleases />
      </ContentSection>
    </PageContentContainer>
  )
}
