import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from 'react-native';

const { width } = Dimensions.get('window')

import config from '../config/config.json';

export default function Sorteio({ route, navigation }) {

  const [text, setText] = useState();
  const [number, setNumber] = useState();
  const [data, setData] = useState();

  const { item } = route.params;
  const { id } = route.params;

  async function fetchSorteados()
    {
      const response = await fetch(config.urlRoot+'read-sorteados');
      const json = await response.json();
      setData(json);
    }

  console.log(data);

  async function sendSorteado(numero_aleatorio) {
    await fetch(config.urlRoot + 'create-sorteado', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cracha_sorteado: numero_aleatorio
      })
    });
  }

  const geraNumeroAleatorio = (min, max) => {
    var numero_aleatorio = Math.random();
    min = Math.ceil(1);
    max = Math.floor(number);
    numero_aleatorio = Math.floor(numero_aleatorio * (max - min + 1)) + min;
    setText(numero_aleatorio);
    sendSorteado(numero_aleatorio);
  }

  const submitHandler = () => {
    geraNumeroAleatorio();
    //submitHandler1();
  }
  
  const submitHandler1 = () => {
    sendSorteado();
    fetchSorteados();
  }

  useEffect(() => {
    fetchSorteados();
  }, [number, text]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}> Sorteador de número</Text>
        <View style={styles.Card}>
          <Image source={require("../assets/QRCode_example.png")} style={styles.logo}></Image>
        </View>
        <Text style={styles.text}>Sorteio de um(a) {item} </Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setNumber(text)}
          placeholder="Insira aqui o nº do último crachá entregue!"
          keyboardType="numeric" />
        <TouchableOpacity
          style={styles.button}
          onPress={submitHandler}>
          <Text style={styles.buttonText}>Sortear crachá</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>Último número sorteado:</Text>
        <View style={styles.Card1}>
          <Text style={styles.text2}>
            {(text)}
          </Text>
        </View>
        <Text style={styles.text1}>Histórico de números sorteados:</Text>
        <View style={styles.Card2}>
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>{item.numero_sorteado}, </Text>
          )}
        />
        </View>
        </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    //backgroundColor: '#FFF07C',
  },
  text: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    marginTop: 30,
    fontSize: 16,
    //fontWeight: 'bold',
    textAlign: 'left',
  },
  text2: {
    //marginLeft: 10,
    fontSize: 16,
    //fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#990000",
    padding: 10,
    borderRadius: 10,
    //marginTop: 50,
  },
  Card: {
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 30,
    alignSelf: 'center',
    width: width / 3.2,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    borderRadius: 8
  },
  Card1: {
    backgroundColor: 'white',
    marginTop: 10,
    //marginBottom: 10,
    alignSelf: 'center',
    width: width / 1.1,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    borderRadius: 8
  },
  Card2: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: width / 1.1,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
