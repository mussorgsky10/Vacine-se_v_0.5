import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Clientes from './screens/clientes'
import CadastroClientes from './screens/cadastroClientes'
import CadastroRecompensas from './screens/cadastroRecompensas'
import RecompensaScreen from './screens/recompensas'
import QrCodeGenerator from './screens/qrCodeGenerator'
import RelatorioCrachasEmUso from './screens/relatorioCrachasEmUso'
import RelatorioDeVacinados from './screens/relatorioVacinados';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

function HomeScreen({ navigation }) {
  return (
    <>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Cadastro de Vacinados');
      }} style={styles.card}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>   Cadastro de Pessoas Vacinadas</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Clientes');
      }} style={styles.card}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>                Atribuir crachá</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Recompensas');
      }} style={styles.card}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>                Sortear Prenda</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Vacine-se Home">
        <Drawer.Screen name="Vacine-se Home" component={HomeScreen} />
        <Drawer.Screen name="Cadastro de Vacinados" component={CadastroClientes} />
        <Drawer.Screen name="Clientes" component={Clientes} />
        <Drawer.Screen name="Cadastro de Recompensas" component={CadastroRecompensas} />
        <Drawer.Screen name="Recompensas" component={RecompensaScreen} />
        <Drawer.Screen name="Gerador de QrCode" component={QrCodeGenerator} />
        <Drawer.Screen name="Relatório de crachas em uso" component={RelatorioCrachasEmUso} />
        <Drawer.Screen name="Relatório de Vacinados" component={RelatorioDeVacinados} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9F9F9',
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
    width: width / 1.1,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    borderRadius: 8,
    flexDirection: 'row',
    height: height / 3.6,
  },
  itemInfo: {
    marginLeft: 0,
    alignSelf: 'center',
    alignContent: 'space-around'
  },
  itemP1: {
    fontSize: 22,
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center'
  },
  itemP2: {
    fontSize: 18,
    color: 'black',
  },
});