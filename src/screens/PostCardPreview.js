import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions, Touchable} from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Share } from 'react-native';
import data from "./../../jsons/Trips.json";
import Category from '../../Category';
import * as Sharing from 'expo-sharing';
import Images from '../Images';
import { Card } from "react-native-elements/dist/card/Card";


const { height, width } = Dimensions.get('window')

let ITEM_WIDTH = Dimensions.get('window').width;


const PostCardPreview = ({navigation , route }) => {

    const {tripId} = route.params;

    const id = data[tripId].id;
    const ongoing = data[tripId].ongoing;
    const location = data[tripId].location;
    const latitude = data[tripId].lat;
    const longitude = data[tripId].long;
    const seaState = data[tripId].seaState;
    const name = data[tripId].name;
    const imagecollection = data[tripId].imagecollection;
    const date = data[tripId].date;
    const time = data[tripId].time;
    const hours = data[tripId].hours;
    const imgPath = data[tripId].imgPath;
    const rating = data[tripId].rating;
    const comment = data[tripId].comments;
    const sightedSpecies = data[tripId].animals;
    const routetrip = data[tripId].route;
    const boatName = data[tripId].boatName;
    const behaviour = sightedSpecies.Behaviours;

    //const [editedrating, setRating] = useState('');
    const [editComment, setComment] = useState('');
    const getData = () => {
        try {
            AsyncStorage.getItem('newComment')
                .then(value => {
                    if (value != null) {
                        setComment(value);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log('comment:' + editComment);

    const [text, setText] = useState('');


    const onShare = async () => {
        const shareOptions = {
            message:
            'React Native | A framework for building native apps using React',
            url: Images.dolphin1
        }

        try { const result = await Share.share(shareOptions); }
        catch (error) { alert(error.message); }
    }

    return (
        <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.darkerimage}>

                <View style= {styles.headerbox}>
                    <Text style= {styles.textHeader}>PostCard</Text>
                </View>  

                <ScrollView scrollEventThrottle = {16}/*Scrollview da página toda */>
                        <View style={{flex: 1,paddingTop: 20 }}>

                            <Text style={styles.textTitles}>{location} </Text>
                            <Text style={styles.text}>Coordinates: {latitude} , {longitude} É para incluir??!?! </Text>
                            <Text style={styles.text}>Sea State: {seaState}m </Text>
                            <Text style={styles.textSubTitles}>Your Gallery: </Text>

                            <View>
                                <ScrollView horizontal={true} height = {130} >
                                    
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                <Card width={ITEM_WIDTH/3} source={require("../../assets/Whales/10Killer_whale_or_Orca.jpg") }/>
                                
                                </ScrollView>
                            </View>

                            <View style={{ flex: 1, paddingTop: 20 }}>

                                <Text style={styles.textTitles}>{name} | {boatName}</Text>
                                <Text style={styles.text}>{date} at {time}</Text>
                                <View style = {styles.RatingBox}>
                                    { rating != undefined ? <Rating style = {{ marginTop: 0, alignSelf: 'center' }}
                                        readonly
                                        showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                        type="star"
                                        startingValue={rating}
                                        imageSize={22}
                                    ></Rating> :
                                    <Rating style = {{ marginTop: 0, alignSelf: 'center' }}
                                        readonly
                                        showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                        type="star"
                                        startingValue={3}
                                        imageSize={22}
                                    ></Rating> }
                                </View>
                                <View style = {styles.textBoxSocial}>
                                    <Text style={styles.textIcons}>Share on social </Text>
                                    <View style = {{flexWrap: 'wrap', alignContent: 'center', flex: 1}}>
                                        <View style = {{ alignSelf: 'center', height: 50}}>
                                            <TouchableOpacity style={styles.icon} onPress={() => onShare()}>
                                                <AntDesign name="facebook-square" size={50} color="#4267B2" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style = {{ alignSelf: 'center', height: 50}}>
                                            <TouchableOpacity style={styles.icon} onPress={() => onShare()}>
                                                <AntDesign name="instagram" size={50} color="#c13584" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <Text style={styles.textSubTitles}>Your Featured Photo: </Text>
                                
                                <View style={{ width: ITEM_WIDTH/1.1, height: 300, marginTop: 0, alignSelf: 'center'}}>
                                    
                                        <Image style={styles.image} source={require('../../assets/Trips/imsunset.jpg')} />

                                        { editComment == '' ? <Text style={styles.textComment} /*Comentário da viagem */ > {comment} 
                                        </Text> : <Text style={styles.textComment}> {editComment}

                                        </Text>
                                        }
                                </View>

                                <View style = {styles.textBoxPostCard} >
                                    <Text style={styles.textIcons}>Edit PostCard</Text>
                                    
                                        <View style = {{ height: 45, width: 50, marginTop: 5, alignSelf: 'center'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate("EditCard", tripId)}>
                                                <FontAwesome name="edit" size={50} color="#12AEB7"/>
                                            </TouchableOpacity>
                                        </View>
                                </View>

                            </View>
                        </View>
                        
                        
                    
                    <View>
                        <Text style={styles.textTitles}> Sighted Species: </Text>

                            <View style = {styles.textBoxSpecies}/* Adicionar textbox*/ >
                                {sightedSpecies.map((specie, key) => {
                                    return (
                                        <Text style={styles.textSightedSpecies} key={key}>{specie.SpeciesName}
                                            <Text style={styles.text}> {"\n\n"} First Seen at: {specie.Sighted}</Text>
                                            <Text style={styles.text}> {"\n"} Behaviours: {specie.Behaviours}</Text>
                                            {/* { specie.Behaviours.map((behaviour, key1) => {
                                                    <Text style={styles.text} key={key1}>{behaviour}</Text>
                                                })} */}
                                            <Text style={styles.text}> {"\n"} Reactions to boat: {specie.ReactionsToBoat}</Text>
                                        </Text>
                                )})}
                            </View>

                        <Text style={styles.textTitles}>Description: </Text>
                            {/*Adicionar descrição*/}
                        <Text style={styles.textTitles}>Route: {routetrip} </Text>
                            <Image  /*Insert route image*/ />
                    </View>

                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default PostCardPreview;

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'white',
        lineHeight: 20
    },
    textComment: {
        paddingHorizontal: 0,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'white',
        lineHeight: 20
    },
    textSightedSpecies: {
        paddingHorizontal: 25,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '700',
        marginTop: 10,
        color: '#12AEB7',
        textShadowRadius: 1,
        textShadowColor: 'rgba(0, 0, 0, 1)'
    },
    textIcons: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 5,
        textShadowColor: 'rgba(0, 0, 0, 1)',
    },
    textTitles: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        paddingHorizontal: 20,
        margin: 10,
        marginLeft: 0,
        textShadowColor: 'rgba(0, 0, 0, 1)',
    },
    textSubTitles: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 20,
        marginTop: 20,
        margin: 10,
        marginLeft: 0,
        textShadowColor: 'rgba(0, 0, 0, 1)',
    },
    image: {
        flex: 1, 
        height: null, 
        width: null, 
        resizeMode: 'cover', 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#dddddd'
    },
    textBox: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 15,
        borderRadius: 15,
        width: ITEM_WIDTH/1.1
    },
    headerbox: {
        width: ITEM_WIDTH,
        paddingTop: 35,
        padding:8        
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
    imageBackground: {
        flex: 1
    },
    textBoxSocial: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 10,
        borderRadius: 15,
        width: ITEM_WIDTH/1.1,
        height: 95,
        alignSelf: 'center',
    },
    RatingBox: {
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 15,
        width: ITEM_WIDTH/1.1,
        height: 95,
        alignSelf: 'center',
    },
    textBoxPostCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        margin: 20,
        marginTop: 40,
        borderRadius: 15,
        padding: 5,
        width: ITEM_WIDTH/1.1,
        alignSelf: 'center',
        height: 100
    },
    textBoxSpecies: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        marginTop: 5,
        borderRadius: 15,
        width: ITEM_WIDTH/1.1,
        height: 550,
        alignSelf: 'center',
    },
    imageBackground: {
        flex: 1,        
    },
    darkerimage: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    icon: {      
        flex:1,  
        alignSelf: 'flex-start',
        alignContent: "center",
        alignItems: 'center',
    }
})