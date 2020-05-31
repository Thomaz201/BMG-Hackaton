import React from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import backgroundimage from '../../assets/man.png';
import quadro from '../../assets/quadrogastos.png';
import metapc from '../../assets/metapc.png';
import home from '../../assets/home.png';
import metas from '../../assets/metas.png';
import investir from '../../assets/investir.png';
import bell from '../../assets/bell.png';
import user from '../../assets/user.png';
import Investimento from '../../assets/Investimento.png';
import Credit from '../../assets/Credit.png';
import dica1 from '../../assets/dica1.png';
import dica2 from '../../assets/dica2.png';
import dica3 from '../../assets/dica3.png';
import dica4 from '../../assets/dica4.png';

export default function Dashboard() {

  const navigation = useNavigation();

  function navigateToExtract() {
    navigation.navigate('Extract');
  }

  function navigateToGoals() {
    navigation.navigate('Goals');
  }

  function navigateToInvestments() {
    navigation.navigate('Investments');
  }

  const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View style={styles.backimage} >
            <View style={styles.intelContainer}>
              <Text style={styles.present}>Valor gasto no mês</Text>
              <Text style={styles.money}>R$ 260,15</Text>
              <Text style={styles.present}>Você ainda possui <B>14 dias</B> até o fim do mês</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.normalText}>Veja como foram seus gastos nesse mês</Text>
            <TouchableOpacity style={styles.quadroGastos} activeOpacity={0.6}>
              <Image source={quadro} style={styles.quadro} />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <TouchableOpacity style={styles.quadroGastos} activeOpacity={0.6}>
              <Image source={Investimento} style={styles.quadro} />
            </TouchableOpacity>
          </View>
          <Text style={styles.presentGoals}>Metas</Text>
          <ScrollView style={styles.goalList} horizontal={true}>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Goal1} activeOpacity={0.6}>
              <Image source={metapc} />
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.body}>
            <TouchableOpacity style={styles.quadroGastos2} activeOpacity={0.6}>
              <Image source={Credit} style={styles.quadro} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* Menu de navegação */}
        <View style={styles.menu}>
          <View style={styles.menuObject}>
            <TouchableOpacity style={styles.menuButton} activeOpacity={1}>
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
              <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => navigateToInvestments()}>
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





