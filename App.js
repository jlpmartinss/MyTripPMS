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



const Tab = createBottomTabNavigator();

const WhalesStack = createStackNavigator();
const DolphinsStack = createStackNavigator();
const SeabirdsStack = createStackNavigator();


//bottom
const HomeStack = createStackNavigator();
const SpeciesStack = createStackNavigator();
const AddTripStack = createStackNavigator();


//Navegação da página HomeScreen
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
     
  </HomeStack.Navigator>
)

//Navegação da página SpeciesScreen
const SpeciesStackScreen = () => (
  <SpeciesStack.Navigator >
    <SpeciesStack.Screen name="Species" component={SpeciesScreen} />
    <SpeciesStack.Screen name="Whales" component={WhaleStackScreen} />
    <SpeciesStack.Screen name="Dolphins" component={DolphinsStackScreen} />
    <SpeciesStack.Screen name="Seabirds" component={SeabirdsScreen} />
    <SpeciesStack.Screen name="Others" component={OthersScreen} />
  </SpeciesStack.Navigator>
)

//Navegação da página WhaleScreen
const WhaleStackScreen = () => (
  <WhalesStack.Navigator screenOptions={{ headerShown: false}}>
    <WhalesStack.Screen name="Species" component={WhalesScreen} />
    <WhalesStack.Screen name="Dolphins" component={DolphinsScreen} />
    <WhalesStack.Screen name="Sea Birds" component={SeabirdsScreen} />
    <WhalesStack.Screen name="Others" component={OthersScreen}  />

    
    <WhalesStack.Screen name="Whale1" component={Whale1} />
  </WhalesStack.Navigator>
)

//Navegação da página DolphinsScreen
const DolphinsStackScreen = () => (
  <DolphinsStack.Navigator screenOptions={{ headerShown: false}}>
    <DolphinsStack.Screen name="Species" component={WhalesScreen} />
    <DolphinsStack.Screen name="Dolphins" component={DolphinsScreen} />
    <DolphinsStack.Screen name="Sea Birds" component={SeabirdsScreen} />
    <DolphinsStack.Screen name="Others" component={OthersScreen}  />


    <DolphinsStack.Screen name="Whale1" component={Whale1} /*Teste Mudar para dolphin1*//>
  </DolphinsStack.Navigator>
)


//Navegação da página AddTrip
const AddTripStackScreen = () => (
  <AddTripStack.Navigator >
    <AddTripStack.Screen name="Add Trip" component={AddTripScreen} />
  </AddTripStack.Navigator>
)




//Navegação default em todas as páginas (bottoms tabs)
export default () => (
    <NavigationContainer screenOptions={{ headerShown: false}}>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{tabBarIcon: ({size,color}) => (<Entypo name="home" size={size} color={color} /> )}}/>
        <Tab.Screen name="Species" component={SpeciesStackScreen} options={{tabBarIcon: ({size,color}) => (<Feather name="search" size={size} color={color} /> )}}/>
        <Tab.Screen name="Add Trip" component={AddTripStackScreen} options={{tabBarIcon: ({size,color}) => (<Ionicons name="add-circle" size={size} color={color} /> )}}/>
      </Tab.Navigator>
    </NavigationContainer>

);