import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import React, { FC } from 'react'

const { height, width } = Dimensions.get('screen')

interface Props {
  title: string
  onPress: () => void
}

const Button: FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 20,
  },

  text: {
    color: '#fff',
  },
})

export default Button
