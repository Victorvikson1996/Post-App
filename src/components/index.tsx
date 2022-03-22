import { View, Text } from 'react-native'
import React, { FC } from 'react'

interface Props {
  palceholder: string
  onChange: (text: string) => void
  secureTextEntry?: boolean
}

const Input: FC<Props> = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default Input
