import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

const ITEM_WIDTH = Dimensions.get('window').width
const ITEM_HEIGHT = Dimensions.get('window').height

export default function Dolphin1({ route, navigation}) {

    let data = route.params;

    const id            = data.id;
    const name          = data.name;
    const cientificName = data.cientificName;
    const summary       = data.summary;
    const identify      = data.identify;
    const curiostity    = data.curiostity;
    const length        = data.length;
    const weight        = data.weight;
    const color         = data.color;
    var imgPath         = "";

    console.log("I'm in Dolphin1: " + id + " " + name);

    switch (id){
        case '1':
            imgPath = Images.dolphin1;
            break;
        case '2':
            imgPath = Images.dolphin2;
            break;
        case '3':
            imgPath = Images.dolphin3;
            break;
        case '4':
            imgPath = Images.dolphin4;
            break;
        case '5':
            imgPath = Images.dolphin5;
            break;
        case '6':
            imgPath = Images.dolphin6;
            break;
        case '7':
            imgPath = Images.dolphin7;

        default:
            console.log("something went wrong with image id!!!!");
    }

    return (
        
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={imgPath} resizeMode="cover" style={styles.imageBackground}>
            <View style= {styles.headerbox}>
                <Text style= {styles.textHeader}>{name}</Text>
                <View style={styles.buttonBack}>
                    <TouchableOpacity style={styles.icon} onPress={() => {navigation.goBack();}}>
                        <AntDesign name="arrowleft" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View> 

                <ScrollView>
                    <Image style={styles.image} source={imgPath} />

                    <View style={styles.textBox}>
                        {cientificName != "" ? <Text style={styles.textSubTitle}>Cientific name: {cientificName}</Text> : null}
                    </View > 
                        
                    <View style={styles.textBox}>
                        {summary != ""? <Text style={styles.textSubTitle}>Summary</Text>:null}
                        {summary != ""? <Text style={styles.textNormal}>{summary}</Text>:null}
                    </View >

                    <View style={styles.textBox}>
                        {identify != ""? <Text style={styles.textSubTitle}>How to identify</Text>:null}
                        {identify != ""? <Text style={styles.textNormal}>{identify}</Text>:null}
                    </View >

                    <View style={styles.textBox}>
                        {curiostity != ""? <Text style={styles.textSubTitle}>Curiosities</Text>:null}
                        {curiostity != ""? <Text style={styles.textNormal}>{curiostity}</Text>:null}
                    </View >

                    <View style={styles.textBox}>
                        {length != ""? <Text style={styles.textSubTitle}>Average Length:</Text>:null}
                        {length != ""? <Text style={styles.textNormal}>{length}</Text>:null}
                    </View >

                    <View style={styles.textBox}>
                        {weight != ""? <Text style={styles.textSubTitle}>Average Weight:</Text>:null}
                        {weight != ""?<Text style={styles.textNormal}>{weight}</Text>:null}
                    </View >

                    <View style={styles.textBox}>
                        {color != ""? <Text style={styles.textSubTitle}>Color:</Text>:null}
                        {color != ""? <Text style={styles.textNormal}>{color}</Text>:null}
                    </View >

                </ScrollView>
            </ImageBackground>                
        </View >            
    );        
}
    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
    },
    image: {
        marginTop: 15,
        margin: 15,
        flex: 1,
        width: ITEM_WIDTH - 30,
        height: ITEM_WIDTH / 1.5,
        borderRadius: 15,

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
    imageBackground: {
        flex: 1
    },
    textTitle: {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 10,
        marginLeft: 20,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        fontWeight: '700',
        textShadowRadius: 5
    },
    textSubTitle: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal:10,
    },
    textNormal: {
        marginHorizontal: 10,
        color: 'white',
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'justify',
        fontSize: 15,
        lineHeight: 20

    },
    textCientific: {
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 5,
        textAlign: 'justify',
        fontSize: 15,
    },
    textBox: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
        margin: 15,
        borderRadius: 15,
    }
})