import Link from 'next/link'
import { StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { useMenuLinkAnimations } from '@/components/common/MenuLink/MenuLink.animations'
import Image from 'next/image'
import { appConfig } from '@/constants/config'
import { StyledMenuListPoint, StyledLink, StyleMenuCircle } from '@/components/common/MenuLink/MenuLink.styles'

export interface MenuLinkProps {
  href: string
  label: string
  index: number
}

export const MenuLink = ({ href, label, index }: MenuLinkProps) => {
  const { menuLinkRef, animateOnMouseOver, animateOnMouseLeave } = useMenuLinkAnimations()

  const animateOnClick = () => {
    animateOnMouseOver()
  }

  return (
    <StyledMenuListPoint ref={menuLinkRef} key={href} $angle={appConfig.menu.angles[index]} className='circle-point'>
      <Link
        prefetch
        href={href}
        title={label}
        onMouseEnter={animateOnMouseOver}
        onMouseLeave={animateOnMouseLeave}
        onClick={animateOnClick}
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
