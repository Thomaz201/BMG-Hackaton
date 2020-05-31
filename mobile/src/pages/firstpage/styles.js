import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    marginLeft: 20,
    marginBottom: 35,
  },

  headerText: {
    fontSize: 18,
    color: '#FFF',
    lineHeight: 32,
    marginTop: 420,
  },

  headerTextBold: {
    fontSize: 27,
    color: '#FFF',
    fontWeight: 'bold',
    lineHeight: 32,
  },

  backimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: 'flex-end',
  },

  body: {
    height: 178,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 345,
    height: 50,
    marginLeft: 15,
    marginTop: 24,
    backgroundColor: '#F58220',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF'
  },

  button2: {
    width: 345,
    height: 50,
    marginLeft: 15,
    marginTop: 20,
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

  logo: {
    resizeMode: 'contain',
    aspectRatio: 2.0
  },

  helpText:{
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#F58220'
  },
});

export default styles;
