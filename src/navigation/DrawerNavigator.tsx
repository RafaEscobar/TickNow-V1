import React from 'react'

// #1 Importamos el -createDrawerNavigator-
import { createDrawerNavigator } from '@react-navigation/drawer'

// #2 Importamos la Screen TabNavigator
import { TabNavigator } from './TabNavigator'

// #3 Importamos todas las pages
import { AboutAppPage } from '../pages/AboutAppPage'
import { ContactPage } from '../pages/ContactPage'
import { CreateHabitPage } from '../pages/CreateHabitPage'
import { ListPage } from '../pages/ListPage'
import { CustomDrawerComponent } from '../components/CustomDrawerComponent'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TasksScreen } from '../screens/TasksScreen'

// #4 Creamos la constante receptora de -createDrawerNavigator-
export const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const DrawerNavigator = () => {

  const Root = ({ navigation }:any) => {
    return (
      <Stack.Navigator initialRouteName="Crear" >  
      <Stack.Screen name="Crear" component={CreateHabitPage} options={{ headerShown: false }}/>
      <Stack.Screen name="MyTask" component={TasksScreen}  />
    </Stack.Navigator>
    )
}
  
  return (
    // #5 Abrimos el Drawer.Navigator
    
    <Drawer.Navigator drawerContent={props => <CustomDrawerComponent {...props} /> } >
      
      {/* #6 Generamos las SCREENS de enlaces a las pages */}
      <Drawer.Screen 
        name='Proyectos'
        component={ TabNavigator }
        options={{ headerShown: false }}  
      />
      <Drawer.Screen 
        name='Acerca de esta App' 
        component={ AboutAppPage }
      
      />
      <Drawer.Screen 
        name='Contactanos' 
        component={ ContactPage }
      
      />
      {/* ******************************************** */}
      <Drawer.Screen 
        name='Crear Habito TEST' 
        // options={{ headerShown: false }}  
        component={ Root }
      
      />
        <Drawer.Screen 
        name='Colaboradores' 
        // options={{ headerShown: false }}  
        component={ ListPage }
      
      />
    </Drawer.Navigator>
  )
}