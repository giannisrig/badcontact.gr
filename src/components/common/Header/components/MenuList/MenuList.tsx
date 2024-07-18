import { appConfig } from '@/constants/config'
import { MenuLink } from '@/components/common/Header/components/MenuLink/MenuLink'
import { StyledMenuList } from '@/components/common/Header/components/MenuList/MenuList.styles'

export const MenuList = () => (
  <StyledMenuList>
    {appConfig.menu.urls.map(({ href, label }, index) => (
      <MenuLink key={href} index={index} href={href} label={label} />
    ))}
  </StyledMenuList>
)
