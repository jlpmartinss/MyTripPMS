import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

const ITEM_WIDTH = Dimensions.get('window').width

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
                <ImageBackground blurRadius = {50} source={imgPath} resizeMode="cover" style={styles.imageBackground}>            
                <ScrollView>
                    <Text style={styles.textTitle}>{name}</Text>
                    <Text style={styles.textNormal, styles.textCientific}>Cientific name: {cientificName}</Text>  
                    <Image style={styles.image} source={imgPath}/>
                        
                    {summary != ""? <Text style={styles.textSubTitle}>Summary:</Text>:null}
                        {summary != ""? <Text style={styles.textNormal}>{summary}</Text>:null}

                    {identify != ""? <Text style={styles.textSubTitle}>How to identify:</Text>:null}
                        {identify != ""? <Text style={styles.textNormal}>{identify}</Text>:null}

                    {curiostity != ""? <Text style={styles.textSubTitle}>Curiosities:</Text>:null}
                            {curiostity != ""? <Text style={styles.textNormal}>{curiostity}</Text>:null}

                    {length != ""? <Text style={styles.textSubTitle}>Average Length:</Text>:null}
                        {length != ""? <Text style={styles.textNormal}>{length}</Text>:null}

                    {weight != ""? <Text style={styles.textSubTitle}>Average Weight:</Text>:null}
                        {weight != ""?<Text style={styles.textNormal}>{weight}</Text>:null}

                    {color != ""? <Text style={styles.textSubTitle}>Color:</Text>:null}
                        {color != ""? <Text style={styles.textNormal}>{color}</Text>:null}

                </ScrollView>
            </ImageBackground>                
        </View >            
    );        
}
    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    image: {
        marginTop: 15,
        margin: 15,
        flex: 1,
        width: ITEM_WIDTH - 30,
        height: ITEM_WIDTH/1.5,
        borderRadius: 15,
        
    },
    imageBackground: {
        flex: 1
    },
    textTitle: {
        color: 'white',
        fontSize: 32,
        marginHorizontal: 10,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        fontWeight: '700'
    },
    textSubTitle: {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 10,
        marginVertical: 1,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    textNormal: {        
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        //textShadowColor: 'rgba(0, 0, 0, 1)',
        //textShadowRadius: 8,
        marginBottom: 20,
        marginTop: 10,
        marginRight: 20,
        textAlign:'justify',
        fontSize: 15,
    },
    textCientific: {        
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        textAlign:'justify',
        fontSize: 15,
    },
    

})