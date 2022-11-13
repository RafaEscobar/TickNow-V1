import { Box, Checkbox, HStack, Text } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';

export const HabitsPointComponent = () => {
  return (
    <Box style={ styles.box }>
        <Box style={ styles.container }>
            <Checkbox value="two" accessibilityLabel={ 'one' } style={ styles.rctCheckBox } />
            <Box>
                <Box style={ styles.spacingA }>
                    <Text style={ styles.title }>Tomar lección Duolingo</Text>
                    <Text style={ styles.description }>Viernes 17 de septiembre 2022</Text>
                </Box>
                <Text style={ styles.tag }> -{'>'} Diario</Text>
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
        paddingLeft: 15,
    },
    title:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    description:{
        color: 'black',
        fontSize: 12,
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