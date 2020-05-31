import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';

export default function InvestmentsTD() {

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateApplyTD() {
    navigation.navigate('ApplyTD');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} activeOpacity={0.6} onPress={navigateBack}>
          <Image source={backArrow} style={styles.backlogo} />
          <Text style={styles.backText}>
            Voltar
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <ScrollView style={styles.body}>
          <Text style={styles.title}>Tesouro Direto</Text>
          <View style={styles.textContainer}>
            <Text style={styles.textContent}>    O Tesouro Direto é um dos investimentos mais populares do Brasil. Um dos motivos para isso é o fato de o programa realizar a negociação de títulos públicos, que são os títulos mais seguros do mercado. Além disso, o Tesouro Direto oferece diversas opções de títulos que podem se adequar aos seus diferentes objetivos financeiros, sejam eles de curto ou longo prazo.</Text>
            <Text style={styles.textContent}>    Tesouro Direto é um programa do Governo Federal desenvolvido em 2002 através de uma parceria entre o Tesouro Nacional e a B3 (antiga BM&FBovespa). O objetivo desse programa é facilitar o acesso de pessoas físicas à investimentos em títulos públicos através da internet.</Text>
          </View>
          <View style={styles.body2}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateApplyTD()}>
              <Text style={styles.buttonText}>Aplicar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={navigateBack}>
              <Text style={styles.loginText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
