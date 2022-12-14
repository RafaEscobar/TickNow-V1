import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Image, Text, View } from 'native-base';

export const MessageComponent = ({title}:any) => (

    <View style={ styles.container }>
        <Text style={ styles.title }> { title } </Text>
        {/* <OpenSocialComponent url={RGit} iname="logo-octocat">Jola</OpenSocialComponent> */}

    </View>
 
)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        padding: 10,
        fontSize: 25,
        color: 'black'
    }
});