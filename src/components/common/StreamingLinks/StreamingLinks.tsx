'use client'
import { appConfig } from '@/constants/config'
import { StyledSocialLink, StyledSocialLinkOutline } from '@/components/common/SocialLink/SocialLink.styles'
import Link from 'next/link'
import Image from 'next/image'
import { StyledMenuFader } from '@/components/common/MenuButton/MenuButton.styles'
import { StyledStreamingIcon, StyledStreamingLinks } from '@/components/common/StreamingLinks/StreamingLinks.styles'

export const StreamingLinks = () => {
  return (
    <StyledStreamingLinks>
      {appConfig.streaming.artist.map(({ href, label }) => (
        <StyledSocialLink key={href}>
          <Link prefetch href={href} title={label}>
            <StyledStreamingIcon className='link-circle'>
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
            </StyledStreamingIcon>
          </Link>
        </StyledSocialLink>
      ))}
    </StyledStreamingLinks>
  )
}
