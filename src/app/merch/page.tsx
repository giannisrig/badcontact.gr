import { Metadata } from 'next'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { PageContentContainer } from '@/components/common/PageContentContainer/PageContentContainer'

export const metadata: Metadata = {
  title: 'Official Merchandise - Bad Contact',
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
        <PageHeader title='Offical Merchandise' description='Official live dates and posters of Bad Contact.' />
      </PageContentContainer>
    </>
  )
}
