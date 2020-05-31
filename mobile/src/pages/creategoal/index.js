import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import backArrow from '../../assets/arrowback1.png';

export default function CreateGoal() {

  const navigation = useNavigation();

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToGoalCreated() {
    navigation.navigate('GoalCreated');
  }


  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <TouchableOpacity style={styles.back} activeOpacity={0.6} onPress={navigateBack}>
            <Image source={backArrow} style={styles.backlogo} />
            <Text style={styles.backText}>
              Voltar
      </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <View style={styles.body}>
            <Text style={styles.header}>Detalhes</Text>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Título da meta</Text>
              <TextInput style={styles.inputText} placeholder={'Digite aqui'} keyboardType={'default'} ></TextInput>
            </View>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Valor em R$</Text>
              <TextInput style={styles.inputText} placeholder={'X0000.00'} keyboardType={'numeric'} ></TextInput>
            </View>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Você já tem alguma quantia guardada?</Text>
              <TextInput style={styles.inputText} placeholder={'X0000.00'} keyboardType={'numeric'} ></TextInput>
            </View>
            <View style={styles.inputComponent}>
              <Text style={styles.text}>Até quando você quer alcançar essa meta?</Text>
              <TextInput style={styles.inputText} placeholder={'DD-MM-YYYY'} keyboardType={'numeric'} ></TextInput>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateToGoalCreated()}>
              <Text style={styles.textbutton}>Concluir</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}
