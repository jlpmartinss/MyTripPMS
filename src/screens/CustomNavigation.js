//Screens
import HomeScreen from "./HomeScreen";
import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import SpeciesScreen from "./SpeciesScreen";

import TripListScreen from "./TripListScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";

const ITEM_HEIGHT = Dimensions.get("window").height;

const Tab = createBottomTabNavigator();
const { createStackNavigator } = require("@react-navigation/stack");

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        showLabel: false,
        style: {
          backgroundColor: "white",
        },
        tabBarStyle: {
          height: ITEM_HEIGHT / 16,
        },

        tabBarActiveTintColor: "#12AEB7",
        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "#EBEBEB",
      }}
    >
      <Tab.Screen
        name="My trips"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Fontisto name="sait-boat" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Species"
        component={SpeciesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="fish" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Routes"
        component={TripListScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="route" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export { HomeTabs };
