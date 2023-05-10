import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao'
import axios from 'axios';

const Diario = ({ route, navigation }) => {
    const [pagina, setPagina] = React.useState(null);
    const id = route.params.id;

    let url = `http://localhost:3000/paginas/${id}`;

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setPagina(response.data)
            })
            .catch((error) => {
                alert('Desculpe, deu errado.')
            });
    });

    if (!pagina) return null;

    return (
        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>{ pagina.titulo }</Text>
                <Text style={estilos.data}>{ pagina.data }</Text>
                <Text style={estilos.descricao}>{ pagina.descricao }</Text>
            </View>

            <View style={estilos.botoes}>
                <Botao titulo="Editar" />
                <Botao titulo="Apagar" />
                <Botao titulo="Voltar" acao={ () => navigation.navigate('Menu') } />
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
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
    },
});

export default Diario;