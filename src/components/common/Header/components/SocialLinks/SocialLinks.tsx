import { StyledSocialLinks } from '@/components/common/Header/components/SocialLinks/SocialLinks.styles'
import { appConfig } from '@/constants/config'
import { SocialLink } from '@/components/common/SocialLink/SocialLink'
import { useSocialLinksAnimations } from '@/components/common/Header/components/SocialLinks/SocialLinks.animations'

export const SocialLinks = () => {
  const { socialLinksRef } = useSocialLinksAnimations()
  return (
    <StyledSocialLinks ref={socialLinksRef}>
      {appConfig.social.links.map(({ href, label }) => (
        <SocialLink key={href} href={href} label={label} />
      ))}
    </StyledSocialLinks>
  )
}
