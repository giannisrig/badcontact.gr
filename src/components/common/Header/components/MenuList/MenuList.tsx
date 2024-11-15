import { appConfig } from '@/constants/config'
import { MenuLink } from '@/components/common/Header/components/MenuLink/MenuLink'
import { StyledMenuList } from '@/components/common/Header/components/MenuList/MenuList.styles'
import { useAppDispatch } from '@/store/store'
import { setIsMenuOpen } from '@/store/ui/actions'

export const MenuList = () => {
  return (
    <StyledMenuList>
      {appConfig.menu.urls.map(({ href, label }, index) => (
        <MenuLink key={href} index={index} href={href} label={label} />
      ))}
    </StyledMenuList>
  )
}
