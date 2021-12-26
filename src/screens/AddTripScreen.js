import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground, Dimensions } from 'react-native';
import Data from "./../../jsons/Trips.json"

let ITEM_WIDTH = Dimensions.get('window').width;

const AddTripScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const id = '0';
    const [currentDate, setCurrentDate] = useState('');
    var isClicked = false;
    var tripTime = Data[id].fullDate;
    var dataAtual = new Date().toLocaleString();


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
            Alert.alert("Go to Home and see your Trip");
            //navigation.navigate('HomeScreen', {screen:"HomeScreen"});
        }
        else (
            console.log("Your trip is not over yet!")
        )
    }


    return (

        <ImageBackground blurRadius={3} source={require("../../assets/trip.jpg")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.container}>
                <Text style={styles.textSubTitle}>Type the code of your trip</Text>

                <TextInput
                    style={{ padding: 10, height: 40, width: 150, margin: 15 }}
                    backgroundColor='#FFFFFF'
                    //se o input for números onChangeText = {onChangeNumber} + value = {number} + keyboardType="numeric" 
                    placeholder="Type Trip Code Here"
                    //onSubmitEditing={text => setText(text)}
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <Button
                    title="Add Trip"
                    onPress={() => { checkTripTime() }}
                />
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
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 50, textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8

    },
    imageBackground: {
        flex: 1
    },

})

export default AddTripScreen