import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

const ITEM_WIDTH = Dimensions.get('window').width

export default function Whale1({ route, navigation}) {

    let data = route.params;

    const id = data.id; console.log("id: " + id);
    const name = data.name; console.log(name);
    const cientificName = data.cientificName; console.log("cientificName: " + cientificName);
    const summary = data.summary; console.log("summary: " + summary);
    const identify = data.identify; console.log("identify: " + identify);
    const curiostity = data.curiostity; console.log("curiostity: " + curiostity);
    const length = data.length; console.log("length: " + length);
    const weight = data.weight; console.log("weight: " + weight);
    const color = data.color; console.log("color: " + color);
    const imgPath = data.imgPath; console.log("imgPath: " + imgPath);

  
    //state = {columns:2}
    //const {columns} = this.state

    return (

        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView>
                    <Text style={styles.textTitle}>{name}</Text>
                    <Text style={styles.textNormal, styles.textCientific}>Cientific name: {cientificName}</Text>
                    <Image style={styles.image} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")} />

                    {summary != "" ? <Text style={styles.textSubTitle}>Summary:</Text> : null}
                        {summary != "" ? <Text style={styles.textNormal}>{summary}</Text> : null}

                    {identify != "" ? <Text style={styles.textSubTitle}>How to identify:</Text> : null}
                        {identify != "" ? <Text style={styles.textNormal}>{identify}</Text> : null}

                    {curiostity != "" ? <Text style={styles.textSubTitle}>Curiosities:</Text> : null}
                        {curiostity != "" ? <Text style={styles.textNormal}>{curiostity}</Text> : null}

                    {length != "" ? <Text style={styles.textSubTitle}>Average Length:</Text> : null}
                        {length != "" ? <Text style={styles.textNormal}>{length}</Text> : null}

                    {weight != "" ? <Text style={styles.textSubTitle}>Average Weight:</Text> : null}
                     {weight != "" ? <Text style={styles.textNormal}>{weight}</Text> : null}

                    {color != "" ? <Text style={styles.textSubTitle}>Color:</Text> : null}
                        {color != "" ? <Text style={styles.textNormal}>{color}</Text> : null}

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
        height: ITEM_WIDTH / 1.5,
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
        textShadowRadius: 8
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
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        marginBottom: 20,
        marginRight: 20,
        textAlign: 'justify',
        fontSize: 15,
    },
    textCientific: {
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        textAlign: 'justify',
        fontSize: 15,
    },


})