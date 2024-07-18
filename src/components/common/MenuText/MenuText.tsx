import { StyledMenuText } from '@/components/common/MenuText/MenuText.styles'
import { useMenuTextAnimations } from '@/components/common/MenuText/MenuText.animations'

export const MenuText = () => {
  const { menuTextRef } = useMenuTextAnimations()
  return (
    <StyledMenuText ref={menuTextRef}>
      ...Bad Contact from Athens, Greece, is a band dedicated to creating passionate heavy metal music. Inspired by the
      iconic sounds of the 80s, we blend elements from beloved bands of that era, to evoke you feelings of nostalgia...
    </StyledMenuText>
  )
}
