import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { style_01 } from '../styles/style_01';
import PokemonDetail from '../components/pokemonDetails';

const generationEndpoints = [
  'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
  'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100',
  'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135',
  'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107',
  'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156',
];

const Index = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [currentGeneration, setCurrentGeneration] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(generationEndpoints[currentGeneration]);
        const data = await response.json();
        const pokemonData = data.results.map((pokemon) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
        setPokemonDetails(pokemonData);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
        setPokemonDetails([]);
      }
    };

    fetchData();
  }, [currentGeneration]);

  const handleCardPress = (pokemon) => {
    navigation.navigate('PokemonDetail', { name: pokemon.name, url: pokemon.url });
  };

  const handleGenerationChange = (generationIndex) => {
    setCurrentGeneration(generationIndex);
  };

  return (
    <View style={style_01.body}>
      <View style={style_01.divHeader}>
        <Image source={require('../img/logoPM.png')} />
      </View>

      <View style={style_01.divMain}>
        <View style={style_01.divTeamsTrainer}>
          <Text style={style_01.h1}>Generations</Text>
        </View>

        <View style={style_01.divGenerationButtons}>
          {generationEndpoints.map((endpoint, index) => (
            <TouchableOpacity
              key={index}
              style={style_01.generationButton}
              onPress={() => handleGenerationChange(index)}
            >
              <Text style={style_01.generationButtonText}>
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={{ marginTop: 8 }}>
          {pokemonDetails.map((item) => (
            <TouchableOpacity
              style={style_01.tarjeta}
              key={item.name}
              onPress={() => handleCardPress(item)}
            >
              <Image source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }} style={{ width: 120, height: 100 }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
