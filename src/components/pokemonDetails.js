import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { name } = route.params;
  console.log('Nombre del Pokémon:', name);

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error(`Error al obtener datos de ${name}:`, error.message);
      }
    };

    fetchPokemonData();
  }, [name]);

  return (
    <View>
      {pokemonData ? (
        <React.Fragment>
          <View style={{ backgroundColor: '#ffff34', padding: 16, borderRadius: 5, marginBottom: 16 }}>
            <Image source={{ uri: pokemonData.sprites.front_default }} style={{ width: 100, height: 100 }} />
            <Text>{name}</Text>
            <Text>Height: {pokemonData.height}</Text>
            <Text>Weight: {pokemonData.weight}</Text>
          </View>

          <View style={{ backgroundColor: '#ffff34', padding: 16, borderRadius: 5, marginBottom: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Type to Belong</Text>
            <FlatList
              data={pokemonData.types}
              keyExtractor={(item) => item.slot.toString()}
              renderItem={({ item }) => <Text>{item.type.name}</Text>}
            />
          </View>

          <View style={{ backgroundColor: '#ffff34', padding: 16, borderRadius: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Moves</Text>
            <FlatList
              data={pokemonData.moves}
              keyExtractor={(item) => item.move.name}
              renderItem={({ item }) => <Text>{item.move.name}</Text>}
            />
          </View>
        </React.Fragment>
      ) : (
        <Text>Aguantese un toque...</Text>
      )}
    </View>
  );
};

export default PokemonDetail;
