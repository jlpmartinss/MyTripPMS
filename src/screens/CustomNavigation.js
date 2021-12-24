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
                name="Whale1"
                component={Whale1}
            />
        </Stack.Navigator>
    );
}
export { DolphinsScreenNavigator }



