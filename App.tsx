import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Screen1 } from './src/screens/Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Navigator/StackNavigator';


  const App = () => {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
