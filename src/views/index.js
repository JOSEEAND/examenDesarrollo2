import React from 'react';
import { Image, ScrollView,  Text, View} from 'react-native';
import {style_01} from '../styles/style_01';

		const data = [
			{name:'Bulbasaur',
            image: require('../img/celebi.png')},
            {name:'Ivysaur',
            image: require('../img/turtwig.png')},
            {name:'Venusaur',
            image: require('../img/victini.png')},
            {name:'Charmander',
            image: require('../img/charender.png')},
            {name:'Charmeleon',
            image: require('../img/charmaleon.png')},
            {name:'Charizard',
            image: require('../img/charizard.png')}
		];

		const Index = () => {
			return(
				<View>
					<View style={style_01.divHeader}>
						<Image source={require('../img/logoPM.png')} />
					</View>

					<View style={style_01.divMain}>
						<Text style={style_01.p1}>Trainer</Text>
						<Text style={style_01.p1}>Teams</Text>
                        <Text style={style_01.h1}>First generation</Text>

						<ScrollView style={{marginTop:8}}>
							{data.map(item => <View style={style_01.tarjeta}>
								<Text>{item.name}</Text>
								<Text>{item.image}</Text>
							</View>)}
						</ScrollView>
					</View>
				</View>
			);
		}

export default Index;