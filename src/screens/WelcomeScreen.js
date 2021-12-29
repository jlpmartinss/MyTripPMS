import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import { color } from "react-native-elements/dist/helpers";
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

export default function SunsetScreen({ route, navigation}) {


    return (
        <ImageBackground blurRadius={5} source={require("../../assets/welcomeimage/welcome.jpg")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.container}>
                <Text style={styles.textSubTitle}>My Trip</Text>

                <Text style = {styles.text}>
                    Explore the Marine Life to learn fun facts and more about your favorite marine animals. Create your post card of yout trip and share it with friends.
                </Text>

                <TouchableOpacity style={styles.roundButton1} onPress={() => {navigation.navigate("Home")}}>
                    <Text style={styles.textButton}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textSubTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'flex-start',
        marginHorizontal: 20,
        marginTop: 100,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 5
    },
    roundButton1: {
        width: 250,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 350
    },
    imageBackground: {
        flex: 1
    },
    text: {
        marginHorizontal: 20,
        alignSelf: "flex-start",
        marginTop: 10,
        color: 'white',
        fontSize: 15
    }
})