import React, { useState } from 'react'
import { Text, Box, Heading, VStack, HStack, IconButton, CloseIcon, Checkbox, Input, AddIcon, useToast, Radio } from 'native-base'
import { StyleSheet } from 'react-native';



export const CreateHabitPage = () => {
    const [value, setValue] = React.useState('one');
    const toast = useToast();
    ////////////////////////////////////////////////
    function onChangeText(v: React.SetStateAction<string>) {
        setValue(v);
    }
    function onTaskCreated() {
        if(value != '') {
            toast.show({
                title:  value,
                status: 'success',
            });
        }
    }
////////////////////////////////////////////////

    return (
        <Box style={ styles.box }>
            <HStack space={2} h={12} mb={6} w={80} style={ styles.spaceL } >
                <Input 
                    flex={1}
                    onChangeText={ onChangeText }
                    // value={ inputValue }
                    placeholder="Nombre del proyecto: "
                />
            </HStack>
            <HStack style={ styles.spaceL }>
                <Radio.Group
                    name="myRadioGroup"
                    value={value}
                    onChange={(nextValue) => {
                        setValue(nextValue);
                        onChangeText
                    }}
                >
                    <Radio value="one" my="1">  Todos los días </Radio>
                    <Radio value="two" my="1">  Un día si y otro no </Radio>
                    <Radio value="three" my="1">  Cada dos días </Radio>
                    <Radio value="four" my="1">  De lunes a viernes </Radio>
                    <Radio value="five" my="1">  De sábado a domingo </Radio>
                </Radio.Group>
            </HStack>
            <IconButton 
                borderRadius="sm"
                variant="solid"
                icon={ <AddIcon size={4} /> }
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