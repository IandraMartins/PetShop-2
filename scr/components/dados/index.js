import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Pets({ titulo, legenda, imagem}) {
    return(
        <TouchableOpacity style={estilo.containerPets}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.legenda}>{legenda}</Text>
        </TouchableOpacity>
        
    );
}
const estilo = StyleSheet.create({
    containerPets: {
        backgroundColor: "#DCDCDC",
        marginTop: 15,
        padding: 10,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: 350,
        height: 445,
        marginBottom: 10,
        borderRadius: 10,
    },
    titulo: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    legenda: {
        color: "#696969",
        fontSize: 17,
        marginBottom: 5,
    },
    images: {
        width: "100%",
        height: 250,
        borderRadius: 10,
    },
});