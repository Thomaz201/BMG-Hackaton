import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },

  intelContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    marginBottom: 20,
    marginLeft: 20
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
    height: 2,
    width: 200,
    flex: 1,
    marginRight: 10,
    marginLeft: 6,
    marginTop: 10,
    borderRadius: 5,
  },

  backimage: {
    flex: 1,
    backgroundColor: '#F58220',
  },

  normalText: {
    fontFamily: 'SF',
    fontSize: 16,
    lineHeight: 32,
    color: '#7B7B7B',
  },

  body: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
    paddingTop: 20,
  },

  quadroGastos: {
    alignSelf: 'center'
  },

  quadroGastos2: {
    alignSelf: 'center',
    marginBottom: 100,
  },

  goalList: {
    paddingLeft: 10
  },

  presentGoals: {
    marginLeft: 10,
    marginTop: 5,
    paddingTop: 20,
    fontFamily: 'SF',
    fontSize: 16,
    lineHeight: 32,
    color: '#F58220',
    fontWeight: 'bold',
  },

  Goal1: {
    marginLeft: 7,
  },

  // Menu de navegação - até menuText
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

  hintsText: {
    marginLeft: 10,
    marginTop: 5,
    paddingTop: 20,
    fontFamily: 'SF',
    fontSize: 16,
    lineHeight: 32,
    color: '#F58220',
    fontWeight: 'bold',
  },

  hintsobject: {
    marginLeft: 7,
    marginBottom: 20,

  },

  hints: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: 65
  },

  imagehint: {
    padding: 5,
  }

});

export default styles;
