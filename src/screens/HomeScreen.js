import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../Images"
import Data from "./../../jsons/Trips.json";

const ITEM_WIDTH = Dimensions.get('window').width


//we will loop through object properties and if an object has at least one property, then it will enter the loop and return false. If the object doesn’t have any properties then it will return true.
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

const Home = ({ route, navigation }) => {

    //let data = route.params;

    // if(data == undefined){
    //     console.log("nada");
    // }else {
    //     console.log(data.id);
    // }

    // var tripId = 0;
    //const id = data.id;
    // const ongoing = data.ongoing;
    // const location = data.location;
    // const name = data.name;
    // const imagecollection = data.imagecollection;
    // const date = data.date;
    // const imgPath = data.imgPath;
    // const rating = data.rating;
    // const comment = data.comment;
    // const sightedSpecies = data.sightedSpecies;
    //const route = data.route;


    const [idTrip, setIdTrip] = useState('');
    const [array_, setArray] = useState([]);

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
    }, []);


    function checkIdTrip(idTrip) {
        //console.log("id trip = ", idTrip);
        if (idTrip !== '') {
            //converter em int, era por isso que dava undefined
            const id = Number(idTrip);
            console.log("id trip do IF = ", idTrip)
            var ongoing = Data[id].ongoing;
            var location = Data[id].location;
            var name = Data[id].name;
            var imagecollection = Data[id].imagecollection;
            var date = Data[id].date;
            var imgPath = Data[id].imgPath;
            var rating = Data[id].rating;
            var comment = Data[id].comment;
            var sightedSpecies = Data[id].sightedSpecies;
            var routeTrip = Data[id].route;
        } else {
            console.log("Entrou no else")
            var id = 1;
            var ongoing = "";
            var location = "";
            var name = "";
            var imagecollection = "";
            var date = "";
            var imgPath = "";
            var rating = "";
            var comment = "";
            var sightedSpecies = "";
            var routeTrip = "";
        }

    }

    // //teste
    // if(idTrip == 0) {
    //     var img = Images.trip0;
    // }
    // else if(idTrip == 1) {
    //     var img = Images.trip1;
    // }
    // else if(idTrip == 2) {
    //     var img = Images.trip2;
    // }
    // else if(idTrip == 3) {
    //     var img = Images.trip3;
    // }
    // else if(idTrip == 4) {
    //     var img = Images.trip4;
    // }
    // else if(idTrip == 5) {
    //     var img = Images.trip5;
    // }
    // console.log("id trip = " + Number(idTrip));

    // console.log("home" , array_);
    /*
    if(Number(idTrip)){
        try {
            array_.push(idTrip);
            console.log("arrayViagens= " + array_)
            //setArray(arrayViagens); // Aqui rebenta!!
            
        } catch (error) {
            console.log(console.error())
        }
    } */

    function showTrips () {
        console.log("entrei no show trips")
        for(let i=0; i < array_.length; i++){
            if(i == 0) {
                var img = Images.trip0;
            }
            else if(i == 1) {
                var img = Images.trip1;
            }
            else if(i == 2) {
                var img = Images.trip2;
            }
            else if(i == 3) {
                var img = Images.trip3;
            }
            <ScrollView>
                  {!isEmpty(Data[idTrip]) ?
                        <TouchableOpacity onPress={() => navigation.navigate("PostCard")}>
                            <View style={styles.item}>
                                <Image style={styles.image} source={img} />
                                {/* <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                                <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text> */}
                            </View>
                        </TouchableOpacity> : null}

            </ScrollView>
        }


    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView style={styles.darkerimage}>

                    <View style={styles.headerbox}>
                        <Text style={styles.textHeader}> My Trips </Text>
                    </View>
                    <Text style={styles.welcomeText}>
                        Here you can see your trips. If you haven't done one yet, join!
                    </Text>
                    <TouchableOpacity style={styles.buttom} onPress={() => { navigation.navigate("AddTrip"); }}>
                        <Text style={styles.textButton}>Add a New Trip</Text>
                    </TouchableOpacity>

                    {showTrips()}
                    {/* {!isEmpty(Data[idTrip]) ?
                        <TouchableOpacity onPress={() => navigation.navigate("PostCard")}>
                            <View style={styles.item}>
                                <Image style={styles.image} source={img} />
                                <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                                <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text>
                            </View>
                        </TouchableOpacity> : null} */}

                    <TouchableOpacity style={styles.buttom} onPress={() => { navigation.navigate("SelectedPictureScreen"); }}>
                        <Text style={styles.textButton}>Select Pic TEST! </Text>
                    </TouchableOpacity>

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
        paddingTop: 35,
        padding: 8,
        flex: 1
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