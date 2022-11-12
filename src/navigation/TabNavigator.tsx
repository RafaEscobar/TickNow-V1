import React from 'react'

// #1 Agregamos la importación de -createBottomTabNavigator-
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// #2 Importamos todas nuestras Screens
import { ProyectsScreen } from '../screens/ProyectsScreen';
import { HabitsScreen } from '../screens/HabitsScreen';
import { TasksScreen } from '../screens/TasksScreen';
import { PointsScreen } from '../screens/PointsScreen';
// #3 Importamos el lugar de extracción de los iconos
import Icon from 'react-native-vector-icons/Ionicons';

// #11 Importamos hook -useNavigation-
import { useNavigation } from '@react-navigation/native';
// #12 Importamos el -DrawerActions- para poder llamar manualmente* al Drawer
import { DrawerActions } from '@react-navigation/native';
// #13 Importamos el btn -TouchableOpacity- que ejecutara la accion de llamar al Drawer 
import { TouchableOpacity } from 'react-native';

// #4 Creamos la constante receptora de -createBottomTabNavigator-
const Tab = createBottomTabNavigator();

export const TabNavigator = ({ navigation }:any) => {
  // #14 Declaramos la constante de control pare el -useNavigation-
  const navigatio = useNavigation();
  return (
    // #5 Abrimos el Tab.Navigator
    <Tab.Navigator 
    // #6 Creanos el atributo screenOptions
    screenOptions={ ({ route }) => ({
      // #7 Se genera la pripiedad tabBarIcon con una arrowFunction
      tabBarIcon: ({ focused, color, size }) => {
        // #8 Se crea variable que alamcena el nombre del Icono en cuestion
        let nameIcon='';
        // #9 Generamos un switch que, en base al nombre rescatado de la screen, establece un nombre de icono u otro
        switch(route.name){
          case 'ProyectosTab':
            nameIcon= focused ? 'create' : 'create-outline';
          break;
          case 'Habitos':
            nameIcon= focused ? 'trophy' : 'trophy-outline';
          break;
          case 'Tareas':
            nameIcon= focused ? 'checkmark-circle' : 'checkmark-circle-outline';
          break;
          case 'Productividad':
            nameIcon= focused ? 'stats-chart' : 'stats-chart-outline';
          break;
          case 'Agregar':
            nameIcon = 'add-sharp';
          break;
        }
        return <Icon name={nameIcon} color={ color } size={ size } />
      }
    })}
    
    >
      {/* #10 Generamos las Screens */}
        {/* Screen Proyectos */}
      <Tab.Screen 
        name='ProyectosTab' 
        component={ ProyectsScreen } 
        options={{
          tabBarLabel: "Proyectos",
          title: 'Proyectos',
          headerShown: true,
          // #15 Declaramos la propiedad -headerLeft- para retornar "algo" del lado derecho EN la cabecera
          headerLeft: () => {
            return (
              // #16 Generamos el -TouchableOpacity- el cual en el evento -onPress- llamara por medio de la constante al DrawerActions.openDrawer
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                {/* #17 Construimos nuestro icono para el btn del Drawer */}
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }} 
      /> 
        {/* Screen Habitos */}
      <Tab.Screen 
        name='Habitos' 
        
        component={ HabitsScreen } 
        options={{
          tabBarLabel: 'Hábitos',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
        {/* Screen Add */}

        {/* Screen Tareas */}
      <Tab.Screen 
        name='Tareas' 
        component={ TasksScreen } 
        options={{
          tabBarLabel: 'Tareas',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />
        {/* Screen Productividad */}
      <Tab.Screen 
        name='Productividad' 
        component={ PointsScreen } 
        options={{
          tabBarLabel: 'Productividad',
          headerShown: true,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={()=>navigatio.dispatch(DrawerActions.openDrawer)}>
                <Icon name='reorder-three' color='dark' size={ 30 } style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            );
          },
        }}
      />

    </Tab.Navigator>
  )
}