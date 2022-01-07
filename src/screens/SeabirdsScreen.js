import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


let ITEM_WIDTH = Dimensions.get('window').width;
let ITEM_HEIGHT = Dimensions.get('window').height;

export default function SeabirdsScreen({ navigation }){
    
    return(
        <ScrollView>
            <ImageBackground blurRadius = {50} source={require("../../assets/Seabirds/worldseabirdday.jpg") } resizeMode="cover" style={styles.imageBackground}> 
            
            <View style= {styles.headerbox}>
                <Text style= {styles.textHeader}>Sea Birds</Text>
                <View style={styles.buttonBack}>
                    <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate("Species");}}>
                        <AntDesign name="arrowleft" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>  
            
            <View style ={styles.container}>      

                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 1</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 2</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 3</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 4</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 5</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 6</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 7</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 8</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity /*onPress={() => navigation.push("Whales")}*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg") }/>
                        <Text style = {styles.textSubTitle}>Seabird 9</Text>                            
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
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 32,
        flex: 1        
    },
    buttonBack: {
        alignSelf: 'flex-end',
        width: 30,
        height: 30,
        marginTop: 0,
        position: 'absolute',
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