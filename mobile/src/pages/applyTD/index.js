import React from 'react';
import { View, Text, StatusBar, Image, TextInput, ScrollView, TouchableOpacity, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backArrow from '../../assets/arrowback1.png';

export default function ApplyTD() {

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateCompleted() {
    navigation.navigate('Completed');
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
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Quanto você quer aplicar?</Text>
              <View style={styles.inputUnity}>
                <Text style={styles.text2}>R$</Text>
                <TextInput style={styles.inputText} placeholder={'0.00'} keyboardType={'numeric'} ></TextInput>
              </View>
            </View>
            <View style={styles.buttomContainer}>
              <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateCompleted()}>
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
