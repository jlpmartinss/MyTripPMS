import React, { useState } from "react";
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function AddTripScreen(){
    const [text, setText] = useState('');
    var isClicked = false;
    return(
        <View style ={styles.container}>
            <TextInput 
                style = {{padding: 10, height: 40, width: 150, margin: 15 }}
                backgroundColor = '#FFFFFF'
                //se o input for números onChangeText = {onChangeNumber} + value = {number} + keyboardType="numeric" 
                placeholder="Type Trip Code Here"
                //onSubmitEditing={text => setText(text)}
                onChangeText={text => setText (text)}
                defaultValue={text}
                    
            />  
            
            <Button
                title="Add Trip"
                //onPress={()=> alert('Button Cliked!')}
                onPress= {() => console.log(text) } 
                
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