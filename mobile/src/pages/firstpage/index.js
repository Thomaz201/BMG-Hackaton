import React, {useCallback} from 'react';
import { View, Text, StatusBar, ImageBackground, TouchableOpacity, Image, Linking, Alert } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import backgroundimage from '../../assets/BG.png';
import logo from '../../assets/BmgLogo.png';

export default function FirstPage() {

  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <TouchableOpacity title={children} style={styles.button} activeOpacity={0.6} onPress={handlePress}>
      <Text style={styles.buttonText}>Peça seu cartão</Text>
    </TouchableOpacity>
  };

  const navigation = useNavigation();



  function navigateToLogin() {
    navigation.navigate('Login');
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#000' hidden />
      <SafeAreaView style={styles.container}>
        <ImageBackground source={backgroundimage} style={styles.backimage} >
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.headerText}>
            </Text>
            <Text style={styles.headerTextBold}>
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.body}>
          <OpenURLButton url={"https://www.bancobmg.com.br/PreCadastro"}>

          </OpenURLButton>
          <TouchableOpacity style={styles.button2} activeOpacity={0.6} onPress={() => navigateToLogin()}>
            <Text style={styles.loginText}>Já tenho uma conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
