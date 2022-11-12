import { Box, Button, Checkbox, CloseIcon, HStack, IconButton, Text, View } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';

const initialTasks = [
    // Cada tarea tiene un titulo y un estado
    {
        title: 'Salir a caminar',
        isCompleted: false
    },
]

export const PruebaPage = ({ navigation, route }:any) => {

        // #4 Generamos el useState
        const [task, setTask] = useState(initialTasks);

        // #7 Funcion para eliminar tarea
    function handleDelete(indexToDelete:number) {
        setTask(function(currentTasks) {
            // Retorna todas las tareas (currentTask) sin la tarea eliminada a partir de un indice asociado
            return currentTasks.filter((_, index) => index != indexToDelete );
        })
    }

    // #8 Funcion para cambiar el estado de la tarea... completado o NO completado
    function handleStatusChange(indexToChange: number) {
        // Con el estado del Task
        setTask(function(currentTask) {
            const newTask = [ ...currentTask ];
            // Esta completado al ser diferente de completado
            newTask[indexToChange].isCompleted = !newTask[indexToChange].isCompleted
            return newTask;
        })
    }

    return (
        // <View style={ styles.container }>
        //   <Text style={ styles.title }>DATA:</Text>
          
        //   <Text style={ styles.text }>{route.params.names[0]}</Text>
        //   <Text style={ styles.text }>{route.params.names[1]}</Text>
        //   <Button onPress={() => navigation.goBack()}>Regresar</Button>
        // </View>

        <Box >
            {task.map( (task, index) => (
                    // #24 HStack que contiene (checkbox, text y btnClose)
                    <HStack
                        w="100%"
                        h="25"
                        mb={ 5 }
                        justifyContent = "space-between"
                        alignItems = "center"
                        key = { route.params.names[0] }
                        style={ styles.caja }
                    >
                        
                            {/* #25 CheckBox */}
                            <Checkbox
                                // #26 Si se marca, llamar a -isCompleted-
                                isChecked={ task.isCompleted }
                                // #27 Si cambia llamar a la funcion -handleStatusChange- 
                                onChange={ () => handleStatusChange(index) }
                                // #28 El valor es igual al title o texto de la tarea
                                value={ route.params.names[0] }
                                accessibilityLabel={ route.params.names[0] }
                                style={ styles.rctCheckBox }
                            />

                            <Text
                                width = "100%"
                                flexShrink = { 1 }
                                textAlign = "left"
                                mx = "2"
                                // #29 Subrayar texto si la tarea esta completada o lo que es lo mismo si el checkbox esta marcado
                                strikeThrough = { task.isCompleted }
                                style={ styles.text }
                            >
                                {/* #30 El texto del <Text> es el title de la tarea */}
                                { route.params.names[0] }

                            </Text>
                            {/* #31 BTN para borrar tarea */}
                            <IconButton 
                                size="sm"
                                colorScheme="trueGray"
                                icon={ <CloseIcon size={6} /> }
                                // #32 Cuando es presionado llama a la funcion -handleDelete- y elimina la tarea con el indice asociado, enviado aqui
                                onPress={ () => handleDelete(index) }

                            />

                    </HStack>
                ) )}
        </Box>
    );
  }

const styles = StyleSheet.create({

    caja: {
        // backgroundColor:'yellow'
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'blue',
        padding:10
        
    },
    text: {
        fontSize: 18,
        color: 'black'
    },
    rctCheckBox: {
        height: 22,
        width: 22,
        borderRadius: 12,
    },

});





















//******************************************* */
/*
import React from 'react'
import { MessageComponent } from '../components/MessageComponent';

export const TasksScreen = () => {
  return (
    <MessageComponent title='Tareas...' />
  )
}
*/