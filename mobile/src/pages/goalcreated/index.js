import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import CompletedImage from '../../assets/CreationGoal.png';

export default function GoalCreated() {

  const navigation = useNavigation();

  function navigateToGoals() {
    navigation.navigate('Goals');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Lembre-se sempre do seu objetivo não desista!</Text>
          <Image source={CompletedImage} style={styles.quadroInvestBmg} />
          <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => navigateToGoals()}>
            <Text style={styles.loginText}>Minhas metas</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}
