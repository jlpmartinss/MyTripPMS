import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions, ImageBackground} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from "react-native-safe-area-context";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";



let ITEM_WIDTH = Dimensions.get('window').width;

export default function SpeciesScreen({ navigation }){
    console.log("I'm in SpeciesScreen");
    
    return(
        
        <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.darkerimage}>

                
                <View style= {styles.headerbox}>
                    <Text style= {styles.textHeader}>Species</Text>
                </View>                
                    
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
            </View>
        </ImageBackground>
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
        width: ITEM_WIDTH,
        paddingTop: 0,
        padding:5,
        flex:1,
        fontSize: 20,        
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 32,
        flex:1,    
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
    textSubTitle: {
        position:'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        marginLeft: ITEM_WIDTH / 12,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    textMarine: {
        marginHorizontal: 20,
        alignSelf: "flex-start",
        color: 'white',
        fontSize: 18,
        marginTop: 20,
        lineHeight: 20
    },
    image: {
        marginTop: 15,
        flex: 1,
        width: ITEM_WIDTH / 1.1,
        height: ITEM_WIDTH / 1.5,
        borderRadius: 15,
        alignSelf: 'center'
    },
    imageBackground: {
        flex: 1,        
    },
    darkerimage: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
})