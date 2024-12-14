import { StyledFooterDevelopedBy, StyledFooterText } from '@/components/common/Footer/Footer.styles'
import { Element } from '@/definitions/element'

export const Footer = () => {
  return (
    <>
      <StyledFooterText id={Element.FOOTER_COPYRIGHT} className='font-secondary'>
        ©2024, All Rights Reserved
      </StyledFooterText>
      <StyledFooterDevelopedBy id={Element.FOOTER_DEVELOPED_BY} className='font-secondary'>
        Developed by Giannis Riganas
      </StyledFooterDevelopedBy>
    </>
  )
}
