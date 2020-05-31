import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backgroundimage from '../../assets/BG.png';
import logo from '../../assets/BmgLogo.png';
import vector from '../../assets/vector.png'

export default function Home() {

  const navigation = useNavigation();

  function navigateDashboard() {
    navigation.navigate('Dashboard');
  }

  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundimage} style={styles.backimage} >
          <Image source={logo} style={styles.logo} />
          <View style={styles.intelContainer}>
            <Text style={styles.present}>Valor gasto no mês</Text>
            <Text style={styles.money}>R$ 260,15</Text>
            <Text style={styles.present}>Você ainda possui <B>14 dias</B> até o fim do mês</Text>
          </View>
            <TouchableOpacity style={styles.transButton} onPress={() => navigateDashboard()}>
              <Image source={vector} style={styles.vector}></Image>
            </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
