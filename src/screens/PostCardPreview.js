import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions } from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


import data from "./../../jsons/Trips.json";
import Category from '../../Category';

const { height, width } = Dimensions.get('window')

var tripId = 0;

/* pomos isto?
const seaState = data[tripId].seaState;
const confidenceLevel = data[tripId].confidenceLevel;
const reporterName = data[tripId].reporterName;*/


const id = data[tripId].id;
const ongoing = data[tripId].ongoing;
const location = data[tripId].location;
const latitude = data[tripId].lat;
const longitude = data[tripId].long;
const name = data[tripId].name;
const imagecollection = data[tripId].imagecollection;
const date = data[tripId].date;
const time = data[tripId].time;
const hours = data[tripId].hours;
const imgPath = data[tripId].imgPath;
const rating = data[tripId].rating;
const comment = data[tripId].comments;
const sightedSpecies = data[tripId].animals;
const route = data[tripId].route;

let ITEM_WIDTH = Dimensions.get('window').width;

function PostCardPreview(props) {
    const [isOpenRating, setOpenRating] = useState(true);
    const [text, setText] = useState('');
    return (
        <View>
            <ScrollView scrollEventThrottle={16}/*Scrollview da página toda */>
                <ScrollView /*Scroll view Horizontal */
                    scrollEventThrottle={16}
                >
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textShadowColor: 'rgba(0, 0, 0, 1)'}}>
                            {location}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: '500' , marginTop: 10, paddingHorizontal: 20}}>
                            {latitude} , {longitude}
                        </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={true}
                            >
                                <Category imageUri={require('../../assets/Dolphins/1Atlantic_spotted_dolphin.jpg')}
                                    name ="" /*se quisermos adicionar titulo às imagens */
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
                            <Text style={{ fontSize: 24, fontWeight: '700', textShadowColor: 'rgba(0, 0, 0, 1)'}}>
                                {name} 
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' , marginTop: 10}}>
                                {date} at {time}

                            </Text>
                            <Rating style= {{marginTop: 10}}
                                onClose={() => setOpenRating(false)} /* não está a fazer nada */
                                visible={isOpenRating}
                                readonly
                                showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                type="star"
                                fractions={1}
                                startingValue={5}
                                imageSize={26}
                                ratingConfirm={selectedRating => {
                                    console.log('Selected rating', selectedRating);
                                }}
                            ></Rating>
                            <Text style={{ fontSize: 18, fontWeight: '700' , marginTop: 30}}>
                                Share on social: 
                                <AntDesign name="facebook-square" size={30} color="#4267B2" />
                                <AntDesign name="instagram" size={30} color="black" />
                            </Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../../assets/Trips/imsunset.jpg')}
                                />

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View>
                        <Text style={styles.text} /*Comentário da viagem */ >
                            {comment}
                        </Text>
                    </View>
                </ScrollView>
                <Text style={styles.text}>Edit PostCard 
                    <FontAwesome name="edit" size={30} color="blue" onPress={() => navigation.navigate("EditPostCard", { msg: "testing" })}  /* onpress por implementar*/ />
                </Text>

                <View>
                    <ScrollView
                                horizontal={false}
                                showsHorizontalScrollIndicator={true}>
                                    
                            <Text style={styles.textTitles}>
                                Sighted Species
                            </Text>
                        <View>
                            <Text style={styles.sightedSpecies}>
                                {sightedSpecies[0].SpeciesName}
                            </Text>

                            <Image  /*Insert specie image*/ />

                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Sighted at: (eg. 10:23 AM)
                            </Text>
                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Behaviours: {sightedSpecies[0].Behaviours[0]}, {sightedSpecies[0].Behaviours[1]}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.sightedSpecies}>
                                {sightedSpecies[1].SpeciesName}
                            </Text>

                            <Image  /*Insert specie image*/ />

                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Sighted at: (eg. 10:23 AM)
                            </Text>
                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Behaviours: {sightedSpecies[1].Behaviours[0]}

                            </Text>
                        </View>
                        <View>
                            <Text style={styles.sightedSpecies}>
                                {sightedSpecies[2].SpeciesName}
                            </Text>

                            <Image  /*Insert specie image*/ />

                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Sighted at: (eg. 10:23 AM)
                            </Text>
                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Behaviours: {sightedSpecies[2].Behaviours[0]}, {sightedSpecies[2].Behaviours[1]}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.sightedSpecies}>
                                {sightedSpecies[3].SpeciesName}
                            </Text>

                            <Image  /*Insert specie image*/ />

                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Sighted at: (eg. 10:23 AM)
                            </Text>
                            <Text style={{paddingHorizontal: 20, fontSize: 15, fontWeight: '500', marginTop: 10, marginLeft: 10}}>
                                Behaviours: {sightedSpecies[3].Behaviours[0]}, {sightedSpecies[3].Behaviours[1]}

                            </Text>
                        </View>
                    </ScrollView>
                </View>
                
                <Text style={styles.textTitles}>
                    Description
                </Text>


                <Text style={styles.textTitles}>
                    Route : {route}
                </Text>
                <Image  /*Insert route image*/ />

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
    },
    sightedSpecies:{
        paddingHorizontal: 20, 
        marginLeft: 10,
        fontSize: 15, 
        fontWeight: '700', 
        marginTop: 10,
        color: 'blue'
    }})