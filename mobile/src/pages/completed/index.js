import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import CompletedImage from '../../assets/Completed.png';

export default function Completed() {

  const navigation = useNavigation();

  function navigateToInvestments() {
    navigation.navigate('Investments');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>O primeiro turno do seu dinheiro começou agora!</Text>
          <Image source={CompletedImage} style={styles.quadroInvestBmg} />
          <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => navigateToInvestments()}>
            <Text style={styles.loginText}>Meus Investimentos</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
