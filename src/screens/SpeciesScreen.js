import React from "react";
import {View, Text, Button, ScrollView, StyleSheet, Image} from 'react-native';

export default function SpeciesScreen(){
    
    return(
        <View style ={styles.container}>
            <ScrollView>                
                <View style ={styles.item}>
                    <Text style = {styles.item}>Whales</Text>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg")}/>
                </View>
                <View style ={styles.item}>
                    <Text style = {styles.item}>Dolphins</Text>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg")}/>
                </View>
                <View style ={styles.item}>
                    <Text style = {styles.item}>Seabirds</Text>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg")}/>
                </View>
                <View style ={styles.item}>
                    <Text style = {styles.item}>Others</Text>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg")}/>
                </View>                                
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'cyan',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex:1,
        marginTop: 10,
        padding: 0,
        backgroundColor: 'pink',
        fontSize: 24,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 300,
        resizeMode: 'stretch',
        backgroundColor: 'white'
    }
})