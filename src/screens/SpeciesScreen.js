import React from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

export default function SpeciesScreen(){
    return(
        <View style ={styles.container}>
            <Text> Species Screen </Text>
            <Button
                title="Click here"
                onPress={()=> alert('Button Cliked!')}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})