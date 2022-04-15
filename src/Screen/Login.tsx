import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

const Login: FC = (props) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.loginText}>
        <Text style={{ marginHorizontal: 5 }}> Don't Have an Account ? </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('signup')}
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

export default Login
