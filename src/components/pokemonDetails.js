import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { name } = route.params;
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
          <Image source={{ uri: pokemonData.sprites.front_default }} style={{ width: 100, height: 100 }} />
          <Text>{name}</Text>
          <Text>Height: {pokemonData.height}</Text>
          <Text>Weight: {pokemonData.weight}</Text>

          <Text>Types:</Text>
          <FlatList
            data={pokemonData.types}
            keyExtractor={(item) => item.slot.toString()}
            renderItem={({ item }) => <Text>{item.type.name}</Text>}
          />

          <Text>Moves:</Text>
          <FlatList
            data={pokemonData.moves}
            keyExtractor={(item) => item.move.name}
            renderItem={({ item }) => <Text>{item.move.name}</Text>}
          />
        </React.Fragment>
      ) : (
        <Text>Aguantese un toque...</Text>
      )}
    </View>
  );
};

export default PokemonDetail;
