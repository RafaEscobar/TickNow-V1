import React from 'react'
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

// #1 Importamos el -react-native-gesture-handler-
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { TaskListComponent } from './src/components/TaskListComponent';
import TestComponent from './src/components/TestComponent';
import { CreateHabitPage } from './src/pages/CreateHabitPage';


export const App = () => {
  return (
    /*
    <NativeBaseProvider>
      <NavigationContainer>

        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
    */
   <NativeBaseProvider>
     {/* <TaskListComponent /> */}
     {/* <TestComponent /> */}
    <CreateHabitPage />
   </NativeBaseProvider>
    
  )
}