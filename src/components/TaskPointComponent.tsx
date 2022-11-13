import { Box, Checkbox, Image, Text } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

export const TaskPointComponent = () => {
    return (
        <Box style={ styles.box }>
            <Box style={ styles.container }>
            <Checkbox value="two" accessibilityLabel={ 'one' } style={ styles.rctCheckBox } />
            <Box style={ styles.box1 }>
                <Box style={ styles.spacingA }>
                    <Text style={ styles.title }>Titulo</Text>
                    <Text style={ styles.description }>Descripcion</Text>
                </Box>
                <Box style={ styles.img }>
                    <Image source={require('../img/a.png')} alt="Alternate Text" width={39} height={35} />
                    <Text>Prioridad </Text>
                </Box>
            </Box>
        </Box>
        </Box>
      )
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 12
    },
    box1: {
        flex: 1, 
        flexDirection: 'row'
    },
    img: {
        paddingLeft: 105,
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 8,
        height: 80,
        borderWidth: 2,
        borderRadius: 12,
        borderColor: 'gray',
        paddingTop: 14,
        paddingLeft: 14,
    },
    spacingA: {
        paddingLeft: 15,
    },
    title:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    description:{
        color: 'black',
        fontSize: 17,
    },
    rctCheckBox: {
        height: 50,
        width: 50,
        borderRadius: 22,
    },

});