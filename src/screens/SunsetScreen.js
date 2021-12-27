import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import { color } from "react-native-elements/dist/helpers";
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

const ITEM_WIDTH = Dimensions.get('window').width

export default function SunsetScreen({ route, navigation}) {

    
    console.log("I'm in Sunset Screen " );

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/Trips/imsunset.jpg")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView>                    
                    <Image style={styles.image} source={require("../../assets/Trips/imsunset.jpg")} />
                    <Text style={styles.textTitle}>Description:</Text>
                    <Text style={styles.textNormal}>We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.{"\n"}{"\n"}
                    Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of colour that changes every day and reflects in the passive ocean of our coast.</Text>

                    <Text style={styles.textTitle}>Route:</Text>
                        <Image style={styles.image} source={require("../../assets/Trips/mapa_por-do-sol.png")} />
                    <Text style={styles.textTitle}>Tripulation:</Text>                

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 15}>
                            <Text style = {styles.textSubTitle}>Luana Mendonça:</Text> 
                            <Text style = {styles.textNormal}>Luana is an experienced skipper with more than 5000 sailing hours. {"\n"} Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Luana.jpg") }/>
                    </View>

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 15}>
                            <Text style = {styles.textSubTitle}>João Martins:</Text> 
                            <Text style = {styles.textNormal}>João is a biologist that knows all the the waters of Madeira Island like the palm of his hand. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  </Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Joao.jpg") }/>
                    </View>

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 15}>
                            <Text style = {styles.textSubTitle}>Francisco Vasconcelos</Text> 
                            <Text style = {styles.textNormal}>Francisco is your tour guide. He knows everything about the Madeira. He will guide you throug this amazing trip and identify all the landmarks. Bla bla bla bla bla bla bla bla bla.</Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Francisco.jpg") }/>
                    </View>

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 15}>
                            <Text style = {styles.textSubTitle}>Marcos Silva:</Text> 
                            <Text style = {styles.textNormal}>Marcos will be your barman. He knows everything about your drinks. You can be asured that you will serve you very well. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Marcos.jpg") }/>
                    </View>

                    

                </ScrollView>
            </ImageBackground>
        </View >
       
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'grey',
    },
    containerHorizontal: {
        padding: 20,
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
    image: {
        marginTop: 15,
        margin: 15,
        flex: 1,
        width: ITEM_WIDTH - 30,
        height: ITEM_WIDTH / 1.5,
        borderRadius: 15,
    },

    imageFace: {
        flex: 1,
        width: ITEM_WIDTH/2.15,
        height: ITEM_WIDTH/2.15,
        backgroundColor: 'white',
        borderRadius: 15
    },
    imageBackground: {
        flex: 1
    },
    textTitle: {
        color: 'white',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    textSubTitle: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10,
        textShadowColor: 'blue',
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