import React from 'react'
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

// #1 Importamos el -react-native-gesture-handler-
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* Llamado del DrawerNavigator */}
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
    
  )
}