// #1 Importamos todos aquello que vamos a usar
import React, { useState } from 'react'
// Native-Base

import { Text, Box, Heading, VStack, HStack, IconButton, CloseIcon, Checkbox, Input, AddIcon, useToast } from 'native-base'

// #2 Definimos tareas por default
const initialTasks = [
    // Cada tarea tiene un titulo y un estado
    {
        title: 'Salir a caminar',
        isCompleted: true
    },
    {
        title: 'Tomar lección de Duolingo',
        isCompleted: false
    },
]

// #3 Creamos nuestro arrowFunction
export const TaskListComponent = () => {
    // #4 Generamos el useState
    const [task, setTask] = useState(initialTasks);
    // #5 Generamos hook para manejar texto del input
    const [inputValue, setInputValue] = useState('');
    // #6 Para toast
    const toast = useToast();
    
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

    // #9 Para establecer en nuestro hook useState el texto rescatado con el input
    function onChangeText(v: React.SetStateAction<string>) {
        setInputValue(v);
    }
    
    // #10 Para crear tareas
    function onTaskCreated() {
        // #11 Si hay algo en el inputValue (osea si se ingreso alguna cosa en el input)
        if(inputValue != '') {
            // #12 Mostarmos el toast
            toast.show({
                title: 'Tarea creada',
                status: 'success',
            });
            
            // #13 Modificamos el Task, dibujando una nueva tarea con su correspondiente titulo y estado -> (title, isCompleted)
            setTask(function(currentTask) {
                return [
                    ...currentTask,
                    {
                        title: inputValue,
                        isCompleted: false
                    }
                ];
            });
        }
    }

    // #14 Lo que retornamos
    return (
        // #15 Caja general para los componentes
        <Box>
            {/* #16 Cabecera  */}
            <Heading mb="2" size="md">
                Tareas
            </Heading>
            {/* #17 HStack para caja con input y btn + */}
            <VStack>
                {/* Caja y HStack */}
                <Box>
                    <HStack space={2} h={8} mb={4} >
                        {/* #18 Input de texto */}
                        <Input 
                            flex={1}
                            // #19 Cuando se ingresa algo llamar a la funcion -onChangeText-
                            onChangeText={ onChangeText }
                            // #20 El valor del input sera aquel que este en -inputValue- del useState
                            value={ inputValue }
                            placeholder="Agregar"
                        />
                        {/* #21 BTN + */}
                        <IconButton 
                            borderRadius="sm"
                            variant="solid"
                            icon={ <AddIcon size={4} /> }
                            // #22 Cuando se presiona este btn llamar a la funcion -onTaskCreated-
                            onPress={ onTaskCreated }
                        />
                    </HStack>
                </Box>
                {/* #23 Dibujar cada tarea dadas estas propiedades */}
                {task.map( (task, index) => (
                    // #24 HStack que contiene (checkbox, text y btnClose)
                    <HStack
                        w="100%"
                        h="25"
                        mb={ 5 }
                        justifyContent = "space-between"
                        alignItems = "center"
                        key = { task.title }
                    >
                        {/* #25 CheckBox */}
                        <Checkbox
                            // #26 Si se marca, llamar a -isCompleted-
                            isChecked={ task.isCompleted }
                            // #27 Si cambia llamar a la funcion -handleStatusChange- 
                            onChange={ () => handleStatusChange(index) }
                            // #28 El valor es igual al title o texto de la tarea
                            value={ task.title }
                            accessibilityLabel={ task.title }
                        />
                        <Text
                            width = "100%"
                            flexShrink = { 1 }
                            textAlign = "left"
                            mx = "2"
                            // #29 Subrayar texto si la tarea esta completada o lo que es lo mismo si el checkbox esta marcado
                            strikeThrough = { task.isCompleted }
                        >
                            {/* #30 El texto del <Text> es el title de la tarea */}
                            { task.title }
                        </Text>
                        {/* #31 BTN para borrar tarea */}
                        <IconButton 
                            size="sm"
                            colorScheme="trueGray"
                            icon={ <CloseIcon size={4} /> }
                            // #32 Cuando es presionado llama a la funcion -handleDelete- y elimina la tarea con el indice asociado, enviado aqui
                            onPress={ () => handleDelete(index) }
                        
                        />

                    </HStack>
                ) )}
            </VStack>
        </Box>
    );
}
