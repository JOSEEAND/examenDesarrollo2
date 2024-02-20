import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style_01 } from '../styles/style_01';

const data = [
  { name: 'Bulbasaur', image: require('../img/bulbasaur.jpeg') },
  { name: 'Ivysaur', image: require('../img/ivisaur.jpeg') },
  { name: 'Venusaur', image: require('../img/venusaur.jpeg') },
  { name: 'Charmander', image: require('../img/charender.png') },
  { name: 'Charmeleon', image: require('../img/charmaleon.png') },
  { name: 'Charizard', image: require('../img/charizard.png') }
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
