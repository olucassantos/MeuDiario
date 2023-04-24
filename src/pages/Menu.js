import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao'

const Menu = () => {
    return (
        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>Meu Diário</Text>
            </View>
            <View style={estilos.botoes}>
                <Botao titulo="Novo Diário" />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    botoes: {
        flex: 2,
    },
    titulo: {
        fontSize: "3em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
    },
});

export default Menu;