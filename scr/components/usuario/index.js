import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Usuario(){
return(
    
    <View style={estilo.user}>
        <Image
        style={estilo.img}
        source={require('../../imagens/user.png')}
      />
        <Text style={estilo.texto}> Olá, seja bem vindo!   </Text>
        <Ionicons name="settings" size={24} color="#8B008B"/>
    </View>

);
}
const estilo = StyleSheet.create({
    user:{
        backgroundColor:'#FFFFFF',
        borderRadius:2,
        marginTop:5,
        marginBottom:5,
        width:'99,9%',
        padding:10,
        margin:5,
        alignItems:'center',
        flexDirection:'row',
        height: '10%',

    },
    texto:{
        color:'black',
        marginLeft:5,
        fontSize:20,
        fontWeight:'bold',
        display: 'flex',
    },
    img: {
      width: 80,
      height: 80,

    },
})