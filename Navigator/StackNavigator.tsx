import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../src/screens/Screen1';
import { Screen2 } from '../src/screens/Screen2';


const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
    <Stack.Navigator /* initialRouteName='Pantalla2' */
    screenOptions={{
        cardStyle:{
            backgroundColor: 'white'
        },
        /* headerShown: false, */ //se quita la cabecera de navegacion
        headerStyle: {
            elevation: 10 //la separacion entre la cabecera y el cuerpo del sricpt
            
        }
    }}>
        <Stack.Screen name="Pantalla1" options={{title: ''}} component={Screen1} />
        <Stack.Screen name="Pantalla2" options={{title: ''}} component={Screen2} />
        
    </Stack.Navigator>
    );
}