import React from 'react'
import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'

import { RenderIf } from '@components/RenderIf/RenderIf'

const mockUseSelector = useSelector as jest.Mock

describe('RenderIf component', () => {
  const mockSelector = jest.fn()

  beforeEach(() => {
    mockUseSelector.mockImplementation((selectorFn) => selectorFn({ foo: 'bar' }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render children when selector returns true', () => {
    mockSelector.mockReturnValue(true)

    const { queryByText } = render(
      <RenderIf selector={mockSelector}>
        <div>Child component</div>
      </RenderIf>
    )

    expect(queryByText('Child component')).toBeTruthy()
  })

  it('should not render children when selector returns false', () => {
    mockSelector.mockReturnValue(false)

    const { queryByText } = render(
      <RenderIf selector={mockSelector}>
        <div>Child component</div>
      </RenderIf>
    )

    expect(queryByText('Child component')).toBeFalsy()
  })
})
