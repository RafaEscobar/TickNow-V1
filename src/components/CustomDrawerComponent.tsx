import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export const CustomDrawerComponent = (props:any) => {
  return (
    
    <View style={{flex:1}}>
        <View style={{paddingBottom:20}}>
            <Text style={ styles.logo }>TickNow</Text>
            <Text style={ styles.fecha }>{new Date().toLocaleString()}</Text>
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </View>
        

  )
}

const styles = StyleSheet.create({
    logo: {
        //backgroundColor: 'yellow',
        paddingTop: 20,
        width: 180,
        fontSize: 40,
        left: 30,
        top: 30,
    },
    fecha:{
        fontSize: 15,
        color: 'black',
        marginTop: 30,
        left: 40,
    }
});