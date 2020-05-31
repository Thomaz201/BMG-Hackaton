import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import home from '../../assets/home.png';
import metas from '../../assets/metas.png';
import investir from '../../assets/investir.png';
import bell from '../../assets/bell.png';
import user from '../../assets/user.png';
import backArrow from '../../assets/arrowback1.png';
import meta1 from '../../assets/metaG1.png';
import meta2 from '../../assets/metaG2.png';

export default function Goals() {

  const navigation = useNavigation();

  function navigateCreateGoal() {
    navigation.navigate('CreateGoal');
  }

  function navigateBack() {
    navigation.goBack();
  }

  function navigateHome() {
    navigation.navigate('Dashboard');
  }

  function navigateInvestments() {
    navigation.navigate('Investments');
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
        <View style={styles.goalsContainer}>
          <Image style={styles.goalcard} source={meta1}></Image>
          <Image style={styles.goalcard} source={meta2}></Image>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigateCreateGoal()}>
              <Text style={styles.textbutton}>Criar nova meta</Text>
            </TouchableOpacity>
        </ScrollView>
        {/* Menu de navegação */}
        <View style={styles.menu}>
          <View style={styles.menuObject}>
            <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => navigateHome()}>
              <Image source={home} style={styles.menuIcon}></Image>
              <Text style={styles.menuText}>Início</Text>
            </TouchableOpacity>
            <View style={styles.menuObject} >
              <TouchableOpacity style={styles.menuButton}  activeOpacity={1}>
                <Image source={metas} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Metas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => navigateInvestments()}>
                <Image source={investir} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Investir</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.9}>
                <Image source={bell} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Notificações</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.9}>
                <Image source={user} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Fim Menu navegação*/}
      </SafeAreaView>
    </>
  )
}
