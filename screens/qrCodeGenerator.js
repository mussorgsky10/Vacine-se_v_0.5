import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
} from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import QRCode from 'react-native-qrcode-svg';

export default function QrCodeGenerator() {
  const [selectedPrinter, setSelectedPrinter] = useState();
  const [inputText, setInputText] = useState('');
  const [qrValue, setQrValue] = useState('');

  const html = `
<html style="height: 100%;">
<head><meta name="viewport" content="width=device-width, minimum-scale=0.1"><title>create-qr-code (250×250)</title></head>
<body style="margin: 0px; background: #255e255e255e; height: 100%">
<img style="-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&amp;amp;size=100x100">
</body>
</html>
`;

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({
      html,
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerQr}>
        <QRCode
          value={qrValue ? qrValue : 'NA'}
          size={120}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.text}>
          Insira o numero do crachá que deseja gerar:
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
          keyboardType={'numeric'}
        />
        <View style={{ marginHorizontal: 50 }}>
          <Button onPress={() => setQrValue(inputText)} title="Gerar QR Code" />
        </View>
      </View>
      <Button title="Imprimir" onPress={print} />
      <View style={styles.spacer} />
      <Button title="Compartilhar / Salvar PDF" onPress={printToFile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    padding: 8,
  },
  containerQr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
  },
  textInput: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
  spacer: {
    height: 8,
  },
});
