import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Data from "./../../jsons/WhalesData.json"
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

const ITEM_WIDTH = Dimensions.get('window').width

const id = 0;// Replace with desired id

export default class Whale1 extends React.Component {
    state = {columns:2}

    
    render() {
        const {columns} = this.state

        var path = Data[id].imgPath.toString();        
        var impath = require('./../../assets/whale.jpg'); //HardCoded...Fix! //Supostament require (path) devia dar mas não dá

        console.log("path = " + path); 
        console.log("impath = " + impath);
        

        return (
            <View style={styles.container}>
                 <ImageBackground blurRadius = {50} source={impath} resizeMode="cover" style={styles.imageBackground}>            
                    <ScrollView>
                        <Text style={styles.textTitle}>{Data[id].name}</Text>   
                            <Image style={styles.image} source={impath}/>

                        <Text style={styles.textSubTitle}>Cientific name:</Text>
                            <Text style={styles.textNormal}>{Data[id].cName}</Text>
                        <Text style={styles.textSubTitle}>Average Length::</Text>
                            <Text style={styles.textNormal}>{Data[id].length}</Text>
                        <Text style={styles.textSubTitle}>Average Weight:</Text>
                            <Text style={styles.textNormal}>{Data[id].weight}</Text>
                        <Text style={styles.textSubTitle}>Color:</Text>
                            <Text style={styles.textNormal}>{Data[id].color}</Text>
                        <Text style={styles.textSubTitle}>Description:</Text>
                            <Text style={styles.textNormal}>{Data[id].description}</Text>
                        <Text style={styles.textSubTitle}>Curiosity:</Text>
                            <Text style={styles.textNormal}>{Data[id].curiostity}</Text>
                    </ScrollView>
                </ImageBackground>
            </View >            
        );        
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    image: {
        width: '95%',
        marginVertical: 10,    
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1
    },
    textTitle: {
        color: 'white',
        fontSize: 28,
        marginHorizontal: 10,
        marginVertical: 1,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    textSubTitle: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 1,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    textNormal: {        
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    }

})