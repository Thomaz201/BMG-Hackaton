import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/index';
import FirstPage from './pages/firstpage/index';
import Register from './pages/register/index';
import CardRegister from './pages/cardregister/index';
import Login from './pages/login/index';
import Congrats from './pages/congrats/index';
import PasswordRecovery from './pages/passwordrecovery/index';
import Dashboard from './pages/dashboard/index';
import Goals from './pages/goals/index';
import CreateGoal from './pages/creategoal/index';
import Investments from './pages/investments/index';
import InvestmentsTD from './pages/investmentsTD/index';
import ApplyTD from './pages/applyTD/index';
import Completed from './pages/completed/index';
import GoalCreated from './pages/goalcreated/index';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='FirstPage' component={FirstPage} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='Login' component={Login} />
        <AppStack.Screen name='PasswordRecovery' component={PasswordRecovery} />
        <AppStack.Screen name='CardRegister' component={CardRegister} />
        <AppStack.Screen name='Congrats' component={Congrats} />
        <AppStack.Screen name='Home' component={Home} />
        <AppStack.Screen name='Dashboard' component={Dashboard} />
        <AppStack.Screen name='Goals' component={Goals} />
        <AppStack.Screen name='CreateGoal' component={CreateGoal} />
        <AppStack.Screen name='Investments' component={Investments} />
        <AppStack.Screen name='InvestmentsTD' component={InvestmentsTD} />
        <AppStack.Screen name='ApplyTD' component={ApplyTD} />
        <AppStack.Screen name='Completed' component={Completed} />
        <AppStack.Screen name='GoalCreated' component={GoalCreated} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
