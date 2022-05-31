import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen'
import CourseDetails from '../screens/CourseDetails'
import Checkout from '../screens/Checkout'
import Setting from '../screens/Profile'
import WalletHome from '../screens/Wallet'
import Mycourse from '../screens/Profile/mycourse';
import Mylession from '../screens/Profile/mylession';
import Learning from '../screens/Profile/Learning';
import { TrendHome } from '../screens/Trend';
import MyGift from '../screens/Profile/MyGift';
import Help from '../screens/Profile/Help';
import Transfer from '../screens/Wallet/Transfer';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={CourseDetails} />
      <HomeStack.Screen name="checkout" component={Checkout} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

export function PersonScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Settings" component={Setting} />
      <SettingsStack.Screen name="Mycourse" component={Mycourse}/>
      <SettingsStack.Screen name="mylession" component={Mylession}/>
      <SettingsStack.Screen name="learning" component={Learning}/>
      <SettingsStack.Screen name="mygift" component={MyGift}/>
      <SettingsStack.Screen name="help" component={Help}/>
    </SettingsStack.Navigator>
  );
}


const Wallet = createNativeStackNavigator();
export function WalletScreen() {
  return(
    <Wallet.Navigator screenOptions={{headerShown: false}}>
    <Wallet.Screen name="Wallet" component={WalletHome} />
    <Wallet.Screen name="transfer" component={Transfer} />
    </Wallet.Navigator>
  )
}

const Trend = createNativeStackNavigator();
export function TrendScreen() {
  return (
    <Trend.Navigator screenOptions={{headerShown: false}}>
    <Trend.Screen name="Trend" component={TrendHome}/>
    </Trend.Navigator>
  )
}