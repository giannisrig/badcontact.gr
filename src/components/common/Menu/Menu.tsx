import { StyledMenu } from '@/components/common/Menu/Menu.styles'
import { selectIsMenuOpened } from '@/store/scene/selectors'
import { MenuClose } from '@/components/common/MenuClose/MenuClose'
import { useMenuAnimations } from '@/components/common/Menu/Menu.animations'
import { useAppSelector } from '@/store/store'
import { MenuImage } from '@/components/common/MenuImage/MenuImage'
import { MenuList } from '@/components/common/MenuList/MenuList'

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
