import { Box, Button, CheckIcon, Heading, HStack, Input, Radio, Select, Text, VStack } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

export const CreateProPage = () => {
    const [service, setService] = React.useState("");
  return (
    <Box style={ styles.container }>
        <VStack>
          <HStack space={2} h={12} mb={4} >
            <Input 
                flex={1}
                placeholder="Nombre del proyecto: "
                style={ styles.inputTxt }
            />
          </HStack>
          <HStack space={2} h={12} mb={4} >
            <Input 
                flex={1}
                placeholder="Descripcion: "
                style={ styles.inputTxt }
            />
          </HStack>
          <Box maxW="300">
        <Select minWidth="200" placeholder="Elije un color: " _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>  
          <Select.Item label="Azul" value="blue"  backgroundColor={'blue.200'}/>
          <Select.Item label="Gris" value="gray" backgroundColor={'gray.200'}/>
          <Select.Item label="Verde" value="green" backgroundColor={'green.200'}/>
          <Select.Item label="Naranja" value="orange" backgroundColor={'orange.200'}/>
          <Select.Item label="Amarillo" value="yellow" backgroundColor={'yellow.200'}/>

        </Select>
      </Box>
            
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
    inputTxt: {
        fontSize: 18,
    },
    b: {
      color: 'blue'
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