import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";

const ITEM_WIDTH = Dimensions.get('window').width

export default function DesertasScreen({ route, navigation}) {

    
    console.log("I'm in Desertas Screen " );

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/Trips/imdesertas.jpg")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView> 
                    
                    <Image style={styles.image} source={require("../../assets/Trips/imdesertas.jpg")} />
                    <View style={styles.textBox}>
                        <Text style={styles.textTitle}>Description</Text>
                        <Text style={styles.textNormal}>Leaving from the Funchal Marina and heading out to sea towards the horizon, we reach a group of 3 islands, that although they are called Desert islands, are inhabited by numerous wildlife species both marine and land animals. This is only one reason that makes it worth the effort to disembark from the catamaran onto the virgin beach.{"\n"}{"\n"}
                    Come and see this natural paradise for yourself and participate in activities such as standup paddle and snorkelling. All this as part of a memorable 9 hour excursion, with plenty of swimming and a delicious Madeiran buffet lunch on board. Reserve now!</Text>
                    </View>

                    <View style={styles.textBoxMap}>
                        <Text style={styles.textTitle}>Route</Text>
                        <Image style={styles.image} source={require("../../assets/Trips/mapasVMT_desertas-1.png")} />
                    </View>

               <View style={styles.textBox}>
                    <Text style={styles.textTitle}>Tripulation:</Text>  
                               
                    
                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 30} >
                            <Text style = {styles.textSubTitle}>Luana Mendonça:</Text> 
                            <Text style = {styles.textCrew}>Luana is an experienced skipper with more than 5000 sailing hours. {"\n"} Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla. </Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Luana.jpg") }/>
                    </View> 

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 30}>
                            <Text style = {styles.textSubTitle}>João Martins:</Text> 
                            <Text style = {styles.textCrew}>João is a biologist that knows all the the waters of Madeira Island like the palm of his hand. Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.  </Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Joao.jpg") }/>
                    </View>

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 30}>
                            <Text style = {styles.textSubTitle}>Francisco Vasconcelos:</Text> 
                            <Text style = {styles.textCrew}>Francisco is your tour guide. He will guide you throug your trip and identify all the important landmarks.</Text>
                        </View>
                        <Image style = {styles.imageFace} source={require("../../assets/Crew/Francisco.jpg") }/>
                    </View>

                    <View style ={styles.containerHorizontal}>                        
                        <View width = {ITEM_WIDTH/2 - 30}>
                            <Text style = {styles.textSubTitle}>Marcos Silva:</Text> 
                            <Text style = {styles.textCrew}>Marcos will be your barman. He knows everything about your drinks. You can be asured that you will serve you very well. Bla bla bla bla.</Text>
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
        fontSize: 18,
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
        marginRight:10,
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