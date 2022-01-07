import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign} from '@expo/vector-icons';
import Data from "./../../jsons/DolphinsData.json"


let ITEM_WIDTH = Dimensions.get('window').width;
let ITEM_HEIGHT = Dimensions.get('window').height;

export default function DolphinsScreen({ navigation }){

    return(
        <ImageBackground blurRadius = {50} source={require("../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg") } resizeMode="cover" style={styles.imageBackground}> 
            
            <View style= {styles.headerbox}>
                <Text style= {styles.textHeader}>Dolphins</Text>
                <View style={styles.buttonBack}>
                    <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate("Species");}}>
                        <AntDesign name="arrowleft" size={30} color="#fff"/>
                    </TouchableOpacity>
                </View>
            </View>   

            <ScrollView>
                <View style ={styles.container}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[0])}/*Dolphin1*/>        
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Atlantic Spotted Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[1])}/*Dolphin2*/>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/2Bottlenose_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Bottlenose Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[2])}/*Dolphin3*/>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/3Common_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Common Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[3])}/*Dolphin4*/>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/4Frasers_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Frasers Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[4])}/*Dolphin5*/>      
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/5Rissos_Dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Risso's Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[5])}/*Dolphin6*/>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/6Rough_toothed_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Rough Toothed Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Dolphin1", Data[6])}/*Dolphin7*/>       
                        <View style ={styles.item}>
                            <Image style = {styles.image} source={require("../../assets/Dolphins/7Stripped_dolphin.jpg") }/>
                            <Text style = {styles.textSubTitle}>Stripped Dolphin</Text>                            
                        </View>
                    </TouchableOpacity>
                    
                </View>    
            </ScrollView>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'      
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 32,
        flex: 1        
    },
    buttonBack: {
        alignSelf: 'flex-end',
        width: 30,
        height: 30,
        marginTop: 0,
        position: 'absolute',
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
    item: {
        padding:5,
        flex:1,
        fontSize: 20        
    },
    textSubTitle: {
        position:'absolute',
        color: 'white',
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    image: {
        flex: 1,
        width: ITEM_WIDTH/2.15,
        height: ITEM_WIDTH/3.15,
        backgroundColor: 'white',
        borderRadius: 15
    },
    imageBackground: {
        flex: 1,        
        minHeight: ITEM_HEIGHT,
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
//                     }}
//                     keyExtractor={
//                         (index) => { return index }
//                     }
//                 /> */
//                     Images.map((image, index) => (
//                         <TouchableOpacity key={index} onPress={() => navigation.navigate('Whale1')}>
//                             <Image source={image.url} style={{ height: ITEM_HEIGHT / 3, width: ITEM_WIDTH / 3 - 6, borderRadius: 10, margin: 2 }} />

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