// #1 Importamos todos aquello que vamos a usar
// Para Radio Button
import React, { useState } from 'react';
// Native-Base
import { Box, HStack, IconButton, Input, AddIcon, useToast, Radio } from 'native-base'
// Estilos
import { StyleSheet } from 'react-native';

// #2 Creamos nuestro arrowFunction
export const CreateHabitPage = () => {
    // #3 Inicializador para Radio Button 
    const [value, setValue] = React.useState('one');
    // #4 Para alerta toat
    const toast = useToast();
    ////////////////////////////////////////////////
    // #5 Rescate de valor en texto de los Radio Button
    function onChangeText(v: React.SetStateAction<string>) {
        // setValue de nuestro hook
        setValue(v);
    }
    // #6 Lanzamiento del toast
    function onTaskCreated() {
        // #7 Condicional -si esta vacio el value-
        if(value != '') {
            // Mostrar toast
            toast.show({
                title:  value,
                status: 'success',
            });
        }
    }
////////////////////////////////////////////////
    // #8 Return
    return (
        // #9 Caja general para Page
        <Box style={ styles.box }>
            {/* #10 HStack para input -only- */}
            <HStack space={2} h={12} mb={6} w={80} style={ styles.spaceL } >
                {/* #11 Input text */}
                <Input 
                    flex={1}
                    placeholder="Nombre del proyecto: "
                />
            </HStack>
            {/* #12 HStack para Radio Button -only- */}
            <HStack style={ styles.spaceL }>
                {/* #13 Radio Button */}
                <Radio.Group
                    name="myRadioGroup"
                    // Value de nuestro hook
                    value={value}
                    // Si un Radio Button es seleccionado actualizar el setValue del hook al valor que se le rescate a dicho Radio Button seleccionado
                    onChange={(nextValue) => {
                        setValue(nextValue);
                        onChangeText
                    }}
                >
                    {/* #14 Todos los Radio Buttons, con values diferentes */}
                    <Radio value="one" my="1">  Todos los días </Radio>
                    <Radio value="two" my="1">  Un día si y otro no </Radio>
                    <Radio value="three" my="1">  Cada dos días </Radio>
                    <Radio value="four" my="1">  De lunes a viernes </Radio>
                    <Radio value="five" my="1">  De sábado a domingo </Radio>
                </Radio.Group>
            </HStack>
            {/* #15 BTN + */}
            <IconButton 
                borderRadius="sm"
                variant="solid"
                icon={ <AddIcon size={4} /> }
                // Cuando es presionado dispara el evento del toast
                onPress={ onTaskCreated }   
            />
        </Box>
    );
}

const styles = StyleSheet.create({

    box: {

        // justifyContent: 'center',
        flex: 1,
        // backgroundColor: 'yellow'
    },
    spaceL: {
        marginLeft: 30,
    },
     

});