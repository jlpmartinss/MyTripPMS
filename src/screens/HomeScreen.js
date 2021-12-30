import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../Images"

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

    const getData = () => {
        try {
            AsyncStorage.getItem('IdNewTrip')
                .then(value => {
                    if (value != null) {
                        //volta a converter num objeto
                        let trip = JSON.parse(value);
                        setIdTrip(trip.Id);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    // const id = tripData.id;
    // const ongoing = tripData.ongoing;
    // const location = tripData.location;
    // const name = tripData.name;
    // const imagecollection = tripData.imagecollection;
    // const date = tripData.date;
    // const imgPath = tripData.imgPath;
    // const rating = tripData.rating;
    // const comment = tripData.comment;
    // const sightedSpecies = tripData.sightedSpecies;
    // const routeTrip = tripData.route;

    //teste

    const img = Images.imsunset;
    
    const entrar = () =>{
        console.log(idTrip)
    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={img} resizeMode="cover" style={styles.imageBackground}>
                <View style= {styles.headerbox}>
                    <Text style= {styles.textHeader}>My trips </Text>
                   
                </View> 
                
                <TouchableOpacity style={styles.buttom} onPress={() => {navigation.navigate("AddTrip"); }}>
                    <Text style={styles.textButton}>Confirm {idTrip} {entrar()}</Text>
                </TouchableOpacity>
                

                <ScrollView>
                    {isEmpty ? <TouchableOpacity onPress={() => navigation.navigate("PostCard")}>
                        <View style={styles.item}>
                            <Image style={styles.image} source={img} />
                            {/* <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                            <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text> */}
                        </View>
                    </TouchableOpacity> : null}
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
    textSubTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 25,
        marginLeft: 15,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        fontWeight: 'bold',
        fontSize: 30

    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 35,
        padding:8,
        flex:1,
        fontSize: 20,        
    },
    textHeader: {
        flex:1,
        width: ITEM_WIDTH,
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        paddingLeft:10,
        paddingBottom: 2,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        fontWeight: 'bold',
        fontSize: 30,       
        backgroundColor: 'rgba(0, 0, 0, 0.33)',
        zIndex: 10
    },
    text: {
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 25,
        marginLeft: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        paddingTop: 200,
        fontSize: 14


    },
    image: {
        marginTop: 85,
        marginLeft: 15,
        flex: 1,
        width: ITEM_WIDTH - 35,
        height: ITEM_WIDTH / 1.5,
        borderRadius: 15,
    },
    imageBackground: {
        flex: 1,

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
})