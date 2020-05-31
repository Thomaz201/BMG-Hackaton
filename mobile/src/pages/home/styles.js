import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6'
  },

  backimage: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'flex-end'
  },

  logo: {
    resizeMode: 'contain',
    aspectRatio: 1.5,
    marginRight: 20,
    marginTop: 16
  },

  intelContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: 20,
    paddingRight: 70
  },

  present: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 32
  },

  money: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 32,
    marginTop: 10,
  },

  bar: {
    backgroundColor: '#79BF5A',
    maxHeight: 2,
    width: 200,
    flex: 1,
    marginRight: 10,
    marginLeft: 6,
    marginTop: 10,
    borderRadius: 5,
  },

  transButton: {
    flex: 1,
    maxHeight: 50,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25
  },

  vector: {
    resizeMode: 'contain',
    aspectRatio: 2,
  },

});

export default styles;
