// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Telas
import HomeScreen from './src/screens/HomeScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import TatuagensScreen from './src/screens/TatuagensScreen';
import PiercingScreen from './src/screens/PiercingScreen';
import DetailScreen from './src/screens/DetailScreen';
import { ActionButton } from './src/components/ActionButton';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{ title: 'Portfólio' }}
        />
        <Stack.Screen
          name="Tatuagens"
          component={TatuagensScreen}
          options={{ title: 'Tatuagens' }}
        />
        <Stack.Screen
          name="Piercings"
          component={PiercingScreen}
          options={{ title: 'Piercings' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;