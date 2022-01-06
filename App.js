import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
import React from 'react';

//Screens
//import { AddTripScreenNavigator, HomeScreenNavigator, SpeciesScreenNavigator, PostCardNavigator, TripListScreenNavigator, LoginScreenNavigator, EditPostCardNavigator, SelectedPictureScreenNavigator, WelcomeScreenNavigator, HomeTabs, WhalesScreenNavigator, DolphinsScreenNavigator } from './src/screens/CustomNavigation';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen.js';
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
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import PostCardPreview from './src/screens/PostCardPreview';
import PostCardEdited from './src/screens/PostCardEdited';
import Dolphin1 from './src/screens/Dolphin1';
import { HomeTabs } from './src/screens/CustomNavigation';
import EditPostCard from './src/screens/EditPostCard';
import RouteScreen from './src/screens/RouteScreen';

const Tab = createBottomTabNavigator();

const WhalesStack = createStackNavigator();
const DolphinsStack = createStackNavigator();
const Stack = createStackNavigator();


//bottom
const HomeStack = createStackNavigator();
const SpeciesStack = createStackNavigator();
const AddTripStack = createStackNavigator();
Test = createStackNavigator();


//Navegação default em todas as páginas (bottoms tabs)
export default () => (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar style='light' translucent= {false} animated={true}/>
      </SafeAreaView>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color} /> )}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color} /> )}}/>
        <Stack.Screen name="Home" component={HomeTabs} options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color} /> )}}/>
        <Stack.Screen name="Species" component={SpeciesScreen} options={{tabBarIcon: ({size,color}) => (<Feather name="search" size={size} color={color} /> )}}/>
        <Stack.Screen name="AddTrip" component={AddTripScreen} options={{tabBarIcon: ({size,color}) => (<Ionicons name="add-circle" size={size} color={color} /> )}}/>
        <Stack.Screen name="TripList" component={TripListScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="SelectedPictureScreen" component={SelectPictureScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="PostCard" component={PostCardPreview} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="EditCard" component={EditPostCard} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="PostCardEdited" component={PostCardEdited} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Whales" component={WhalesScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Dolphins" component={DolphinsScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Whale1" component={Whale1} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Dolphin1" component={Dolphin1} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="WhaleWatching" component={WhaleWhatchingScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Desertas" component={DesertasScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Fajas" component={FajasScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="Sunset" component={SunsetScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
        <Stack.Screen name="RouteScreen" component={RouteScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="location-pin" size={size} color={color} /> )}}/>
      </Stack.Navigator>
    </NavigationContainer>

);