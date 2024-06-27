import { StyledMenuList, StyledMenuListPoint } from '@/components/common/Menu/Menu.styles'

export const Menu = () => {
  return (
    <StyledMenuList>
      <StyledMenuListPoint $angle={90} />
      <StyledMenuListPoint $angle={45} />
      <StyledMenuListPoint $angle={0} />
    </StyledMenuList>
  )
}
