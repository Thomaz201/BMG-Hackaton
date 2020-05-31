import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  backimage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: 'flex-start',
  },

  logo: {
    resizeMode: 'contain',
    aspectRatio: 2.0,
    marginLeft: 20,
    marginTop: 16
  },

  button: {
    width: 345,
    height: 50,
    marginLeft: 15,
    marginTop: 32,
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

  text: {
    marginLeft: 15,
    fontSize: 18,
    lineHeight: 32,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 100,
  }
});

export default styles;
