import { StyledFooterDevelopedBy, StyledFooterText } from '@/components/common/Footer/Footer.styles'

export const Footer = () => {
  return (
    <>
      <StyledFooterText className='font-secondary'>©2024, All Rights Reserved</StyledFooterText>
      <StyledFooterDevelopedBy className='font-secondary'>Developed by Giannis Riganas</StyledFooterDevelopedBy>
    </>
  )
}
