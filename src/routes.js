import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SpeciesScreen from './screens/SpeciesScreen';
import AddTripScreen from './screens/AddTripScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, Feather,Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({size, color}) => <Entypo name="home" size={size} color={color}/>, }}/>
        <Tab.Screen name="Species" component={SpeciesScreen} options={{tabBarIcon: ({size, color}) => <Feather name="search" size={size} color={color}/>, }}/>
        <Tab.Screen name="Add Trip" component={AddTripScreen} options={{tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={color}/>, }}/>

      </Tab.Navigator>

  );
}
