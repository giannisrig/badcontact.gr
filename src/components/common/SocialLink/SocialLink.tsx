'use client'
import { useMenuLinkAnimations } from '@/components/common/Header/components/MenuLink/MenuLink.animations'
import { appConfig } from '@/constants/config'
import Link from 'next/link'
import Image from 'next/image'
import { MenuLinkProps } from '@/components/common/Header/components/MenuLink/MenuLink'
import {
  StyledSocialLink,
  StyledSocialLinkOutline,
  StyleSocialLinkIcon,
} from '@/components/common/SocialLink/SocialLink.styles'
import { StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'

export type SocialLinkProps = Omit<MenuLinkProps, 'index'>

export const SocialLink = ({ href, label }: SocialLinkProps) => {
  const { menuLinkRef, animateOnMouseOver } = useMenuLinkAnimations()

  const animateOnClick = () => {
    animateOnMouseOver()
  }

  return (
    <StyledSocialLink ref={menuLinkRef} key={href}>
      <Link prefetch href={href} title={label} onClick={animateOnClick}>
        <StyleSocialLinkIcon className='link-circle'>
          <Image
            src={`${appConfig.assets.socialIconsUrl}/${label}.svg`}
            alt={`${label}  Icon`}
            title={`${label} Icon`}
            width={22}
            height={22}
            quality={100}
          />
          <StyledSocialLinkOutline />
          <StyledMenuFader />
        </StyleSocialLinkIcon>
      </Link>
    </StyledSocialLink>
  )
}
