import { useAppDispatch } from '@/store/store'
import { consoleLogger } from '@/helpers/consoleLogger'
import { ELog } from '@/definitions/logger'
import { setImageLoaded } from '@/store/scene/actions'
import { EImage } from '@/definitions/element'

export const useImageLoader = () => {
  const dispatch = useAppDispatch()

  const onLoadImage = (image: EImage) => () => {
    dispatch(setImageLoaded(image))
    consoleLogger.log(ELog.IMAGE, `${image} is loaded`)
  }

  return {
    onLoadImage,
  }
}
