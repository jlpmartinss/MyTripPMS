import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


let ITEM_WIDTH = Dimensions.get('window').width;

export default function SpeciesScreen({ navigation }){
    console.log("I'm in SpeciesScreen");
    
    return(
        <View style ={styles.container}>
            <ImageBackground blurRadius = {50} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")} resizeMode="cover" style={styles.imageBackground}> 
                <ScrollView> 
                    <TouchableOpacity onPress={() => navigation.navigate("Whales")}>       
                        <View style ={styles.item}>                    
                            <Image style = {styles.image} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Text style = {styles.textSubTitle}>Whales</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Dolphins")}>
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg")}/>
                                <Text style = {styles.textSubTitle}>Dolphins</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Seabirds")}>
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg")}/>
                                <Text style = {styles.textSubTitle}>Seabirds</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Others")}>
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg")}/>
                                <Text style = {styles.textSubTitle}>Others</Text>
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