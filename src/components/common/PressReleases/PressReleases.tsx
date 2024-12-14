import Image from 'next/image'
import Link from 'next/link'

export const PressReleases = () => {
  return (
    <div className='mt-20px grid grid-cols-2 gap-15px'>
      <div className='center flex justify-center'>
        <div className='center flex w-full justify-center md:w-[70%]'>
          <Link href={'https://rockinathens.gr/bad-contact-eightball/'} target='_blank'>
            <div className='flex aspect-[3/2] items-center justify-center'>
              <Image
                src={'/images/press/RockinAthens.png'}
                alt={'Rockin Athens Logo review Bad Contact'}
                quality={100}
                width={700}
                height={463}
              />
            </div>
            <p>&quot;Eightball&quot; review from Rockin Athens.</p>
          </Link>
        </div>
      </div>
      <div className='center flex justify-center'>
        <div className='center flex w-full justify-center md:w-[70%]'>
          <Link href={'https://thegallery.gr/gr/rethymno-rocks-festival-4-program-2024/'} target='_blank'>
            <div className='flex aspect-[3/2] items-center justify-center'>
              <Image
                src={'/images/press/TheGallery.png'}
                alt={'The Gallery Logo'}
                quality={100}
                width={700}
                height={463}
              />
            </div>
            <p>&quot;Rethymno Rocks Festival (2024)&quot; by The Gallery.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
