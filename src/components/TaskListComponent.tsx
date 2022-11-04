import React, { useState } from 'react'
import { Text, Box, Heading, VStack, HStack, IconButton, CloseIcon, Checkbox, Input, AddIcon, useToast } from 'native-base'


// Definimos un estado
const initialTasks = [

    {
        title: 'Salir a caminar',
        isCompleted: true
    },
    {
        title: 'Tomar lección de Duolingo',
        isCompleted: false
    },
]

export const TaskListComponent = () => {
    // Generamos el useHook
    const [task, setTask] = useState(initialTasks);
    const [inputValue, setInputValue] = useState('');
    const toast = useToast();
    
    function handleDelete(indexToDelete:number) {
        setTask(function(currentTasks) {
            return currentTasks.filter((_, index) => index != indexToDelete );
        })
    }

    function handleStatusChange(indexToChange: number) {
        setTask(function(currentTask) {
            const newTask = [ ...currentTask ];
            newTask[indexToChange].isCompleted = !newTask[indexToChange].isCompleted
            return newTask;
        })
    }

    function onChangeText(v) {
        setInputValue(v);
    }
    
    function onTaskCreated() {

        if(inputValue != '') {
            toast.show({
                title: 'Tarea creada',
                status: 'success'
            });
            
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

    return (
        <Box>
            <Heading mb="2" size="md">
                Tareas
            </Heading>
            <VStack>

                <Box>
                    <HStack space={2} h={8} mb={4} >
                        <Input 
                            flex={1}
                            onChangeText={ onChangeText }
                            value={ inputValue }
                            placeholder="Agregar"
                        />
                        <IconButton 
                            borderRadius="sm"
                            variant="solid"
                            icon={ <AddIcon size={4} /> }
                            onPress={ onTaskCreated }
                        
                        />
                    </HStack>

                </Box>

                {task.map( (task, index) => (
                    <HStack
                        w="100%"
                        h="25"
                        mb={ 5 }
                        justifyContent = "space-between"
                        alignItems = "center"
                        key = { task.title }
                    >

                        <Checkbox 
                        
                            isChecked={ task.isCompleted }
                            onChange={ () => handleStatusChange(index) }
                            value={ task.title }
                            accessibilityLabel={ task.title }
                        />

                        <Text
                            width = "100%"
                            flexShrink = { 1 }
                            textAlign = "left"
                            mx = "2"
                            strikeThrough = { task.isCompleted }
                        >
                            { task.title }

                        </Text>
                        <IconButton 
                            size="sm"
                            colorScheme="trueGray"
                            icon={ <CloseIcon size={4} /> }
                            onPress={ () => handleDelete(index) }
                        
                        />

                    </HStack>
                ) )}
            </VStack>
        </Box>
    );
}
