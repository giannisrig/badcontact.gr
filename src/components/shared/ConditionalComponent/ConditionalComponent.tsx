import { PropsWithChildren } from 'react'

/**
 * @name ConditionalComponent
 * @category Component
 * @description React 18+ Conditional Rendering component.
 *
 * @param {PropsWithChildren<{ condition: boolean }>} props - The props object for the `ConditionalComponent`.
 * @param {boolean} props.condition - The condition to check for rendering the children.
 * @returns {JSX.Element | null} The children of the `ConditionalComponent` if the `condition` is `true`, otherwise `null`.
 * @example
 * ```
 * <ConditionalComponent condition={true}>
 *   <p>This will be rendered if the condition is true.</p>
 * </ConditionalComponent>
 * ```
 */
export const ConditionalComponent = ({
  children,
  condition,
}: PropsWithChildren<{ condition: boolean }>): JSX.Element | null => {
  return (condition && children) as JSX.Element
}
