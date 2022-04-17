import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Input, Button } from '../components'

const Login: FC = (props) => {
  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Input palceholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        palceholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={() => alert('Hello')} />
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}> Don't Have an Account ? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('signup')}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: 'rgba(81, 135, 200, 1)' }}>Sign Up Here</Text>
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

export default Login
