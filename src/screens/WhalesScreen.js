import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


let ITEM_WIDTH = Dimensions.get('window').width;

export default function WhalesScreen({ navigation }){
    console.log("I'm in WhalesScreen");
    
    return(
        <ScrollView>
            <ImageBackground blurRadius = {50} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg") } resizeMode="cover" style={styles.imageBackground}> 
            <View style ={styles.container}>
                
                <TouchableOpacity onPress={() => navigation.navigate("Whale1", { pressedId: 1})}/*Whale1*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Blainvilles Beaked Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 2})}/*Whale2*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/2Blue_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Blue Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 3})}/*Whale3*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/3Brydes_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Brydes Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 4})}/*Whale4*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/4Cuviers_beaked_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Cuviers Beaked Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 5})}/*Whale5*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/5False_killer_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>False Killer Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 6})}/*Whale6*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/6Fin_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Fin Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 7})}/*Whale7*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/7Gervaiss_beaked_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Gervaiss Beaked Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 8})}/*Whale8*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/8Harbour_porpoise_whale.png") }/>
                        <Text style = {styles.textSubTitle}>Harbour Porpoise Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 9})}/*Whale9*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/9humpback_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Humpback Whale</Text>                            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 10})}/*Whale10*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                        <Text style = {styles.textSubTitle}>Killer Whale(Orca)</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 11})}/*Whale11*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/11Long-finned_pilot_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Long-finned Pilot Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 12})}/*Whale12*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/12Melon-headed_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Melon Headed Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 13})}/*Whale13*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/13Minke_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Minke Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 14})}/*Whale14*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/14North_Atlantic_Right_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Northern Bottlenose Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 15})}/*Whale15*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/15Northern_bottlenose_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Northern Bottlenose Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 16})}/*Whale16*/>       
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/16Sei_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Sei Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 17})}/*Whale17*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/17Short-finned_pilot_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Short-finned Pilot Whale</Text>                            
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 18})}/*Whale18*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/18Sowerbys_beaked_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Sowerbys Beaked Whale</Text>                            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 19})}/*Whale19*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/19Sperm_Whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Sperm Whale</Text>                            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.push("Whale1", { pressedId: 20})}/*Whale19*/>      
                    <View style ={styles.item}>
                        <Image style = {styles.image} source={require("../../assets/Whales/20Trues_beaked_whale.jpg") }/>
                        <Text style = {styles.textSubTitle}>Trues Beaked Whale</Text>                            
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






















// let ITEM_WIDTH = Dimensions.get('window').width;
// let ITEM_HEIGHT = Dimensions.get('window').height;
// //import Whale1 from './Whale1';

// //const WhalesStack = createStackNavigator();

// const WhalesScreen = ({ navigation }) => {
//     //state = { columns: 2 }


//     //render() {
//     // const { navigation } = useNavigation;
//     // const { columns } = this.state
//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 {/* <FlatList
//                     numColumns={columns}
//                     data={[
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),
//                         require("../../assets/whale.jpg"),

//                     ]}
//                     renderItem={({ item }) => {
//                         return <ListItem itemWidth={ITEM_WIDTH / columns} image={item} />
//                     })}
//                     keyExtractor={
//                         (index) => { return index }
//                     }
//                 /> */
//                     Images.map((image, index) => (
//                         <TouchableOpacity key={index} onPress={() => navigation.navigate('Whale1')}>
//                             <Image source={image.url} style={{ height: ITEM_HEIGHT / 3, width: ITEM_WIDTH / 3 - 6, borderRadius: 10, margin: 2 })} />

//                         </TouchableOpacity>
//                     ))

//                 }
//                 {/* <TouchableOpacity style={styles.container}
//                     onPress={() => this.props.navigation.navigate('Whale1')}>
//                     <Text style={styles.button}> ddwd </Text>
//                 </TouchableOpacity> */}
//             </View >
//         </ScrollView>
//     );
// }
// //}

// const styles = StyleSheet.create({
//     container: {
//         display: "flex",
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//     text: {
//         color: 'white',
//         fontSize: 28,
//         marginHorizontal: 10,
//         marginVertical: 1,
//         textShadowColor: 'rgba(0, 0, 0, 1)',
//         textShadowRadius: 8
//     },
//     button: {
//         alignItems: "center",
//         backgroundColor: "#DDDDDD",
//         padding: 10
//     }

// })

//export default WhalesScreen