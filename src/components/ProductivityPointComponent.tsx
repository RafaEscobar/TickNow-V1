import { Box, Checkbox, Text, Image } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

export const ProductivityPointComponent = () => {
    return (
        <Box style={ styles.box }>
            <Box style={ styles.container }>
                
                <Box>
                    <Image source={require('../img/cara1.png')} alt="Alternate Text" width={47} height={47} />
                </Box>
                <Box>
                    <Box style={ styles.spacingA }>
                        <Text style={ styles.title }>Viernes 17 de septiembre 2022</Text>
                        <Text style={ styles.description }>Finalice mi bootcamp</Text>
                    </Box>
                    <Text style={ styles.tag }> -{'>'} Cansado</Text>
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

    container: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 8,
        height: 80,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        paddingTop: 14,
        paddingLeft: 14,
    },
    spacingA: {
        paddingLeft: 20,
    },
    title:{
        color: 'black',
        fontSize: 12,
    },
    description:{
        color: 'black',
        fontSize: 18,
    },
    rctCheckBox: {
        height: 50,
        width: 50,
        borderRadius: 22,
    },
    tag: {
        paddingLeft: 220, 
        color: 'gray',
        fontSize: 13,
    }

});