import { StyledSocialLinks } from '@/components/common/SocialLinks/SocialLinks.styles'
import { appConfig } from '@/constants/config'
import { SocialLink } from '@/components/common/SocialLink/SocialLink'

export const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {appConfig.social.links.map(({ href, label }) => (
        <SocialLink key={href} href={href} label={label} />
      ))}
    </StyledSocialLinks>
  )
}
