import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { FC } from 'react'

const { height, width } = Dimensions.get('screen')
interface Props {
  palceholder: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
}

const Input: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.palceholder}
        secureTextEntry={props.secureTextEntry || false}
        onChangeText={props.onChangeText}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
  },

  input: {
    padding: 15,
  },
})
export default Input
