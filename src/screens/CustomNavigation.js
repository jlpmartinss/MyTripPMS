//Screens
import HomeScreen from './HomeScreen';

import SpeciesScreen from './SpeciesScreen';
import AddTripScreen from './AddTripScreen';
import WhalesScreen from './WhalesScreen';
import DolphinsScreen from './DolphinsScreen';
import SeabirdsScreen from './SeabirdsScreen';
import OthersScreen from './OthersScreen';
import SelectPictureScreen from './SelectPictureScreen';
import Whale1 from './Whale1';
import Dolphin1 from './Dolphin1';
import PostCardPreview from './PostCardPreview';
import TripListScreen from './TripListScreen';
import WhaleWatchingScreen from './WhaleWatchingScreen';
import DesertasScreen from './DesertasScreen';
import FajasScreen from './FajasScreen';
import SunsetScreen from './SunsetScreen';

const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();


const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="Species"
                component={SpeciesScreen}
            />
            <Stack.Screen
                name="AddTrip"
                component={AddTripScreen}
            />
            <Stack.Screen
                name="Whale1"
                component={Whale1}
            />
            <Stack.Screen
                name="PostCard"
                component={PostCardPreview}
            />
            <Stack.Screen
                name="TripList"
                component={TripListScreen}
            />
        

        </Stack.Navigator>
    );
}
export { HomeScreenNavigator }

const SpeciesScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Species"
                component={SpeciesScreen}
            />
            <Stack.Screen
                name="Whales"
                component={WhalesScreen}
            />
             <Stack.Screen
                name="Dolphins"
                component={DolphinsScreen}
            />
            <Stack.Screen
                name="Whale1"
                component={Whale1}
            />
            <Stack.Screen
                name="Dolphin1"
                component={Dolphin1}
            />

        </Stack.Navigator>
    );
}
export { SpeciesScreenNavigator }

const AddTripScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="AddTrip"
                component={AddTripScreen}
            />
        </Stack.Navigator>
    );
}
export { AddTripScreenNavigator }

const WhalesScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="Whales"
                component={WhalesScreen}
            />
            <Stack.Screen
                name="Whale1"
                component={Whale1}
            />

        </Stack.Navigator>
    );
}
export { WhalesScreenNavigator }

const DolphinsScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Dolphins"
                component={DolphinsScreen}
            />
            <Stack.Screen
                name="Dolphin1"
                component={Whale1}
            />
        </Stack.Navigator>
    );
}
export { DolphinsScreenNavigator }

const PostCardNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="PostCardPreview"
                component={PostCardPreview}
            />
        </Stack.Navigator>
    );
}
export { PostCardNavigator }


const TripListScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TripList"
                component={TripListScreen}
            />
            <Stack.Screen
                name="WhalesWatching"
                component={WhaleWatchingScreen}
            />
            <Stack.Screen
                name="Desertas"
                component={DesertasScreen}
            />
             <Stack.Screen
                name="Faja"
                component={FajasScreen}
            />
            <Stack.Screen
                name="Sunset"
                component={SunsetScreen}
            />
            
            
        </Stack.Navigator>
    );
}
export { TripListScreenNavigator }

const WhalesWatchingScreenNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="WhalesWatching"
                component={WhaleWatchingScreen}
            />
           
        </Stack.Navigator>
    );
}
export { WhalesWatchingScreenNavigator }


