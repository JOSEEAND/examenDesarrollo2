import { Dimensions, StyleSheet } from 'react-native';

const alto = Dimensions.get('window').height - 150;
const principal = '#1B2E66';
const naranja = '#FF9900';
const gris_1 = '#B2BDD5';
const azulClaro = '#87CEEB'; 

export const style_01 = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  divHeader: {
    backgroundColor: principal,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 130,
    marginLeft: 65,
  },
  divMain: {
    backgroundColor: gris_1,
    height: alto,
    padding: 8,
  },
  divFooter: {
    paddingTop: 5,
    backgroundColor: principal,
    alignItems: 'center',
    height: 50,
  },
  textFooter: {
    color: naranja,
    fontSize: 11,
    fontWeight: '300',
  },
  h1: {
    color: 'gray',
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    color: principal,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  p1: {
    color: principal,
    textAlign: 'justify',
    lineHeight: 17,
    fontSize: 15,
  },

  tarjeta: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  divTeamsTrainer: {
    flexDirection: 'row',
    backgroundColor: azulClaro,
    justifyContent: 'space-between',
    padding: 8,
    marginBottom: 8
  },
});
