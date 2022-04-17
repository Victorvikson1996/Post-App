import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Input, Button } from '../components'
import firebase from 'firebase'

const SignUp: FC = (props) => {
  const [name, setName] = React.useState<string | null>(null)
  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  const navigation = useNavigation()

  const signup = async () => {
    if (name && email && password) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        if (user) {
          Alert.alert(JSON.stringify(user))
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      Alert.alert(`Error`, `Missing Fields`)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Input palceholder="Name" onChangeText={(text) => setName(text)} />
      <Input palceholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        palceholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={signup} />
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
