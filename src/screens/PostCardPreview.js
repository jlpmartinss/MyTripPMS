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


const { height, width } = Dimensions.get('window')

var tripId = 0;

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


let ITEM_WIDTH = Dimensions.get('window').width;


const PostCardPreview = ({navigation , route }) => {
    let data = route.params; 
    const rating = data;

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

    console.log('comment:' +editComment);

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
                        <View style={{ flex: 1,paddingTop: 20 }}>

                            <Text style={styles.textTitles}>{location} </Text>
                            <Text style={styles.text}>Coordinates: {latitude} , {longitude} É para incluir??!?! </Text>
                            <Text style={styles.text}>Sea State: {seaState}m </Text>
                            <Text style={styles.text}>Your Gallery: </Text>

                            <View style={{ height: 130, marginTop: 8 }}>
                            
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageUri={require('../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg')}  name="" /*se quisermos adicionar titulo às imagens *//>
                                    <Category imageUri={require('../../assets/whale.jpg')}  name=""/>
                                    <Category imageUri={require('../../assets/586396-dophin-animals.jpg')} name=""/>
                                </ScrollView>

                            </View>

                            <View style={{ flex: 1, paddingTop: 20 }}>

                                <Text style={styles.textTitles}>{name} | {boatName}</Text>
                                <Text style={styles.text}>{date} at {time}</Text>
                                
                                { rating != undefined ? <Rating style = {{ marginTop: 10 }}
                                    readonly
                                    showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                    type="star"
                                    startingValue={rating}
                                    imageSize={22}
                                ></Rating> :
                                <Rating style = {{ marginTop: 10 }}
                                    readonly
                                    showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                    type="star"
                                    startingValue={3}
                                    imageSize={22}
                                ></Rating> }
                                
                                <Text style={styles.textSocial}>Share on social:

                                <View style = {{flexDirection: 'row', margin: 100}}>
                                    <TouchableOpacity style={styles.icon} onPress={() => onShare()}>
                                        <AntDesign name="facebook-square" size={50} color="#4267B2" />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.icon} onPress={() => onShare()}>
                                        <AntDesign name="instagram" size={50} color="black" />
                                    </TouchableOpacity>
                                </View>

                                </Text>  

                                <View style={{ width: width - 40, height: 300, marginTop: 20,}}>
                                    <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5}}>
                                        Your Featured Photo: </Text>
                                        <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} source={require('../../assets/Trips/imsunset.jpg')} />

                                        { editComment == '' ? <Text style={styles.textComment} /*Comentário da viagem */ > {comment} 
                                        </Text> : <Text style={styles.textComment}> {editComment}

                                        </Text>
                                        }
                                </View>

                            </View>
                        </View>
                        
                        <View style = {styles.textBoxPostCard} >
                            <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 8}}>Edit PostCard
                                <TouchableOpacity onPress={() => navigation.navigate("EditCard")}>
                                    <FontAwesome name="edit" size={30} color="blue"/>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    
                    <View>
                        <Text style={styles.textTitles}> Sighted Species: </Text>

                            <View /* Adicionar textbox*/ >
                                {sightedSpecies.map((specie, key) => {
                                    return (
                                        <Text style={styles.sightedSpecies} key={key}>{specie.SpeciesName}
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
                        <Text style={styles.textTitles}>Route : {routetrip} </Text>
                            <Image  /*Insert route image*/ />
                    </View>

                </ScrollView>
            </View>
        </ImageBackground>
    );
}

export default PostCardPreview;

const styles = StyleSheet.create({
    textTitles: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 20,
        margin: 10,
        marginLeft: 0,
        textShadowColor: 'rgba(0, 0, 0, 1)',
    },
    image: {
        flex: 1,
        width: ITEM_WIDTH / 20,
        height: ITEM_WIDTH / 20,
        backgroundColor: 'white',
        borderRadius: 2
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
    imageBackground: {
        flex: 1
    },
    text: {
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'white'
    },
    textComment: {
        paddingHorizontal: 0,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'white'
    },

    sightedSpecies: {
        paddingHorizontal: 25,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '700',
        marginTop: 10,
        color: 'rgba(23,108,255,1)'
    },
    textBoxSocial: {
        backgroundColor: 'rgba(23,108,255, 0.50)',
        margin: 20,
        borderRadius: 15,
        width: ITEM_WIDTH/1.2,
        height: 55,
        alignSelf: 'center',
    },
    textBoxPostCard: {
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        marginTop: 10,
        borderRadius: 15,
        paddingHorizontal: 80,
        width: ITEM_WIDTH-ITEM_WIDTH/8,
        height: 55,
        alignSelf: 'flex-start'   
    },
    textBoxSpecies: {
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 0,
        paddingVertical: 5,
        width: ITEM_WIDTH-ITEM_WIDTH/8,
        height: 530,
        alignSelf: 'flex-start'

    },
    textSocial: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        alignItems: 'center',
        alignSelf:'center',
        margin: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        width: ITEM_WIDTH,
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