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
    left: 30,
    top: 15,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    marginBottom: 15,
  },
  
});