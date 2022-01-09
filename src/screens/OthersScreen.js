import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


let ITEM_WIDTH = Dimensions.get('window').width;
let ITEM_HEIGHT = Dimensions.get('window').height;

export default function OthersScreen({ navigation }){
    
    return(
        <ScrollView>
            
            <ImageBackground blurRadius = {50} source={require("../../assets/Others/1Others.jpg") } resizeMode="cover" style={styles.imageBackground}> 
            
                <View style= {styles.headerbox}>
                    <Text style= {styles.textHeader}>Others</Text>
                    <View style={styles.buttonBack}>
                        <TouchableOpacity style={styles.icon} onPress={() => {navigation.goBack();}}>
                            <AntDesign name="arrowleft" size={30} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>  
                
                <View style ={styles.container}>      

                <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 1</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 2</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 3</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 4</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity >       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 5</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity >       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 6</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity >       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 7</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 8</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Others/1Others.jpg") }/>
                            <Text style = {styles.textSubTitle}>Other 9</Text>                            
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
        width: 35,
        height: 30,
        position: 'absolute',
        zIndex: 15
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