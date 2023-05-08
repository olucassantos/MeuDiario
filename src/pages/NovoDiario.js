import React, { useState } from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
import Botao from '../components/Botao';

const NovoDiario = () => {
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");

    const salvar = () => {
        // Criar uma requisão usando o axios para o servidor
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Formulário Diário</Text>

            <TextInput 
                style={estilos.campo}
                placeholder="Título"
                value={ titulo }
                onChangeText={ setTitulo }
            />

            <TextInput 
                style={estilos.campo}
                placeholder="Data"
                value={ data }
                onChangeText={ setData }
            />

            <TextInput 
                style={estilos.campo}
                placeholder='Descrição'
                multiline
                numberOfLines={ 4 }
                editable
                value={ descricao }
                onChangeText={ setDescricao }
            />

            <Botao titulo="Salvar" acao={salvar} />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20,
    },
    campo: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#cecece",
        borderRadius: 2,
        backgroundColor: "#fff"
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    }

});

export default NovoDiario;