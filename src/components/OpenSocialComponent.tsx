import React, { useCallback } from 'react';
import { Alert, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

export const OpenSocialComponent = ({ url, children, iname, men }:any) => {
    const handlePress = useCallback(async () => {
        // Verificamos si el enlace presenta afectivamente un patro de tipo URL
        const supported = await Linking.canOpenURL(url);
        // Si en efecto esta soportado accedemos al condicional
        if (supported) {
          // Se abre el enlace con alguna app, si correspon de a un tipo http se abrira con el navegador
          // web por default 
          await Linking.openURL(url);
        } else {
          // En caso de que no se pueda acceder al enlace se muestra una alerta con el siguiente mensaje
          Alert.alert(`No se ha podido acceder a: ${url}`);
        }
      }, [url]);
      // Se retorna un Button con dos propiedades, titulo y accion para evento: onPress
      return (
        // <Button title={children} onPress={handlePress} />
        <View style={ styles.container }>
          <TouchableOpacity
            onPress={handlePress}
          >
            <Icon name={iname} size={45} color="black" />
          </TouchableOpacity>
          <Text style={ styles.text } onPress={()=>Linking.openURL(url)}>{ men }</Text>
        </View>

      ) 
};

const styles = StyleSheet.create({

  container:{
    flexDirection: 'row',
    // // alignItems: 'center',
    backgroundColor: 'white',
    left: 30,
    top: 30,
    marginBottom: 20,
  },
  text: {
    width: '30%',
    left: 30,
    top: 9,
    fontSize: 20,
    color: 'black'
  },
  mIco: {
    left: 70,
  }

});