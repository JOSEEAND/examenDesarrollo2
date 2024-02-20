import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style_01 } from '../styles/style_01';

const data = [
  { name: 'Bulbasaur', image: require('../img/bulbasaur.jpeg') },
  { name: 'Chikorita', image: require('../img/chikorita.jpeg') },
  { name: 'Treecko', image: require('../img/treecko.jpeg') },
  { name: 'Turtwig', image: require('../img/turtwig2.png') },
  { name: 'Victini', image: require('../img/victinit2.png') },
];

const Index = () => {
  return (
    <View>
      <View style={style_01.divHeader}>
        <Image source={require('../img/logoPM.png')} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.p1}>Trainer</Text>
        <Text style={style_01.p1}>Teams</Text>
        <Text style={style_01.h1}>First generation</Text>

        <ScrollView style={{ marginTop: 8 }}>
          {data.map(item => (
            <View style={style_01.tarjeta} key={item.name}>
              <Text>{item.name}</Text>
              <Image source={item.image} style={{ width: 50, height: 50 }} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
