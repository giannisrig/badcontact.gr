import { render } from '@testing-library/react'
import { ConditionalComponent } from './ConditionalComponent'
import React from 'react'

describe('ConditionalComponent', () => {
  it('should render the children component passed when the condition is met', () => {
    const CHILDREN_COMPONENT_ID = 'childrenComponent'
    const { getByTestId } = render(
      <ConditionalComponent condition={true}>
        <span data-testid={CHILDREN_COMPONENT_ID} />
      </ConditionalComponent>
    )
    expect(getByTestId(CHILDREN_COMPONENT_ID)).toBeTruthy()
  })
})
