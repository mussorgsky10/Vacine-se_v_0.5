import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

import config from '../config/config.json';

export default function CadastroRecompensas() {

  const [item, setItem] = useState('');
  const [descricao, setDescricao] = useState('');

  async function sendForm() {
    await fetch(config.urlRoot + 'create-recompensa', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item: item,
        descricao: descricao
      })
    });
  }

  const submitHandler = () => {
    sendForm();
    setItem("");
    setDescricao("")
  }

  return (
    <View style={styles.container}>
      <Text>{item} {descricao} </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Nome do item'
          onChangeText={text => setItem(text)}
          maxLength= {22}
          value={item}
        />
        <TextInput
          placeholder='Descrição'
          style={styles.input}
          onChangeText={text => setDescricao(text)}
          maxLength= {22}
          value={descricao}
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
