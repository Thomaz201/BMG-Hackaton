import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, CheckBox } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';
import pin from '../../assets/bolinha.png';

export default function Register() {

  const navigation = useNavigation();

  function navigateToCardRegister() {
    navigation.navigate('CardRegister');
  }

  function navigateToCongrats() {
    navigation.navigate('Congrats');
  }

  function navigateBack() {
    navigation.goBack();
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
          <Text style={styles.text}>Olá, seja bem vindo(a) ao BMG.</Text>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Como posso te chamar?</Text>
            <TextInput style={styles.inputText} placeholder={'Digite aqui'} keyboardType={'default'} ></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Qual seu e-mail?</Text>
            <TextInput style={styles.inputText} placeholder={'BMG@BMG.com'} keyboardType={'email-address'}></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Senha</Text>
            <TextInput passwordRules={'required: upper, required: lower, required: digit minlength: 8'} style={styles.inputText} placeholder={'Digite aqui'} keyboardType={'default'} secureTextEntry={true} ></TextInput>
            <View style={styles.unitsubtitle}>
              <Image source={pin} style={styles.bullet} />
              <Text style={styles.passwordsubtitle}>Precisa ter ao menos 8 caracters</Text>
            </View>
            <View style={styles.unitsubtitle}>
              <Image source={pin} style={styles.bullet} />
              <Text style={styles.passwordsubtitle}>Precisa ter ao menos 1 número</Text>
            </View>
            <View style={styles.unitsubtitle}>
              <Image source={pin} style={styles.bullet} />
              <Text style={styles.passwordsubtitle}>Precisa ter ao menos 1 letra maiúscula</Text>
            </View>
            <View style={styles.checked}>
              <CheckBox />
              <Text style={styles.text}>Aceito os TERMOS & CONDIÇÕES</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateToCardRegister()}>
              <Text style={styles.textbutton}>Concluir e Cadastrar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => navigateToCongrats()}>
              <Text style={styles.textbutton2}>Adicionar a conta depois</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
