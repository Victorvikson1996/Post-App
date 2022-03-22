import React, { FC } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { SignUp, Login } from '../Screen'

const { Navigator, Screen } = createStackNavigator()

const AutStack: FC = () => {
  return (
    <Navigator>
      <Screen name="signup" component={SignUp} />
      <Screen name="login" component={Login} />
    </Navigator>
  )
}

export default AutStack
