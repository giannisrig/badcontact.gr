'use client'
import Image from 'next/image'
import { useAppDispatch } from '@/store/store'
import { setMobileMenuOpen } from '@/store/slices/mobileMenuSlice'
import { setOverlayActive } from '@/store/slices/overlaySlice'

export default function HamburgerButton() {
  const dispatch = useAppDispatch()

  function openMobileMenu(e) {
    e.preventDefault()
    dispatch(setMobileMenuOpen(true))
    dispatch(setOverlayActive(true))
  }

  return (
    <a
      href='#'
      className='flex items-center gap-7px text-white transition-colors duration-200 hover:text-green'
      onClick={(e) => openMobileMenu(e)}
    >
      <Image src='/images/hamburger.svg' alt='Menu Icon' width={20} height={13} />
      <span className='text-sm'>Menu</span>
    </a>
  )
}
