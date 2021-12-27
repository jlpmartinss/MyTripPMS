import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import { color } from "react-native-elements/dist/helpers";
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

const ITEM_WIDTH = Dimensions.get('window').width

export default function FajasScreen({ route, navigation}) {

    
    console.log("I'm in Fajas Screen " );

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/Trips/imfaja.jpg")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView>                    
                    <Image style={styles.image} source={require("../../assets/Trips/imfaja.jpg")} />
                    <View style={styles.textBox}>
                        <Text style={styles.textTitle}>Description</Text>
                        <Text style={styles.textNormal}>And what if the scenery to the West of Madeira is even more incredible?{"\n"}{"\n"}
                        Reserve your excursion with friends and family on a 9 hour journey that you will not forget in a hurry! Passing by Fajã dos Padres, we head off on a full day of cliffs and fun. Disembark in Paúl do Mar for a quick visit, swimming, standup paddle and snorkeling are, of course, on the ‘menu’. And speaking of menu, a full delicious Madeiran buffet lunch is served on board after a disembark of one hour in Paúl do Mar village.{"\n"}{"\n"}
                        Amongst the memorable 'Fajãs' are “Fajã do Mar”, “Jardim do Mar”, “Paúl do Mar” and “Fajã da Ovelha”.{"\n"}{"\n"}
                        An itinerary by sea where it is possible to see much of the natural beauty and life that our Island has to show.</Text>
                    </View>
                    
                    <View style={styles.textBoxMap}>
                        <Text style={styles.textTitle}>Route</Text>
                        <Image style={styles.image} source={require("../../assets/Trips/mapa_fajas.png")} />
                    </View>

                    <View style={styles.textBox}>
                        <Text style={styles.textTitle}>Tripulation</Text>                

                        <View style ={styles.containerHorizontal}>                        
                            <View width = {ITEM_WIDTH/2 - 15}>
                                <Text style = {styles.textSubTitle}>Luana Mendonça</Text> 
                                <Text style = {styles.textNormal}>Luana is an experienced skipper with more than 5000 sailing hours. {"\n"} Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </Text>
                            </View>
                            <Image style = {styles.imageFace} source={require("../../assets/Crew/Luana.jpg") }/>
                        </View>

                        <View style ={styles.containerHorizontal}>                        
                            <View width = {ITEM_WIDTH/2 - 15}>
                                <Text style = {styles.textSubTitle}>João Martins</Text> 
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
                                <Text style = {styles.textSubTitle}>Marcos Silva</Text> 
                                <Text style = {styles.textNormal}>Marcos will be your barman. He knows everything about your drinks. You can be asured that you will serve you very well. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.</Text>
                            </View>
                            <Image style = {styles.imageFace} source={require("../../assets/Crew/Marcos.jpg") }/>
                        </View>
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
        alignSelf:'center',
        marginTop: 15,
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
        //textShadowColor: 'rgba(0, 0, 0, 1)',
        //textShadowRadius: 8
    },
    textSubTitle: {
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10,
        //textShadowColor: 'rgba(0, 0, 0, 1)',
        //textShadowRadius: 8
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
        //textShadowColor: 'rgba(0, 0, 0, 1)',
        //textShadowRadius: 8,
        textAlign: 'justify',
        fontSize: 15,
    },
    textBox: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
        margin: 15,
        borderRadius: 15,
    },
    textBoxMap: {
        flex: 1,
        margin: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 200, 255, 0.33)'
    },



})