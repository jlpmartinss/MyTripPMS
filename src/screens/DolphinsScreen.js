import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


let ITEM_WIDTH = Dimensions.get('window').width;
let ITEM_HEIGHT = Dimensions.get('window').height;

export default function DolphisScreen({ navigation }){
    
    return(
        <ScrollView>
            <ImageBackground blurRadius = {50} source={require("../../assets/586396-dophin-animals.jpg") } resizeMode="cover" style={styles.imageBackground}> 
            <View style ={styles.container}>      

                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whales")}>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/586396-dophin-animals.jpg") }/>
                        <Text style = {styles.textSubTitle}>Dolphin 1</Text>                            
                    </View>
                </TouchableOpacity>

            </View>    
            </ImageBackground>
                                 
            
             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      
    },
    item: {
        padding:5,
        flex:1,
        fontSize: 20,
        
    },
    textSubTitle: {
        position:'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    image: {
        flex: 1,
        width: ITEM_WIDTH/2.15,
        height: ITEM_WIDTH/2.15,
        backgroundColor: 'white',
        borderRadius: 15
    },
    imageBackground: {
        flex: 1
    },
})