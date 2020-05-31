import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';

export default function CardRegister() {

  const navigation = useNavigation();

  function navigateToCongrats() {
    navigation.navigate('Congrats');
  }

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
            Cancelar
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <ScrollView style={styles.body}>
          <Text style={styles.text}>Adicione um cartão para que o aplicativo possa ter visibilidade sobre os gastos e recursos. Lembre-se que a permissão será apenas para visualização.</Text>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Qual o CPF da conta?</Text>
            <TextInput style={styles.inputText} placeholder={'XXX.XXX.XXX-XX'} keyboardType={'numeric'} ></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Qual o número da conta?</Text>
            <TextInput style={styles.inputText} placeholder={'Número da conta'} keyboardType={'numeric'} ></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Qual a agência da conta?</Text>
            <TextInput style={styles.inputText} placeholder={'Número da Agência'} keyboardType={'numeric'} ></TextInput>
          </View>
          <View style={styles.inputComponent}>
            <Text style={styles.text}>Senha da Aplicação</Text>
            <Text style={styles.textSmall}>Essa senha permite ao BMG apenas a visualização de dados, não é possível fazer nenhuma transação em sua conta.</Text>
            <TextInput style={styles.inputText} placeholder={'Sua senha (6 números)'} keyboardType={'numeric'} secureTextEntry={true} ></TextInput>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity passwordRules={'required: digit minlength: 6 maxlength: 6'} style={styles.button} activeOpacity={0.6} onPress={() => navigateToCongrats()}>
              <Text style={styles.textbutton}>Concluir Cadastro</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
