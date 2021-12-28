import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground, Dimensions } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Data from "./../../jsons/Trips.json";

let ITEM_WIDTH = Dimensions.get('window').width;

const AddTripScreen = ({ route, navigation }) => {
    //const [teste,setTeste] = useState('');
    const [idTrip, setIdTrip] = useState('');
    const id = '0';
    const [currentDate, setCurrentDate] = useState('');
    var isClicked = false;
    var tripTime = Data[id].fullDate;
    var dataAtual = new Date().toLocaleString();
    //console.log(Data);


    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth()
        var year = new Date().getFullYear()
        var hours = new Date().getHours()
        var minutes = new Date().getMinutes()
        setCurrentDate(
            date + '/' + month + '/' + year + ' ' + hours + ':' + minutes
        )
    }, [])

    const checkTripTime = () => {
        console.log({ dataAtual });
        console.log({ tripTime });
        if (dataAtual > tripTime) {
            Alert.alert(idTrip);
            setData();
            //Alert.alert("Go to Home and see your Trip");
            //navigation.navigate('HomeScreen', {screen:"HomeScreen"});
        }
        else (
            console.log("Your trip is not over yet!")
        )
    }
    const setData = async () => {
        if (idTrip.length == 0 || typeof(idTrip) != 'number') {
            Alert.alert('Warning!', 'Please write your data')
        }
        else {
            try {
                await AsyncStorage.setItem('IdNewTrip', idTrip);
                navigation.navigate('Home');
            } catch (error) {
                console.log(console.error);
    
            }
        }
        
    }


    return (
        <ImageBackground blurRadius={3} source={require("../../assets/trip.jpg")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.container}>
                <Text style={styles.textSubTitle}>Type the code of your trip</Text>

                <TextInput
                    style={{ padding: 10, height: 40, width: 150, margin: 15, borderRadius: 8 }}
                    backgroundColor='#FFFFFF'
                    //se o input for números onChangeText = {onChangeNumber} + value = {number} + keyboardType="numeric" 
                    placeholder="Type Trip Code Here"
                    //onSubmitEditing={text => setText(text)}
                    onChangeText={idTrip => setIdTrip(idTrip)}
                //defaultValue={text}
                />

                <TouchableOpacity style={styles.roundButton1} onPress={() => { checkTripTime(); navigation.navigate("Home", Data[id]) }}>
                    <Text style={styles.textButton}>Add Trip</Text>
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
    textInput: {
        padding: 10, height: 40, width: 150, alignSelf: 'center'
    },
    textSubTitle: {

        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 50,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 5

    },
    textButton: {
        color: 'white',
        fontSize: 18,
    },

    imageBackground: {
        flex: 1
    },
    roundButton1: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#176cff',
        //overflow = 'hidden'
    },
})

export default AddTripScreen