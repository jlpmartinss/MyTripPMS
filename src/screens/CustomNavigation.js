//Screens
import HomeScreen from './HomeScreen';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons'
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, showLabel: false}}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="home" size={size} color={color} />) }}
            />
            <Tab.Screen
                name="Species"
                component={SpeciesScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Feather name="search" size={size} color={color} />) }}
            />
            <Tab.Screen
                name="AddTrip"
                component={AddTripScreen} options={{ tabBarIcon: ({ size, color }) => (<Ionicons name="add-circle" size={size} color={color} />) }}
            />
            <Tab.Screen
                name="PostCard"
                component={PostCardPreviewScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color}/>)}} 
            />
            <Tab.Screen
                name="TripList"
                component={TripListScreen} options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color} />) }}
            />
            <Tab.Screen
                name="EditCard"
                component={EditPostCardScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color}/>)}} 
            />
            <Tab.Screen name="SelectedPictureScreen"
                component={SelectPictureScreen}
                options={{ tabBarIcon: ({ size, color }) => (<Entypo name="location-pin" size={size} color={color}/>)}} 
            />
        </Tab.Navigator>
    );
}
export { HomeTabs }










// const SpeciesScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="Species"
//                 component={SpeciesScreen}
//             />
//             <Stack.Screen
//                 name="Whales"
//                 component={WhalesScreen}
//             />
//             <Stack.Screen
//                 name="Dolphins"
//                 component={DolphinsScreen}
//             />

//             <Stack.Screen
//                 name="Seabirds"
//                 component={SeabirdsScreen}
//             />
//             <Stack.Screen
//                 name="Others"
//                 component={OthersScreen}
//             />
//             <Stack.Screen
//                 name="Whale1"
//                 component={Whale1}
//             />
//             <Stack.Screen
//                 name="Dolphin1"
//                 component={Dolphin1}
//             />

//         </Stack.Navigator>
//     );
// }
// export { SpeciesScreenNavigator }

// const AddTripScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="AddTrip"
//                 component={AddTripScreen}
//             />
//         </Stack.Navigator>
//     );
// }
// export { AddTripScreenNavigator }

// const WhalesScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>

//             <Stack.Screen
//                 name="Whales"
//                 component={WhalesScreen}
//             />
//             <Stack.Screen
//                 name="Whale1"
//                 component={Whale1}
//             />

//         </Stack.Navigator>
//     );
// }
// export { WhalesScreenNavigator }

// const DolphinsScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="Dolphins"
//                 component={DolphinsScreen}
//             />
//             <Stack.Screen
//                 name="Dolphin1"
//                 component={Dolphin1}
//             />
//         </Stack.Navigator>
//     );
// }
// export { DolphinsScreenNavigator }

// const PostCardNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="PostCardPreview"
//                 component={PostCardPreviewScreen}
//             />
//             <Stack.Screen
//                 name="EditCard"
//                 component={EditPostCardScreen}
//             />
//         </Stack.Navigator>
//     );
// }
// export { PostCardNavigator }


// const TripListScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="TripList"
//                 component={TripListScreen}
//             />
//             <Stack.Screen
//                 name="WhalesWatching"
//                 component={WhaleWatchingScreen}
//             />
//             <Stack.Screen
//                 name="Desertas"
//                 component={DesertasScreen}
//             />
//             <Stack.Screen
//                 name="Faja"
//                 component={FajasScreen}
//             />
//             <Stack.Screen
//                 name="Sunset"
//                 component={SunsetScreen}
//             />

//         </Stack.Navigator>
//     );
// }
// export { TripListScreenNavigator }

// const WhalesWatchingScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="WhalesWatching"
//                 component={WhaleWatchingScreen}
//             />

//         </Stack.Navigator>
//     );
// }
// export { WhalesWatchingScreenNavigator }

// const SelectedPictureScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="SelectedPictureScreen"
//                 component={SelectPictureScreen}
//             />

//         </Stack.Navigator>
//     );
// }
// export { SelectedPictureScreenNavigator }

// const LoginScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="LoginScreen"
//                 component={LoginScreen}
//             />
//              <Stack.Screen
//                 name="Welcome"
//                 component={WelcomeScreen}
//             />
//         </Stack.Navigator>
        
//     );
// }

// export { LoginScreenNavigator }

// const WelcomeScreenNavigator = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//                 name="Welcome"
//                 component={WelcomeScreen}
//             />
//         </Stack.Navigator>
//     );
// }
// export { WelcomeScreenNavigator }



