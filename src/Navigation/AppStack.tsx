import { View, Text } from 'react-native'
import React, { FC } from 'react'

import { Home, DashBoard } from '../Screen'
import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const AppStack: FC = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Home" component={Home} />
      <Screen name="DashBoard" component={DashBoard} />
    </Navigator>
  )
}

export default AppStack
