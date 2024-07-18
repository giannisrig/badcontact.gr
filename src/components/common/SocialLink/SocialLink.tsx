import { useMenuLinkAnimations } from '@/components/common/MenuLink/MenuLink.animations'
import { StyledLink, StyledMenuListPoint, StyleMenuCircle } from '@/components/common/MenuLink/MenuLink.styles'
import { appConfig } from '@/constants/config'
import Link from 'next/link'
import Image from 'next/image'
import { MenuLinkProps } from '@/components/common/MenuLink/MenuLink'
import { StyledSocialLink } from '@/components/common/SocialLink/SocialLink.styles'

export type SocialLinkProps = Omit<MenuLinkProps, 'index'>

export const SocialLink = ({ href, label }: SocialLinkProps) => {
  const { menuLinkRef, animateOnMouseOver, animateOnMouseLeave } = useMenuLinkAnimations()

  const animateOnClick = () => {
    animateOnMouseOver()
  }

  return (
    <StyledSocialLink ref={menuLinkRef} key={href}>
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
            src={`${appConfig.assets.socialIconsUrl}/${label}.svg`}
            alt={`${label}  Icon`}
            title={`${label} Icon`}
            width={22}
            height={22}
            quality={100}
          />
        </StyleMenuCircle>
      </Link>
    </StyledSocialLink>
  )
}
