import { View, Text } from 'react-native'
import React, { FC, useState, useEffect } from 'react'

import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'

import AutStack from './AutStack'

const auth = firebase.auth()

const MainNavigation: FC = () => {
  const [user, setUser] = useState<any>(null)

  const bootstrap = () => {
    firebase.auth().onAuthStateChanged((_user) => {
      if (_user) {
        setUser(_user)
      }
    })
  }

  useEffect(() => {
    bootstrap()
  }, [])

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AutStack />}
    </NavigationContainer>
  )
}

export default MainNavigation
