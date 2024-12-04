import Link from 'next/link'
import { StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { useMenuLinkAnimations } from '@/components/common/Header/components/MenuLink/MenuLink.animations'
import Image from 'next/image'
import { appConfig } from '@/constants/config'
import {
  StyledMenuListPoint,
  StyledLink,
  StyleMenuCircle,
} from '@/components/common/Header/components/MenuLink/MenuLink.styles'
import { useAppDispatch } from '@/store/store'
import { setIsMenuOpen } from '@/store/ui/actions'

export interface MenuLinkProps {
  href: string
  label: string
  index: number
}

export const MenuLink = ({ href, label, index }: MenuLinkProps) => {
  const dispatch = useAppDispatch()
  const { menuLinkRef, animateOnMouseOver, animateOnMouseLeave } = useMenuLinkAnimations()
  const handleOnClick = () => {
    animateOnMouseOver()
    dispatch(setIsMenuOpen(false))
    document.body.style.overflow = 'auto'
  }

  return (
    <StyledMenuListPoint ref={menuLinkRef} key={href} $angle={appConfig.menu.angles[index]} className='circle-point'>
      <Link
        prefetch
        href={href}
        title={label}
        onMouseEnter={animateOnMouseOver}
        onMouseLeave={animateOnMouseLeave}
        onClick={handleOnClick}
      >
        <StyleMenuCircle className='link-circle'>
          <Image
            src={`${appConfig.assets.menuIconsUrl}/${label}.svg`}
            alt={`${label} Menu Icon`}
            title={`${label} Menu Icon`}
            width={22}
            height={22}
            quality={100}
          />
        </StyleMenuCircle>
        <StyledMenuFader />
        <StyledLink className='link-title'>{label}</StyledLink>
      </Link>
    </StyledMenuListPoint>
  )
}
