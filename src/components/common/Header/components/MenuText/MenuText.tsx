import { StyledMenuText } from '@/components/common/Header/components/MenuText/MenuText.styles'
import { useMenuTextAnimations } from '@/components/common/Header/components/MenuText/MenuText.animations'

export const MenuText = () => {
  const { menuTextRef } = useMenuTextAnimations()
  return (
    <StyledMenuText ref={menuTextRef}>
      ...80’s Heavy Metal/Rock from Athens, Greece that will bring you feelings of nostalgia...
    </StyledMenuText>
  )
}
