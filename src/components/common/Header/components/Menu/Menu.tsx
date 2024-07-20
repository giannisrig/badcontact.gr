import { StyledMenu } from '@/components/common/Header/components/Menu/Menu.styles'
import { selectIsMenuOpened } from '@/store/ui/selectors'
import { MenuClose } from '@/components/common/Header/components/MenuClose/MenuClose'
import { useMenuAnimations } from '@/components/common/Header/components/Menu/Menu.animations'
import { useAppSelector } from '@/store/store'
import { MenuImage } from '@/components/common/Header/components/MenuImage/MenuImage'
import { MenuList } from '@/components/common/Header/components/MenuList/MenuList'

export const Menu = () => {
  const { menuRef } = useMenuAnimations()
  const isMenuOpened = useAppSelector(selectIsMenuOpened)
  const pointerEvents = !isMenuOpened ? 'none' : 'all'

  return (
    <StyledMenu ref={menuRef} $pointerEvents={pointerEvents}>
      <MenuList />
      <MenuImage />
      <MenuClose />
    </StyledMenu>
  )
}
