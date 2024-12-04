import { Metadata } from 'next'
import { Product } from '@/components/common/Product/Product'

export const metadata: Metadata = {
  title: 'Bad Contact Home',
  description: 'Welcome to Next.js',
  icons: {
    icon: '/images/favicon.png',
  },
}

/**
 * Keep this as a Server Component
 * @constructor
 */
export default function HomePage() {
  return (
    <>
      <div className='flex w-[60%] flex-col items-center justify-center'>
        <h1>{`80'S INSPIRED HEAVY METAL/ROCK`}</h1>
        <p>
          ...Bad Contact from Athens, Greece, is a band dedicated to creating passionate heavy metal music. Inspired by
          the iconic sounds of the 80s, we blend elements from beloved bands of that era, to evoke you feelings of
          nostalgia...
        </p>
        <Product
          href={'/merch'}
          imgSrc={'/images/merch/BadContactMerch.png'}
          imgAlt={'T-Shirt Black - Merch - Bad Contact'}
          imgWidth={700}
          imgHeight={463}
          title={'Official Bad Contact Merch'}
          desc={''}
        />
      </div>
      {/*<StyledTerrainImage src={'/images/Terrain.svg'} alt={'Logo of the Project'} width={1085} height={536} />*/}
    </>
  )
}
