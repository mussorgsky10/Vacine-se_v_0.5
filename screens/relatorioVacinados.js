import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

import config from '../config/config.json';

export default function RelatorioDeVacinados() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const sendForm = async () => {
    try {
     const response = await fetch(config.urlRoot+'read');
     const json = await response.json();
     setData(json);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

  useEffect(() => {
    sendForm();
  }, []);

  //console.log(data);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ createdAt }, index) => createdAt}
          renderItem={({ item }) => (
            <Text style={styles.text}>Id: {item.id} - {item.nome} - fone: {item.telefone}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'justify',
        fontSize: 13,
    },
});