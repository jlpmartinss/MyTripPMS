import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SpeciesScreen from './screens/SpeciesScreen';
import AddTripScreen from './screens/AddTripScreen';
import WhalesScreen from './screens/WhalesScreen';
import DolphinsScreen from './screens/DolphinsScreen';
import SeabirdsScreen from './screens/SeabirdsScreen';
import OthersScreen from './screens/OthersScreen';
import Whale1 from './screens/Whale1';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, Feather,Ionicons} from '@expo/vector-icons'
import {createStackNavigator} from '@react-navigation/stack'


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({size, color}) => <Entypo name="home" size={size} color={color}/>, }}/>
        <Tab.Screen name="Species" component={SpeciesScreen} options={{tabBarIcon: ({size, color}) => <Feather name="search" size={size} color={color}/>, }}/>
        <Tab.Screen name="Add Trip" component={AddTripScreen} options={{tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={color}/>, }}/>


        <Tab.Screen name="WhalesScreen" component={WhalesScreen}/>
        <Tab.Screen name="DolphinsScreen" component={DolphinsScreen}/>        
        <Tab.Screen name="SeabirdsScreen" component={SeabirdsScreen}/>
        <Tab.Screen name="OthersScreen" component={OthersScreen}/>        
        <Tab.Screen name="Whale1" component={Whale1}/>
      </Tab.Navigator>

  );
}
