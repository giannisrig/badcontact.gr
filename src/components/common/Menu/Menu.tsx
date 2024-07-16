import { StyledMenu, StyledMenuList } from '@/components/common/Menu/Menu.styles'
import Image from 'next/image'
import { selectIsMenuOpened } from '@/store/scene/selectors'
import { MenuClose } from '@/components/common/MenuClose/MenuClose'
import { useMenuAnimations } from '@/components/common/Menu/Menu.animations'
import { Element } from '@/definitions/element'
import { useAppSelector } from '@/store/store'
import { MenuLink } from '@/components/common/MenuLink/MenuLink'

const LINKS_MAP = [
  {
    href: '/merch',
    label: 'Merch',
  },
  {
    href: '/music',
    label: 'Music',
  },
  {
    href: '/about-us',
    label: 'Band',
  },
  {
    href: '/media',
    label: 'Media',
  },
  {
    href: '/lives',
    label: 'Lives',
  },
]

export const Menu = () => {
  const { menuRef } = useMenuAnimations()
  const isMenuOpened = useAppSelector(selectIsMenuOpened)
  const pointerEvents = !isMenuOpened ? 'none' : 'all'

  return (
    <StyledMenu ref={menuRef} $pointerEvents={pointerEvents}>
      <StyledMenuList>
        {LINKS_MAP.map((link, index) => (
          <MenuLink key={link.href} index={index} href={link.href} label={link.label} />
        ))}
      </StyledMenuList>
      <Image
        id={Element.MENU_LIST_IMAGE}
        src={'/images/artwork/EightBallMenu.svg'}
        alt={'Eightball Menu Icon'}
        width={130}
        height={130}
        quality={100}
      />
      <MenuClose />
    </StyledMenu>
  )
}
