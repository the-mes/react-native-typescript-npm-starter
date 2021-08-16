import React from 'react'
import { render } from '@testing-library/react-native'

import { HelloWorld } from '../src'

// TODO define platform

describe('HelloWorld', () => {
  it('should render component with default message', () => {
    const { getByText, toJSON } = render(<HelloWorld />)

    expect(getByText('Hello')).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render component with custom message', () => {
    const { getByText, toJSON } = render(<HelloWorld text="Good Morning!" />)

    expect(getByText('Good Morning!')).toBeDefined()
    expect(toJSON()).toMatchSnapshot()
  })
})
