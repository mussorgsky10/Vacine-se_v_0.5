import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Expo SDK 43 Barcode</Text>
      <Text style={{fontSize: 20, marginBottom: 40}}>Mount Issue Snack</Text>
       <Button
        title="Scan Barcode"
        onPress={() => navigation.navigate('Scan')}
      />
      <Text style={{padding: 30}}>Click the "Scan Barcode" button above. Test against any barcode. Then it will return you to the home screen.  Try to scan again and no barcode will be read. You must restart Expo Go to get a barcode read again and it will only work 1x.</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});