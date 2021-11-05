import React from 'react'
import { Text } from 'react-native'

export const HelloWorld = ({ text = 'Hello from macOS' }) => {
  return <Text>{text}</Text>
}
