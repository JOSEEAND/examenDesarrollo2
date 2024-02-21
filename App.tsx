import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './src/views/index'; 
import PokemonDetail from './src/components/pokemonDetails'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
