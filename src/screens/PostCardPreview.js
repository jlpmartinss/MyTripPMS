import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions, Touchable} from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Share } from 'react-native';
import data from "./../../jsons/Trips.json";
import Category from '../../Category';
import files from './fileBase64';
import * as Sharing from 'expo-sharing';


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
    const [isOpenRating, setOpenRating] = useState(true);
    const [text, setText] = useState('');
    const onShare = async () => {
        const shareOptions = {
            message:
            'React Native | A framework for building native apps using React',
            url: files.image1

        }
        try {
            const result = await Share.open(shareOptions);
        
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View>

            <ScrollView scrollEventThrottle={16}/*Scrollview da página toda */>
                <ScrollView /*Scroll view Horizontal */
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textShadowColor: 'rgba(0, 0, 0, 1)' }}>
                            {location}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingHorizontal: 20 }}>
                            Coordinates: {latitude} , {longitude}
                        </Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingHorizontal: 20 }}>
                            Sea State: {seaState}m
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 20, paddingHorizontal: 20 }}>
                                Your Gallery:
                        </Text>
                        <View style={{ height: 130, marginTop: 8 }}>
                        
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}

                            >
                                <Category imageUri={require('../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg')}
                                    name="" /*se quisermos adicionar titulo às imagens */
                                />
                                <Category imageUri={require('../../assets/whale.jpg')}
                                    name=""
                                />
                                <Category imageUri={require('../../assets/586396-dophin-animals.jpg')}
                                    name=""
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', textShadowColor: 'rgba(0, 0, 0, 1)' }}>
                                {name} | {boatName}
                            </Text>
                            <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10 }}>
                                {date} at {time}

                            </Text>
                            { rating != undefined ? <Rating style={{ marginTop: 10 }}
                                readonly
                                showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                type="star"
                                startingValue={rating}
                                imageSize={22}
                            ></Rating> : <Rating style={{ marginTop: 10 }}
                            readonly
                            showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                            type="star"
                            startingValue={3}
                            imageSize={22}
                        ></Rating> }
                            
                            <View  style={styles.textBoxSocial}>
                                <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>
                                    Share on social:
                                    <TouchableOpacity onPress={() => onShare()}>
                                        <AntDesign name="facebook-square" size={30} color="#4267B2" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onShare()}>
                                        <AntDesign name="instagram" size={30} color="black" />
                                    </TouchableOpacity>

                                </Text>
                            </View>
                            <View style={{ width: width - 40, height: 300, marginTop: 20, backgroundColor: 'white'}}>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 5}}>
                                Your Featured Photo:
                            </Text>
                                <Image
                                    
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../../assets/Trips/imsunset.jpg')}
                                />
                                <Text style={styles.textComment} /*Comentário da viagem */ >
                                     {comment}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView backgroundColor = "white">
                    <View style = {styles.textBoxPostCard} >
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 8}}>Edit PostCard
                            <TouchableOpacity onPress={() => navigation.navigate("EditCard")}>
                                <FontAwesome name="edit" size={30} color="blue"/>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </ScrollView>
                
                <View backgroundColor = "white">
                    <Text style={styles.textTitles}>
                        Sighted Species
                    </Text>

                    <ScrollView style = {styles.textBoxSpecies}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View>
                            {sightedSpecies.map((specie, key) => {
                                return <Text style={styles.sightedSpecies} key={key}>{specie.SpeciesName}
                                    <Text style={styles.text}> {"\n\n"} First Seen at: {specie.Sighted}</Text>
                                    <Text style={styles.text}> {"\n"} Behaviours: {specie.Behaviours}</Text>
                                    {/* { specie.Behaviours.map((behaviour, key1) => {
                                             <Text style={styles.text} key={key1}>{behaviour}</Text>
                                        })} */}
                                    <Text style={styles.text}> {"\n"} Reactions to boat: {specie.ReactionsToBoat}</Text>
                                </Text>
                            })}
                        </View>
                    </ScrollView>

                    <Text style={styles.textTitles}>
                    Description
                    </Text>

                    <Text style={styles.textTitles}>
                        Route : {routetrip}
                    </Text>
                    <Image  /*Insert route image*/ />
                </View>
            </ScrollView>
        </View>
    );
}

export default PostCardPreview;

const styles = StyleSheet.create({
    textTitles: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 20,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        marginTop: 20
    }, image: {
        flex: 1,
        width: ITEM_WIDTH / 20,
        height: ITEM_WIDTH / 20,
        backgroundColor: 'white',
        borderRadius: 2
    },
    imageBackground: {
        flex: 1
    },
    text: {
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'black'
    },
    textComment: {
        paddingHorizontal: 0,
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        color: 'black'
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
        flex: 1,
        backgroundColor: 'rgba(23,108,255, 0.08)',
        margin: 20,
        borderRadius: 15,
        paddingHorizontal: 60,
        width: ITEM_WIDTH-ITEM_WIDTH/8,
        height: 90,
        maxHeight: 55,
        alignSelf: 'flex-start',
        marginHorizontal: 0
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

    }
})