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

  menu: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    borderTopColor: '#BEBEBE',
    borderTopWidth: 1,
  },

  menuObject: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  menuButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D1D1D1',
    height: 60,
  },

  menuText: {
    fontSize: 12,
    marginTop: 5
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

  goalsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  goalcard: {
    marginBottom: 10
  }

});

export default styles;

