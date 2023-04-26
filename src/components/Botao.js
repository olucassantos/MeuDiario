import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Botao = ({ titulo, acao }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={ acao }>
            <Text style={estilos.texto}>{ titulo }</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#ff1f00",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#cecece",
    },
    texto: {
        color: "#fff",
        fontSize: "1.5em",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Botao;