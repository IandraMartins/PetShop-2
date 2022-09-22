import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";


export default function AUMIGO({imagem}){
    return(
        
        <TouchableOpacity style={estilo.containerLancamento}>
    
            <Image style={estilo.images} source ={require(`../../imagens/${imagem}`)} />
            
        </TouchableOpacity>
    
    );
    }
    const estilo = StyleSheet.create({
    
        containerLancamento:{
            borderRadius:10,
            marginTop:8,
            padding:10,
            margin:2,
            alignItems:'center',
            marginLeft:8
        },
    
        images:{
          width:380,
          height:400,
          borderRadius:12,      
        }
    }
    
    )