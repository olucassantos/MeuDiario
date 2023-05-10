import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

import Pagina from '../components/Pagina';

const ListaPaginas = () => {
    const [paginas, setPaginas] = React.useState(null);

    let url = "http://localhost:3000/paginas/";

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                // 'then' executa depois que a requisição acaba
                setPaginas(response.data);
            })
            .catch((error) => {
                // 'catch' executa quando acontece um erro
                alert('Desculpe, deu errado.');
            })
    }, []);

    if (!paginas) return null;

    const listaPaginas = paginas.map( pagina =>
        <Pagina key={pagina.id} pagina={pagina} />
    );

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Meus dias</Text>

            <View style={estilos.paginas}>
                {listaPaginas}
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
        textAlign: "center",
    },
    paginas: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        padding: 10,
    }
});

export default ListaPaginas;