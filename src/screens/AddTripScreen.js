import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import Data from "./../../jsons/Trips.json"

const AddTripScreen = ({navigation}) => {
    const [text, setText] = useState('');
    const id = '0';
    const [currentDate, setCurrentDate] = useState('');
    var isClicked = false;
    var tripTime = Data[id].hours.toString();
    var dataAtual = new Date().toLocaleString()

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
        if (dataAtual > tripTime) {
            Alert.alert("Go to Home and see your Trip");
            //navigation.navigate('HomeScreen', {screen:"HomeScreen"});
        }
        else (
            console.log("Your trip is not over yet!")
        )
    }


    return (
        <View style={styles.container}>
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
            <Text>  you wrote {text} in textbox </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
})

export default AddTripScreen