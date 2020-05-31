import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F2'
  },

  back: {
    flex: 1,
    maxWidth: 100,
    maxHeight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },

  backlogo: {
    resizeMode: 'contain',
    aspectRatio: 0.05,
  },

  backText: {
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#535353',
    marginLeft: 6,
    flex: 1,
  },

  line: {
    backgroundColor: '#F58220',
    maxHeight: 2,
    flex: 1,
    marginRight: 6,
    marginLeft: 6,
    marginTop: 10,
  },

  body: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
    paddingTop: 20,
  },

  body2: {
    flex: 1,
    marginLeft: 10,
    paddingTop: 10,
  },

  title: {
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    marginLeft: 16,
    color: '#F58220',
  },

  textContent: {
    fontFamily: 'Lato',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 32,
    marginLeft: 16,
    color: '#000',
  },

  textContainer: {
    marginTop: 16,
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
});
