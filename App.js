import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Paginas
import Menu from './src/pages/Menu';
import NovoDiario from './src/pages/NovoDiario';
import Diario from './src/pages/Diario';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Menu" component={Menu} />
                <Pilha.Screen name="NovoDiario" component={NovoDiario} />
                <Pilha.Screen name="Diario" component={Diario} />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}