import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';



const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
    <Stack.Navigator /* initialRouteName='Pantalla2' */
    screenOptions={{
        
        headerShown: false

    }}>
        <Stack.Screen name="Pantalla1" options={{title: ''}} component={Screen1} />
        <Stack.Screen name="Pantalla2" options={{title: ''}} component={Screen2} />
        
    </Stack.Navigator>
    );
}