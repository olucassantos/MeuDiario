import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Paginas
import Menu from './src/pages/Menu';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Menu" component={Menu} />
            </Pilha.Navigator>
        </NavigationContainer>
    );
}