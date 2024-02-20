import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { style_01 } from '../styles/style_01';
import PokemonDetail from '../components/pokemonDetails'

const data = [
  { name: 'Bulbasaur', apiEndpoint: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151' },
  { name: 'Chikorita', apiEndpoint: 'https://pokeapi.co/api/v2/pokemon?offset=151&limit=100' },
  { name: 'Treecko', apiEndpoint: 'https://pokeapi.co/api/v2/pokemon?offset=251&limit=135' },
  { name: 'Turtwig', apiEndpoint: 'https://pokeapi.co/api/v2/pokemon?offset=386&limit=107' },
  { name: 'Victini', apiEndpoint: 'https://pokeapi.co/api/v2/pokemon?offset=493&limit=156' },
];

const Index = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const detailsPromises = data.map(async (item) => {
        try {
          const response = await fetch(item.apiEndpoint);
          const data = await response.json();
          const pokemonData = data.results[0]; // Tomamos solo el primer resultado
          return { name: item.name, data: pokemonData };
        } catch (error) {
          console.error(`Error al obtener datos de ${item.name}:`, error.message);
          return { name: item.name, data: null };
        }
      });

      const resolvedDetails = await Promise.all(detailsPromises);
      setPokemonDetails(resolvedDetails);
    };

    fetchData();
  }, []);

  const handleCardPress = (pokemon) => {
    navigation.navigate('PokemonDetail', { name: pokemon.name, image: pokemon.image });
  };
  
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../img/logoPM.png')} />
      </View>

      <View style={style_01.divMain}>
        <View style={style_01.divTeamsTrainer}>
          <Text style={style_01.p1}>Trainer</Text>
          <Text style={style_01.p1}>Teams</Text>
        </View>
        <Text style={style_01.h1}>First generation</Text>

        <ScrollView style={{ marginTop: 8 }}>
          {pokemonDetails.map((item) => (
            <TouchableOpacity
              style={style_01.tarjeta}
              key={item.name}
              onPress={() => handleCardPress(item)}
            >
              <Image source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.data.name}.png` }} style={{ width: 120, height: 100 }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
