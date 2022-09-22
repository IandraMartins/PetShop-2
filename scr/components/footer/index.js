import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Footer(){
return(
    
    <View style={estilo.header}>
        <Ionicons name="logo-facebook" size={30} color="white"/>
        <Ionicons name="logo-instagram" size={30} color="white" />
        <Ionicons name="logo-twitter" size={30} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor: '#40bc8e',
        width: '100%',
        height: 100,
        marginTop: 50,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',

    }

})