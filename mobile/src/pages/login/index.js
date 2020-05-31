import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';

export default function Login() {

  const navigation = useNavigation();

  function navigateToFirstPage() {
    navigation.navigate('FirstPage');
  }

  function navigateHome() {
    navigation.navigate('Home');
  }

  function navigateToForgotPass() {
    navigation.navigate('PasswordRecovery');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.back} activeOpacity={0.6} onPress={() => navigateToFirstPage()}>
          <Image source={backArrow} style={styles.backlogo} />
          <Text style={styles.backText}>
            Voltar
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <ScrollView style={styles.body}>
          <View style={styles.containerinputs}>
            <Text style={styles.textBold}>Faça seu login</Text>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Qual seu e-mail?</Text>
              <TextInput style={styles.inputText} placeholder={'BMG@BMG.com'} keyboardType={'email-address'}></TextInput>
            </View>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Senha</Text>
              <TextInput passwordRules={'required: upper, required: lower, required: digit minlength: 8'} style={styles.inputText} placeholder={'Digite aqui'} keyboardType={'default'} secureTextEntry={true} ></TextInput>
              <Text style={styles.forgotText} onPress = {() => navigateToForgotPass()} >Esqueci minha senha</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateHome()}>
              <Text style={styles.textbutton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
