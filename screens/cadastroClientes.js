import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

import config from '../config/config.json';

export default function CadastroClientes({navigation}) {

  const [nome, setNome] = useState('');
  const [phone, setPhone] = useState('');

  async function sendForm() {
    await fetch(config.urlRoot + 'create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        telefone: phone
      })
    });
  }

  const submitHandler = () => {
    sendForm();
    setNome("");
    setPhone("")
    //navigation.navigate('Vacine-se Home')
  }

  return (
    <View style={styles.container}>
      <Text>{nome} {phone} </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Nome do Cliente'
          onChangeText={text => setNome(text)}
          maxLength= {22}
          value={nome}
        />
        <TextInput
          placeholder='Telefone'
          style={styles.input}
          keyboardType="numeric"
          onChangeText={number => setPhone(number)}
          maxLength= {22}
          value={phone}
        />
      </View>

      <TouchableOpacity
        onPress={() => submitHandler()}
        style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: width / 1.2,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    marginTop: 50,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
