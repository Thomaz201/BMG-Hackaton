import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';

export default function PasswordRecovery() {

  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} activeOpacity={0.6} onPress={() => navigateToLogin()}>
          <Image source={backArrow} style={styles.backlogo} />
          <Text style={styles.backText}>
            Voltar
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <ScrollView style={styles.body}>
          <Text style={styles.textBold}>Esqueceu sua senha?{"\n"}Sem problemas!</Text>
          <Text style={styles.text}>Nos diga seu e-mail de cadastro na plataforma e vamos te enviar um link para renovar a sua senha.</Text>
          <TextInput style={styles.inputText} placeholder={'BMG@BMG.com'} keyboardType={'email-address'}></TextInput>
          <TouchableOpacity style={styles.button} activeOpacity={0.6}>
              <Text style={styles.textbutton}>Recuperar senha</Text>
            </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
