import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Sobre() {
    return (
        <View style={StyleSheet.container}>
            <Text styles={styles.Text}> Página Sobre</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alingItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});