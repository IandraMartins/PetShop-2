import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

import Adote from "../../../dados/Aumigo";
import Aumigo from "../../components/aumigo";

export default function Caes() {
    return (
        <View style={styles.container}>
            <Text style={{color:'black',
          marginLeft:50,
          fontSize:40,
          fontWeight:'bold',
          textAlign: 'center'}}
          >Lançamentos </Text>
  
        <FlatList
          horizontal={true}
          data = {Adote}
          keyExtractor= {(item) => item.id}
          renderItem = { ({item}) => (
            <Aumigo
              titulo = {item.nome}
              imagem = {item.imagem}
              espaço = {item.espaço}
              idade = {item.idade}
              raça = {item.raça}
              temperamento = {item.temperamento}
              tamanho = {item.tamanho}
              castrado = {item.castrado}
              vacinado = {item.vacinado}
            />
          )}
          
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alingItems: 'center',
        backgroundColor: 'white',

    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});