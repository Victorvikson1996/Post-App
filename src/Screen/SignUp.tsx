import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

import { Input, Button } from '../components'

const SignUp: FC = (props) => {
  const [name, setName] = React.useState<string | null>(null)
  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Input palceholder="Name" onChangeText={(text) => setName(text)} />
      <Input palceholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        palceholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={() => alert('Hello')} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}> Already Have an Account ? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('login')}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: 'rgba(81, 135, 200, 1)' }}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    flexDirection: 'row',
    marginVertical: 20,
  },
})

export default SignUp
