import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'

const SignUp: FC = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
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
