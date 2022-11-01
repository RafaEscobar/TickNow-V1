import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'native-base'

export const AboutAppPage = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.box }>
        <Text style={styles.title}>App Info</Text>
        <Text style={ styles.text }>Versión 0.0.0</Text>
        <Text style={ styles.text }>SO requerido Android 4.1 y posteriores</Text>
        <Text style={ styles.text }>Desarrollado por ARA Projects</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    //backgroundColor: 'yellow',
    padding: 30,
  },
  title: {
    paddingTop: 10,
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
    marginBottom: 15,
  },
  
});