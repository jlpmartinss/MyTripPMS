import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground, Dimensions } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
import Data from "./../../jsons/Trips.json";

let ITEM_WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = Dimensions.get('window').height

const AddTripScreen = ({ route, navigation }) => {
    //const [teste,setTeste] = useState('');
    const [idTrip, setIdTrip] = useState('');
    const id = '0';
    const [currentDate, setCurrentDate] = useState('');
    var isClicked = false;
    
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

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
    
    const checkTripTime = () => {

        if(!isEmpty(Data[idTrip])) {
            var tripTime = Data[idTrip].fullDate;
            console.log("dataatual" + dataAtual);
            console.log("tripTime:" + tripTime);
            if (dataAtual > tripTime) {
                Alert.alert(idTrip);
                setData();
                //Alert.alert("Go to Home and see your Trip");
                //navigation.navigate('HomeScreen', {screen:"HomeScreen"});
            }
            else {
                console.log("Your trip is not over yet!");
                Alert.alert("Your trip is not over yet!");   
            }
            
        }
        else {
            console.log("This trip id does not exist");
            Alert.alert("This trip id does not exist");        
        }
    }

    const setData = async () => {
        if (idTrip.length == 0 || isNaN(idTrip)){
            Alert.alert('Warning!', 'Please write your data')
        }
        else {
            try {
                var trip = {
                    Id: idTrip
                }
                await AsyncStorage.setItem('IdNewTrip',  JSON.stringify(trip));
                navigation.navigate('Home');
            } catch (error) {
                console.log(console.error);
            }
        }
    }

    return (
        <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
            <ScrollView style={styles.darkerimage}>

            <View style= {styles.headerbox}>
                <Text style= {styles.textHeader}>Add Trip</Text>
            </View> 
                <Text  style={styles.textSubTitle}> Start a Trip or {"\n"} See Your Trips </Text>

                <TextInput
                    style= {styles.textInput}
                    backgroundColor='#FFFFFF'
                    //se o input for números onChangeText = {onChangeNumber} + value = {number} + keyboardType="numeric" 
                    placeholder="Enter Your Trip Code"
                    //onSubmitEditing={text => setText(text)}
                    onChangeText={idTrip => setIdTrip(idTrip)}
                    //defaultValue={text}
                />

                <TouchableOpacity style={styles.button} onPress={() => { checkTripTime();}}>
                    <Text style={styles.textButton}>Join Trip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { setIdTrip(''); navigation.navigate("Home")}}>
                    <Text style={styles.textButton}>See My Trips</Text>
                </TouchableOpacity>
                
            </ScrollView>
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
        marginTop: 150,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 35,
        padding:8,
        flex:1        
    },
    textHeader: {
        flex:1,
        width: ITEM_WIDTH,
        position: 'absolute',
        color: 'white',
        paddingLeft:10,
        paddingBottom: 2,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 2,
        fontWeight: 'bold',
        fontSize: 22,       
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 10
    },
    imageBackground: {
        flex: 1, 
        minHeight: ITEM_HEIGHT,       
    },
    darkerimage: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    button: {
        width: ITEM_WIDTH/2,
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#12AEB7',
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10, 
        height: 40, 
        width: '50%', 
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center'
    },
})

export default AddTripScreen