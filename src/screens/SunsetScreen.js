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
                
                <View style= {styles.headerbox}>
                    <Text style= {styles.textHeader}>Sunset</Text>
                </View>  
               
                <ScrollView>  

                    <Image style={styles.image} source={require("../../assets/Trips/imsunset.jpg")} />

                    <View style={styles.textBox}>

                        <Text style={styles.textTitle}>Summary:</Text>

                        <Text style={styles.textNormal}>Duration:{"\n"}
                        - 3H
                        </Text>

                        <Text style={styles.textNormal}>Interest points:{"\n"}
                        - Largo do Cabo Girão
                        </Text>

                        <Text style={styles.textNormal}>Stopping points:{"\n"}
                        - Largo do Cabo Girão (if weather conditions are favourable)
                        </Text>

                        <Text style={styles.textNormal}>Available activities:{"\n"}
                        - Snorkeling{"\n"}
                        - Swimming{"\n"}
                        - Snacks + bar
                        </Text>

                    </View>   

                    <View style={styles.textBox}>
                        <Text style={styles.textTitle}>Description</Text>
                        <Text style={styles.textNormal}>We are in Funchal and we look towards the twilight. Do you know what we see? Absolutely nothing! No buildings, towers or bridges. Only nature, an endless ocean, a constant line that balances days and nights and with the 3 Desert Islands there in the background, a little to the left.{"\n"}{"\n"}
                        Board with us on a dream journey, a romantic wave, where besides sighting dolphins and/or whales, it is possible to swim in the warm waters accompanied by the sunset. We sail out for 3 hours so that you can partake in this unique spectacle of colour that changes every day and reflects in the passive ocean of our coast.</Text>
                    </View>

                    <View style={styles.textBoxMap}>
                    <Text style={styles.textTitle}>Route:</Text>
                        <Image style={styles.image} source={require("../../assets/Trips/mapa_por-do-sol.png")} />
                    </View>

                    <View style={styles.textBox}>
                        <Text style={styles.textTitle}>Crew:</Text> 
                                
                            <Text style={styles.textTitle}>Skippers:</Text>
                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30} >
                                        <Text style = {styles.textSubTitle}>Luana Mendonça:</Text> 
                                        <Text style = {styles.textCrew}>Luana is an experienced skipper with more than 5000 sailing hours. {"\n"} Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/Luana.jpg") }/>
                                </View>

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30} >
                                        <Text style = {styles.textSubTitle}>Marcelo Sousa:</Text> 
                                        <Text style = {styles.textCrew}>Luana is an experienced skipper with more than 5000 sailing hours. {"\n"} Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/marcelo-rebelo-de-sousa-foto-rodrigo-antunes-lusa1315263edefaultlarge_1024.jpg") }/>
                                </View>

                    
                            <Text style={styles.textTitle}>Biologists:</Text> 
                            
                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>João Martins:</Text> 
                                        <Text style = {styles.textCrew}>João is a biologist that knows all the the waters of Madeira Island like the palm of his hand. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  </Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/Joao.jpg") }/>
                                </View>

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>Antonio Costa:</Text> 
                                        <Text style = {styles.textCrew}>João is a biologist that knows all the the waters of Madeira Island like the palm of his hand. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  </Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/QvhnkTYJ_400x400.png") }/>
                                </View>

                            <Text style={styles.textTitle}>Tourist Guides:</Text> 

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>Francisco Vasconcelos:</Text> 
                                        <Text style = {styles.textCrew}>Francisco is your tour guide. He will guide you throug your trip and identify all the important landmarks.</Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/Francisco.jpg") }/>
                                </View>

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>Angelina Jolie:</Text> 
                                        <Text style = {styles.textCrew}>Francisco is your tour guide. He will guide you throug your trip and identify all the important landmarks.</Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/angelina-jolie.jpg") }/>
                                </View>

                            <Text style={styles.textTitle}>Barmans:</Text> 

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>Marcos Silva:</Text> 
                                        <Text style = {styles.textCrew}>Marcos will be your barman. He knows everything about your drinks. You can be asured that you will serve you very well. Bla bla bla bla.</Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/Marcos.jpg") }/>
                                </View>

                                <View style ={styles.containerHorizontal}>                        
                                    <View width = {ITEM_WIDTH/2 - 30}>
                                        <Text style = {styles.textSubTitle}>Brad Pitt:</Text> 
                                        <Text style = {styles.textCrew}>Marcos will be your barman. He knows everything about your drinks. You can be asured that you will serve you very well. Bla bla bla bla.</Text>
                                    </View>
                                    <Image style = {styles.imageFace} source={require("../../assets/Crew/Brad-Pitt-2.jpg") }/>
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
        paddingHorizontal: 20,
        paddingVertical: 5,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        color: 'red'    
    },
    item: {
        padding:5,
        flex:1,
        fontSize: 20        
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 35,
        padding:8,
        flex:1     
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
        height: ITEM_WIDTH/2.5,
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
        marginVertical: 10,
    },
    textSubTitle: {
        color: 'white',
        fontSize: 16,
        marginVertical: 10,
        marginRight:10,
    },
    textNormal: {           
        alignSelf:'auto',  
        marginHorizontal: 15,
        color: 'white',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'justify',
        fontSize: 15,
        lineHeight: 20

    },
    textCientific: {
        marginLeft: 20,
        marginHorizontal: 10,
        color: 'white',
        textAlign: 'justify',
        fontSize: 15,
    },
    textCrew: {    
        flex: 1,    
        color: 'white',
        textAlign: 'justify',
        fontSize: 14,
        marginRight: 10,
        lineHeight: 20

    },
    textBox: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
        margin: 15,
        paddingBottom:10,
        borderRadius: 15,
    },
    textBoxMap: {
        flex: 1,
        margin: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 200, 255, 0.33)'
    }
})