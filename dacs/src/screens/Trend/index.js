import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeStackScreen,PersonScreen } from '../../navigation/tabNavigation';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

export const TrendHome = () => {
   return (
      <Tab.Navigator>
        <Tab.Screen name="Trend" component={HomeStackScreen} />
        <Tab.Screen name="New" component={PersonScreen} />
      </Tab.Navigator>
    );
}
