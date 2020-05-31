import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import Type1 from '../../assets/type1.png';
import Type2 from '../../assets/type2.png';
import Type3 from '../../assets/type3.png';
import Type4 from '../../assets/type4.png';
import home from '../../assets/home.png';
import metas from '../../assets/metas.png';
import investir from '../../assets/investir.png';
import bell from '../../assets/bell.png';
import user from '../../assets/user.png';
import InvestBMG from '../../assets/InvestBmg.png';
import InvestBMG1 from '../../assets/InvestBmg1.png';


export default function Investments() {

  const navigation = useNavigation();

  function navigateToGoals() {
    navigation.navigate('Goals');
  }

  function navigateToHome() {
    navigation.navigate('Dashboard');
  }

  function navigateToInvestmentsTD() {
    navigation.navigate('InvestmentsTD');
  }

  const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View style={styles.header} >
            <Text style={styles.present}>Meus Investimentos</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.InvestBmg}>
          <Text style={styles.title}>Rendimentos</Text>
            <TouchableOpacity style={styles.quadroInvestBmg} activeOpacity={0.6}>
              <Image source={InvestBMG1} style={styles.quadroInvestBmg} />
            </TouchableOpacity>
          </View>
          <Text style={styles.presentGoals}>Para<Text style={styles.presentGoalsOrange}> você</Text></Text>
          <Text style={styles.explainText}>Essas são as sugestões do BMG para você</Text>
          <ScrollView style={styles.goalList} horizontal={true}>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6} onPress={() => navigateToInvestmentsTD()}>
              <Image source={Type1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={Type2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={Type3} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.GoalLast} activeOpacity={0.6}>
              <Image source={Type4} />
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.body}>
            <Text style={styles.presentGoals}>Sugestões de <Text style={styles.presentGoalsOrange}>alto risco</Text></Text>
            <Text style={styles.explainText}>Aplicações de risco alto</Text>
            <ScrollView style={styles.goalList} horizontal={true}>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={Type3} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.GoalLast} activeOpacity={0.6}>
              <Image source={Type4} />
            </TouchableOpacity>
           </ScrollView>
          </View>
          <View style={styles.body}>
            <Text style={styles.presentGoals}>Sugestões de <Text style={styles.presentGoalsOrange}>baixo risco</Text></Text>
            <Text style={styles.explainText}>Aplicações de risco baixo</Text>
            <ScrollView style={styles.goalListLast} horizontal={true}>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={Type2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.GoalLast} activeOpacity={0.6} onPress={() => navigateToInvestmentsTD()}>
              <Image source={Type1} />
            </TouchableOpacity>
           </ScrollView>
          </View>
        </ScrollView>
        {/* Menu de navegação */}
        <View style={styles.menu}>
          <View style={styles.menuObject}>
            <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => navigateToHome()}>
              <Image source={home} style={styles.menuIcon}></Image>
              <Text style={styles.menuText}>Início</Text>
            </TouchableOpacity>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => navigateToGoals()}>
                <Image source={metas} style={styles.menuIcon}></Image>
                <Text style={styles.menuText}>Metas</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuObject}>
              <TouchableOpacity style={styles.menuButton} activeOpacity={1}>
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





