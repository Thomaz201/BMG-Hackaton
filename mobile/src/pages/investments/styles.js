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
    color: '#F58220',
    fontFamily: 'Lato',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 32,
    marginLeft: 16,
  },

  money: {
    color: '#FFFFFF',
    fontFamily: 'Lato',
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 32,
    marginTop: 10,
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
    paddingLeft: 10,
    marginRight: 10,
  },

  goalListLast: {
    paddingLeft: 10,
    marginRight: 10,
    marginBottom: 100,
  },

  presentGoals: {
    marginLeft: 16,
    marginTop: 5,
    paddingTop: 20,
    fontFamily: 'SF',
    fontSize: 18,
    lineHeight: 32,
    color: '#000',
    fontWeight: 'bold',
  },

  title: {
    marginLeft: 16,
    marginTop: 5,
    paddingTop: 10,
    fontFamily: 'SF',
    fontSize: 18,
    lineHeight: 32,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  presentGoalsOrange: {
    marginTop: 5,
    paddingTop: 20,
    fontFamily: 'SF',
    fontSize: 18,
    lineHeight: 32,
    color: '#F58220',
    fontWeight: 'bold',
  },

  explainText: {
    fontFamily: 'Lato',
    fontSize: 16,
    color: '#999999',
    lineHeight: 32,
    marginLeft: 16,
    marginBottom: 10
  },

  Goal1: {
    marginLeft: 7,
  },

  GoalLast: {
    marginLeft: 7,
    marginRight: 10,
  },

  header: {
    height: 60,
    justifyContent: 'center',
  },

  line: {
    backgroundColor: '#CCCCCC',
    maxHeight: 2,
    flex: 1,
    marginRight: 6,
    marginLeft: 6,
    marginTop: 10,
  },

  quadro: {
    resizeMode: "cover",
    flex: 1,
  },

  InvestBmg: {
    marginTop: 5,
    width: '100%',
  },

  quadroInvestBmg: {
    alignSelf: 'center',
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
  },



});

export default styles;
