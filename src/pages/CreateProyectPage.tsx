import { Box, Button, Heading, HStack, Input, Radio, Slider, Text, VStack } from 'native-base';
import React from 'react'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { background } from 'native-base/lib/typescript/theme/styled-system';

export const CreateProyectPage = () => {
    const [val, setVal] = useState(0);

  return (
      <Box style={ styles.container }>
        <Heading mb="2" size="md">
          Nombre del proyecto
        </Heading>

        <VStack>
          <Box>
            <Text style={ styles.text }>{ val }%</Text>
            <HStack>
            <Slider defaultValue={val} colorScheme="blue" size="md" value={val}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </HStack>
            <Box style={ styles.boxBtn }>
                <Button variant="outline" colorScheme="danger" style={ styles.btn } onPress={ () => setVal(val-1) }><Text style={ styles.btnTxt }>-</Text></Button>
                <Button variant="outline" colorScheme="black" style={ styles.btn } onPress={ () => setVal(val+1) }><Text style={ styles.btnTxt }>+</Text></Button>
            </Box>
          </Box>
        </VStack>
      </Box>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
    },
    btn: {
        width: 40,
        height: 37,
        margin: 2,
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 23,
    },
    boxBtn: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 30,
    },
    text: {
        paddingTop: 14,
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

});