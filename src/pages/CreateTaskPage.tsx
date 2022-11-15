import { Box, Button, HStack, Input, Radio, Text, VStack } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';

export const CreateTaskPage = () => {
    const [value, setValue] = useState();

  return (
    <Box style={ styles.container }>

        <VStack>
          <Box>
          <HStack space={2} h={12} mb={4} >
            <Input 
                flex={1}
                placeholder="Nombre: "
            />

          </HStack>
          </Box>
          <Text style={ styles.text }>Prioridad: </Text>
            <Radio.Group
                name="myRadioGroup"
            >
              <Radio value="a" my="1"> Sin prisa </Radio>
              <Radio value="b" my="1"> Baja </Radio>
              <Radio value="c" my="1"> Normal </Radio>
              <Radio value="d" my="1"> Alta </Radio>
              <Radio value="e" my="1"> Urgente </Radio>
            </Radio.Group>
        </VStack>
      <Box style={ styles.boxBtn } >
        <Button size="sm" variant="ghost" ><Text style={ styles.btn }>Cancelar</Text></Button>
        <Button size="sm" variant="ghost" ><Text style={ styles.btn }>Guardar</Text></Button>
      </Box>
    </Box> 
  )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    },
    boxBtn: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'space-between'
    }
});