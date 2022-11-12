import React from 'react'
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

// #1 Importamos el -react-native-gesture-handler-
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { TaskListComponent } from './src/components/TaskListComponent';
import TestComponent from './src/components/TestComponent';
import { CreateHabitPage } from './src/pages/CreateHabitPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PruebaPage } from './src/pages/PruebaPage';
const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
    
   //////////////////
  //  <NativeBaseProvider>
  //    {/* <TaskListComponent /> */}
  //    {/* <TestComponent /> */}
  //   {/* <CreateHabitPage /> */}
  //   <NavigationContainer>

  //   {/* <HomeL /> */}
  //   </NavigationContainer>

  //  </NativeBaseProvider>
    
  )
}