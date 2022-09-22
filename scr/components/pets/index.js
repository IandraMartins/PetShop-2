import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Pets({ titulo, imagem}) {
    return(
        <TouchableOpacity style={estilo.containerPets}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
        </TouchableOpacity>
        
    );
}
const estilo = StyleSheet.create({
    containerPets: {
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        padding: 15,
        margin: 1,
        alignItems: "center",
        justifyContent: "space-between",
        width: 120,
        height: 100,
        marginBottom: 40,
    },
    titulo: {
        color: "grey",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20
    },
    images: {
        width: "100%",
        height: 75,
        borderRadius: '100px',
    },
});