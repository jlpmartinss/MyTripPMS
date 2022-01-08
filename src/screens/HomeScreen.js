import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../Images"
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'
import Data from "./../../jsons/Trips.json";

const ITEM_WIDTH = Dimensions.get('window').width
const ITEM_HEIGHT = Dimensions.get('window').height


//we will loop through object properties and if an object has at least one property, then it will enter the loop and return false. If the object doesn’t have any properties then it will return true.
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

const Home = ({ route, navigation }) => {

    const [idTrip, setIdTrip] = useState('');
    const [array_, setArray] = useState([]);
    const [username, setUsername] = useState('');

    const getData = () => {
        try {
            AsyncStorage.getItem('IdNewTrip')
                .then(value => {
                    if (value != null) {
                        console.log(idTrip);
                        //volta a converter num objeto
                        let trip = JSON.parse(value);
                        setIdTrip(trip.Id);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const getUserName = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        //volta a converter num objeto
                        let user = JSON.parse(value);
                        setUsername(user.Name);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const getDataArray = () => {
        try {
            AsyncStorage.getItem('NewArray')
                .then(value => {
                    if (value != null) {
                        //volta a converter num objeto
                        let array_ = JSON.parse(value);
                        setArray(array_);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        getDataArray();
        getUserName();
    }, []);
    
    function ImageTest (number){
        if(Number(number) == 0) {
            var img = Images.trip0;
        }
        else if(Number(number) == 1) {
            var img = Images.trip1;
        }
        else if(Number(number) == 2) {
            var img = Images.trip2;
        }
        else if(Number(number) == 3) {
            var img = Images.trip3;
        }

        return img;
    }

    return (
        <View style={styles.container}>
            
            <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>

                <View style={styles.headerbox}>

                    <Text style={styles.textHeader}> My Trips </Text>

                    <View style={styles.buttonBack}>

                        <TouchableOpacity style={styles.icon} onPress={() => {navigation.navigate("Login");}}>                                
                            <MaterialCommunityIcons name="logout" size={30} color="#fff"/>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView style={styles.darkerimage}>


                    <Text style={styles.welcomeText}>
                        Hello {username}. Here you can see your trips. If you haven't done one yet, join!
                    </Text>

                    <TouchableOpacity style={styles.buttom} onPress={() => { navigation.navigate("AddTrip"); }}>
                        <Text style={styles.textButton}>Add a New Trip</Text>
                    </TouchableOpacity>

                    {!isEmpty(Data[idTrip]) ?
                    array_.map((idTrip, key) => {
                        return (
                            <TouchableOpacity key={key} onPress={() => navigation.navigate("PostCard", {tripId: idTrip})}>
                                <View style={styles.item}>
                                    {console.log(idTrip)}
                                    <Image style={styles.image} source={ImageTest(idTrip)} />
                                    <Text style={styles.textSubTitle}>{Data[idTrip].name}{"\n"}</Text>
                                    <Text style={styles.text}>{"\n"}{Data[idTrip].location}{"\n"}{Data[idTrip].date} </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }) : null}

                </ScrollView>

            </ImageBackground>
            
        </View >
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        marginTop: 15,
        padding: 5,
        flex: 1,
        fontSize: 20,
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginLeft: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        paddingTop: 20,
        fontSize: 14
    },
    textSubTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        paddingTop: 10,
        marginLeft: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    welcomeText: {
        marginHorizontal: 20,
        alignSelf: "flex-start",
        color: 'white',
        fontSize: 15,
        marginTop: 40,
        lineHeight: 20
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 32,
        flex: 1
    },
    buttonBack: {
        flex:1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: 35,
        height: 30,
        position: 'absolute',
        zIndex: 15
    },
    textHeader: {
        flex: 1,
        width: ITEM_WIDTH,
        position: 'absolute',
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 2,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 2,
        fontWeight: 'bold',
        fontSize: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 10
    },
    image: {
        marginTop: 0,
        marginLeft: 15,
        flex: 1,
        width: ITEM_WIDTH / 1.1,
        height: ITEM_WIDTH / 1.5,
        borderRadius: 15,
    },
    imageBackground: {
        flex: 1,
    },
    darkerimage: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttom: {
        width: ITEM_WIDTH / 2,
        height: 40,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#12AEB7',
        alignSelf: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})