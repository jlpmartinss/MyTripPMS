import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import React from 'react';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import SpeciesScreen from './src/screens/SpeciesScreen';
import AddTripScreen from './src/screens/AddTripScreen';
import WhalesScreen from './src/screens/WhalesScreen';
import DolphinsScreen from './src/screens/DolphinsScreen';
import SeabirdsScreen from './src/screens/SeabirdsScreen';
import OthersScreen from './src/screens/OthersScreen';
import SelectPictureScreen from './src/screens/SelectPictureScreen';
import Whale1 from './src/screens/Whale1';
import TripListScreen from './src/screens/TripListScreen';
import WhaleWhatchingScreen from './src/screens/WhaleWatchingScreen';
import DesertasScreen from './src/screens/DesertasScreen';
import FajasScreen from './src/screens/FajasScreen';
import SunsetScreen from './src/screens/SunsetScreen';
import { AddTripScreenNavigator, HomeScreenNavigator, SpeciesScreenNavigator, PostCardNavigator, TripListScreenNavigator, EditPostCardNavigator } from './src/screens/CustomNavigation';
import { StatusBar } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

const WhalesStack = createStackNavigator();
const DolphinsStack = createStackNavigator();
const SeabirdsStack = createStackNavigator();


//bottom
const HomeStack = createStackNavigator();
const SpeciesStack = createStackNavigator();
const AddTripStack = createStackNavigator();
Test = createStackNavigator();


//Navegação default em todas as páginas (bottoms tabs)
export default () => (
    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenNavigator} options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color} /> )}}/>
        <Tab.Screen name="Species" component={SpeciesScreenNavigator} options={{tabBarIcon: ({size,color}) => (<Feather name="search" size={size} color={color} /> )}}/>
        <Tab.Screen name="Add Trip" component={AddTripScreenNavigator} options={{tabBarIcon: ({size,color}) => (<Ionicons name="add-circle" size={size} color={color} /> )}}/>
        <Tab.Screen name="TripList" component={TripListScreenNavigator} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>

      </Tab.Navigator>
    </NavigationContainer>

);