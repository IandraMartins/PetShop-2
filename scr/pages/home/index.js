import React from 'react';
import { StyleSheet, Text, ScrollView, Image, FlatList} from 'react-native';

import Header from "../../components/cabecalho";
import Btn from "../../components/botao";
import User from "../../components/usuario";
import Pets from "../../components/pets";
import Dados from "../../components/dados";

import SeusPets from "../../../dados/Pets";
import Noticia from "../../../dados/Dados";

export default function Home() {
    return (
        <ScrollView style={{backgroundColor:'#FFFFFF', flex:1}}>
        <Header> </Header>
  
        <Btn
          Logo="cash"
          texto="Doe"
          cor="#8B008B"
  
          Logo2="paw"
          texto2="Adote"
          cor2="#8B008B"
  
          Logo3="book-outline"
          texto3="Info"
          cor3="#8B008B"
        />
        <User> </User>
  
       
  
  
        <Text style={{color:'grey',
          marginLeft:10,
          fontSize:20,
          fontWeight:'bold'}}
          >Novidades! </Text>
          <FlatList
          horizontal={false}
          data = {Noticia}
          keyExtractor= {(item) => item.id}
          renderItem = { ({item}) => (
            <Dados
              titulo = {item.nome}
              imagem = {item.imagem}
              legenda = {item.legenda}
            />
            
          )}
        />
         <Text style={{color:'grey',
          marginLeft:10,
          marginTop:15,
          fontSize:20,
          fontWeight:'bold'}}
          >Nossos Cachorros </Text>

          
        <FlatList style={styles.pets}
          horizontal={true}
          data = {SeusPets}
          keyExtractor= {(item) => item.id}
          renderItem = { ({item}) => (
            <Pets
              titulo = {item.nome}
              imagem = {item.imagem}
            />
          )}
        /> 


        {//<Footer> </Footer>
        }
  </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alingItems: 'center',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    pets:{
      marginBottom: 50,
      height: '10%',
      
    }

});