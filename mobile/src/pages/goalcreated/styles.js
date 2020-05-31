import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F58220',
    justifyContent: 'space-evenly',
  },

  title: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFF',
    marginRight: 50,
    marginLeft: 50,
  },

  quadroInvestBmg: {
    alignSelf: 'center',
  },

  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  button2: {
    width: 375,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  loginText:{
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#F58220'
  },
})
