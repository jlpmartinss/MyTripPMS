//Screens
import HomeScreen from './HomeScreen';
import { Entypo, Feather, Fontisto, Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import SpeciesScreen from './SpeciesScreen';
import AddTripScreen from './AddTripScreen';
import WhalesScreen from './WhalesScreen';
import DolphinsScreen from './DolphinsScreen';
import SeabirdsScreen from './SeabirdsScreen';
import OthersScreen from './OthersScreen';
import SelectPictureScreen from './SelectPictureScreen';
import Whale1 from './Whale1';
import Dolphin1 from './Dolphin1';
import PostCardPreviewScreen from './PostCardPreview';
import TripListScreen from './TripListScreen';
import WhaleWatchingScreen from './WhaleWatchingScreen';
import DesertasScreen from './DesertasScreen';
import FajasScreen from './FajasScreen';
import SunsetScreen from './SunsetScreen';
import EditPostCardScreen from './EditPostCard';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import RouteScreen from './RouteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';


const ITEM_HEIGHT = Dimensions.get('window').height

const Tab = createBottomTabNavigator();
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false,
            style:{
                backgroundColor: 'white',

            },
            tabBarStyle:{
                height: ITEM_HEIGHT/16
            },
            
            tabBarActiveTintColor:'#12AEB7',
            tabBarInactiveBackgroundColor: 'white',
            tabBarActiveBackgroundColor:'#EBEBEB',
            
            
        }}
    >
            <Tab.Screen
                name="My trips"
                component={HomeScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Fontisto name="sait-boat" size={30} color={color} />) }}
            />
            <Tab.Screen
                name="Species"
                component={SpeciesScreen}
                options={{ tabBarIcon: ({ size, color }) => (<MaterialCommunityIcons name="fish" size={30} color={color} />) }}
            />
            <Tab.Screen
                name="Routes"
                component={TripListScreen}
                options={{ tabBarIcon: ({ size, color }) => (<FontAwesome5 name="route" size={30} color={color} />) }}
            />



            {/* <Tab.Screen name="SelectedPictureScreen"
                component={SelectPictureScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color}/>)}} 
            />
            <Tab.Screen name="RouteScreen"
                component={RouteScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color}/>)}} 
            /> */}


        </Tab.Navigator>
    );
}
export { HomeTabs }