import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

import { Input } from '../components'

const SignUp: FC = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Input palceholder="Name" onChangeText={(text) => console.log(text)} />
      <Input palceholder="Email" onChangeText={(text) => console.log(text)} />
      <Input
        palceholder="Password"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SignUp
