import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Images from "../Images";

let ITEM_WIDTH = Dimensions.get('window').width;

export default function TripListScreen({ navigation }){
    console.log("I'm in TripList Screen");
    
    return(
        <View style ={styles.container}>
            <ImageBackground blurRadius = {50} source={require("../../assets/Trips/imdesertas.jpg")} resizeMode="cover" style={styles.imageBackground}> 
                <ScrollView> 

                    <TouchableOpacity onPress={() => navigation.navigate("Cetaceans")}>       
                        <View style ={styles.item}>                    
                            <Image style = {styles.image} source={require("../../assets/Trips/imcetaceos.jpg") }/>
                                <Text style = {styles.textSubTitle}>Whale Watching</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cetaceans")}>       
                        <View style ={styles.item}>                    
                            <Image style = {styles.image} source={require("../../assets/Trips/imdesertas.jpg") }/>
                                <Text style = {styles.textSubTitle}>Desertas Island</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cetaceans")}>       
                        <View style ={styles.item}>                    
                            <Image style = {styles.image} source={require("../../assets/Trips/imfaja.jpg") }/>
                                <Text style = {styles.textSubTitle}>Fajãs</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Cetaceans")}>       
                        <View style ={styles.item}>                    
                            <Image style = {styles.image} source={require("../../assets/Trips/imsunset.jpg") }/>
                                <Text style = {styles.textSubTitle}>Sunset</Text>
                        </View>
                    </TouchableOpacity>


                    
                                            
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',      
    },
    item: {
        marginTop: 15,
        padding:5,
        flex:1,
        fontSize: 20,
        
    },
    textSubTitle: {
        position:'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 25,
        marginLeft: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    image: {
        marginTop: 15,
        marginLeft: 15,
        flex: 1,
        width: ITEM_WIDTH - 35,
        height: ITEM_WIDTH/1.5,
        borderRadius: 15,
    },
    imageBackground: {
        flex: 1
    },
})