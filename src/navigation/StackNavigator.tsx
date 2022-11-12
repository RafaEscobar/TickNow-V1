import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { PruebaPage } from '../pages/PruebaPage';
import { CreateHabitPage } from '../pages/CreateHabitPage';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
        <Stack.Navigator initialRouteName="Crear" >
          <Stack.Screen name="Crear" component={CreateHabitPage} />
          <Stack.Screen name="MyTask" component={PruebaPage} />
        </Stack.Navigator>
  )
}
