import Link from 'next/link'
import { StyledLink, StyledMenuListPoint, StyleMenuCircle } from '@/components/common/Menu/Menu.styles'
import { StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { useMenuLinkAnimations } from '@/components/common/MenuLink/MenuLink.animations'
import Image from 'next/image'
import { Element } from '@/definitions/element'

export interface MenuLinkProps {
  href: string
  label: string
  index: number
}

export const ANGLE_MAP = [90, 25, -35, 155, -145]

export const MenuLink = ({ href, label, index }: MenuLinkProps) => {
  const { menuLinkRef, animateOnMouseOver, animateOnMouseLeave } = useMenuLinkAnimations()

  const animateOnClick = () => {
    animateOnMouseOver()
  }
  return (
    <StyledMenuListPoint ref={menuLinkRef} key={href} $angle={ANGLE_MAP[index]} className='circle-point'>
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
            src={`/images/icons/menu/${label}.svg`}
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
