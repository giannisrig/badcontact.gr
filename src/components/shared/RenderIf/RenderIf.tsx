import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@redux'

/** React 18+ Conditional Rendering component integrated with latest Redux-Toolkit and useSelectors  */
export const RenderIf = ({ children, selector }: PropsWithChildren<{ selector: (store: RootState) => unknown }>) => {
  const selectorValue = useSelector(selector)
  return selectorValue ? <>{children}</> : null
}
