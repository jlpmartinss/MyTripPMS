import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";

const ITEM_WIDTH = Dimensions.get('window').width

const id = 0;// Replace with desired id

export default class Whale1 extends React.Component {
    
    state = {columns:2}
    

    
    render() {
        const {columns} = this.state

        return (
            
            <View style={styles.container}>
                 <ImageBackground blurRadius = {50} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")} resizeMode="cover" style={styles.imageBackground}>            
                    <ScrollView>
                        <Text style={styles.textTitle}>Blainvilles Beaked Whale</Text>
                        <Text style={styles.textNormal, styles.textCientific}>Cientific name: Mesoplodon densirostris</Text>  
                            <Image style={styles.image} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")}/>
                        <Text style={styles.textSubTitle}>Summary:</Text>
                            <Text style={styles.textNormal}>Ocasional, seen throughout the whole year in Madeira, particularly in July and August.</Text>

                        <Text style={styles.textSubTitle}>How to identify:</Text>
                            <Text style={styles.textNormal}>Their body has a yellowish tint due to a parasite. Their small and flat forehead (melon) extends into a long beak with distinctive arched mouthline. The bodies of males are often covered with scars (some of which are circular, believed to be made by the cookie-cutter shark) and white spots. They surface with their beaks pointing up and emit a small spout.</Text>

                        <Text style={styles.textSubTitle}>Curiosities:</Text>
                            <Text style={styles.textNormal}>These are deep divers and can go down to depths up to 700m and hold their breath for about 50 min. Naval exercises are now forbidden in the Canary Islands because the sounds produced by the military sonar cause the sudden interruption of their long dives, resulting in decompression illness, acoustic trauma and embolism, and eventually death.</Text>


                        <Text style={styles.textSubTitle}>Average Length:</Text>
                            <Text style={styles.textNormal}></Text>
                        <Text style={styles.textSubTitle}>Average Weight:</Text>
                            <Text style={styles.textNormal}></Text>
                        <Text style={styles.textSubTitle}>Color:</Text>
                            <Text style={styles.textNormal}></Text>
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
        marginTop: 15,
        height: 300,
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