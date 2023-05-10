import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pagina = ({ pagina }) => {
    return (
        <View style={estilos.cartao}>
            <Text style={estilos.titulo}>{ pagina.titulo }</Text>
            <Text style={estilos.data}>{ pagina.data }</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        border: "1px solid #ff1f00",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        elevation: 2,
        boxShadow: "0px 2px 2px #ccc",
    },
    titulo: {
        fontSize: "1.5em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
    },
    data: {
        fontSize: "1em",
        fontFamily: "Arial",
        color: "#ff1f00",
    }
});

export default Pagina;