'use client'
import Image from 'next/image'
import SoundLink from '@/components/common/SoundLink/SoundLink'
export default function Logo() {
  return (
    <SoundLink
      href={'/'}
      className='cursor-hover flex items-center gap-[4px] text-white transition-colors duration-200 hover:text-pink'
    >
      <Image className='invert' src={'/images/demo/vercel.svg'} alt={'Logo of the Project'} width={22} height={22} />
      <span className='text-2xl font-light text-silver '>/</span>
      <h4 className={`font-primary text-lg font-semibold`}>NextJS Three Starter</h4>
    </SoundLink>
  )
}
