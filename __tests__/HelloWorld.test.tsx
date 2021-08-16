import React from 'react'
import { render } from '@testing-library/react-native'

import { HelloWorld } from '../src'

// TODO define platform

describe('HelloWorld', () => {
  it('should render component with default message', () => {
    const { getByText, debug } = render(<HelloWorld />)

    debug()

    expect(getByText('Hello')).toBeDefined()
  })

  it('should render component with custom message', () => {
    const { getByText } = render(<HelloWorld text="Good Morning!" />)

    expect(getByText('Good Morning!')).toBeDefined()
  })
})
