import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backgroundimage from '../../assets/man.png';
import logo from '../../assets/logo-g.png';

export default function Congrats() {
  const navigation = useNavigation();

  function navigateHome() {
    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundimage} style={styles.backimage} >
          <Image source={logo} style={styles.logo} />
          <View style={styles.bottomContainer}>
            <Text style={styles.text}> Parabéns! Cadastro concluído. </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateHome()}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};
