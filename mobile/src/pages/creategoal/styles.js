import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    height: 2,
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

  header: {
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 32,
    color: '#F58220',

  },

  text: {
    fontSize: 16,
    fontFamily: 'SF',
    fontWeight: 'normal',
    lineHeight: 21,
    color: '#535353',
  },

  inputComponent: {
    marginTop: 25,
  },

  inputText: {
    flex: 1,
    maxHeight: 56,
    marginRight: 10,
    paddingLeft: 10,
    marginTop: 16 ,
    borderRadius: 25,
    borderStyle: 'solid',
    borderColor: '#BEBEBE',
    borderBottomWidth: 1,
  },

  button: {
    flex: 1,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 24,
    backgroundColor: '#F58220',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textbutton: {
    fontFamily: 'SF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF'
  },
});

export default styles;
