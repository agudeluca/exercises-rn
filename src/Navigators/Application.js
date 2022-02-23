import React, { createContext, useCallback, useState } from 'react'
import { SafeAreaView, StatusBar, Button, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import List from '../Routes/List'
import NewTask from '../Routes/NewTask'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={List}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTask}
            options={{
              animationEnabled: true,
              headerTitle: props => <Text>{'New Task'}</Text>,
              headerRight: () => <Button title="" />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
