import { Box, Checkbox, Text, Progress } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native';

export const ProyectsPointComponent = () => {
    return (
        <Box style={ styles.box }>
            <Box style={ styles.container }>
                <Box style={ styles.box1 }>
                    <Box style={ styles.box2 }>
                        <Text style={ styles.title }>Navigation de App</Text>
                        <Text style={ styles.description }>Creación de la navegacion base de la app TickNow</Text>
                    </Box>
                    <Box style={ styles.progress }>
                        <Text style={ styles.procen }>50%</Text>
                        <Progress value={45} mx="4" />
                    </Box>
                </Box>
                <Text style={ styles.tag }> -{'>'} Etiqueta</Text>
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
    box2: {
        width: 200
    },
    container: {
        width: '100%',
        marginTop: 8,
        height: 85,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'gray',
        paddingTop: 14,
        paddingLeft: 14,
    },
    progress: {
        flex: 1,
        // paddingTop: 1,
        // alignItems: 'center'
    },
    procen: {
        fontSize: 15,
        fontWeight: 'normal',
        paddingLeft: 65,
    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description:{
        color: 'black',
        fontSize: 12,
    },
    tag: {
        paddingLeft: 270, 
        color: 'gray',
        fontSize: 13,
    }

});