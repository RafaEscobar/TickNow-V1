// #1 Importamos todos aquello que vamos a usar
import { AddIcon, Box, Heading, HStack, IconButton, Input, Radio, VStack } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
// Native-Base
const initialTasks = [
  // Cada tarea tiene un titulo y un estado
  {
      title: 'Salir a caminar',
      isCompleted: false
  },
]
export const [task, setTask] = useState(initialTasks);
// #3 Creamos nuestro arrowFunction
export const CreateHabitPage = ({ navigation: { navigate }, route }:any) => {


  const [inputValue, setInputValue] = useState('');
  // CHECKBOX
  const [value, setValue] = useState('one');

    return (
      // <View style={ styles.container }>
      //   <Text style={ styles.text } >Principal</Text>
      //   <Button
      //     onPress={() =>
      //       navigate('Review', { names: ['Alin', 'Abril', 'Rafael'] })
      //     }
      //     title="Click"
      //   />
      // </View>

      <Box>
        {/* #16 Cabecera  */}
        <Heading mb="2" size="md">
          Tareas
        </Heading>

        <VStack>
          <Box>
          <HStack space={2} h={8} mb={4} >
            {/* #18 Input de texto */}
            <Input 
                flex={1}
                // ***************************************
                onChangeText={ ( text ) => setInputValue(text) }
                // **************************************
                value={ inputValue }
                placeholder="Agregar"
            />
            {/* #21 BTN + */}
            <IconButton 
                borderRadius="sm"
                variant="solid"
                icon={ <AddIcon size={4} /> }
                // ******************************************
                onPress={() => {

                  navigate('MyTask', { names: [inputValue], aples: [value], control: false })
                }
                } 
            />
          </HStack>
          </Box>
            <Radio.Group
                name="myRadioGroup"
                // ***************************
                value={value}
                //**************************************** 
                onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Radio value="one" my="1"> One </Radio>
              <Radio value="two" my="1"> Two </Radio>
            </Radio.Group>
          </VStack>
      </Box>
    );
  }
   


const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontSize: 20, 
        marginBottom: 12,
    }

});