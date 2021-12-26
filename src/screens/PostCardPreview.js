import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions } from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


import data from "./../../jsons/Trips.json";
import Category from '../../Category';

const { height, width } = Dimensions.get('window')

var tripId = 2;

/* {
		"id": "2",
		"ongoing": "false",
		"location" : "Madeira, Câmara de lobos",
		"name": "Catamaran Trip",
		"imagecollection" : "/trip1collection",
		"date": "Sunday Dec 26",
		"time": "11:00:00 2021",
		"lat": "32.371666",
		"long": "-16.274998",

		"animals": [{
			"SpeciesName": "Atlantic Spotted dolphin",
			"NumberIndividuals": "2",
			"NumberOffspring": "2",
			"Behaviours": ["jump","whistle"],
			"ReactionsToBoat": ["touch"]
		}, 
		{"SpeciesName": "Bottlenose Dolphin",
		"NumberIndividuals": "3",
		"NumberOffspring": "1",
		"Behaviours": ["jump"],
		"ReactionsToBoat": ["touch"]}
		],

		"imgPath": "../../assets/whale.jpg",
		"seaState": 2,
		"confidenceLevel": "nao sei",
		"rating": "5.0",
		"boatName": "Dory Boat",
		"comments": "surprising!!!",
		"reporterName": "John",
		"route" : "./"
	}*/

    /*const id = data[tripId].id;
const ongoing = data[tripId].ongoing;
const location = data[tripId];
const name = data[tripId].name;
const imagecollection = data[tripId].imagecollection;
const date = data[tripId].date;
const time = data[tripId].time;
const latitude = data[tripId].lat;
const longitude = data[tripId].long;
const sightedSpecies = data[tripId].animals;
const imgPath = data[tripId].imgPath;
const seaState = data[tripId].seaState;
const confidenceLevel = data[tripId].confidenceLevel;
const rating = data[tripId].rating;
const comments = data[tripId].comments;
const reporterName = data[tripId].reporterName;
const route = data[tripId].route;*/


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
                        <Text style={{ fontSize: 26, fontWeight: '700', paddingHorizontal: 20, textShadowColor: 'rgba(0, 0, 0, 1)',textShadowRadius: 4}}>
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
                                <Category imageUri={require('../../assets/home.png')}
                                    name ="Home"
                                />
                                <Category imageUri={require('../../assets/whale.jpg')}
                                    name="Experiences"
                                />
                                <Category imageUri={require('../../assets/586396-dophin-animals.jpg')}
                                    name="Resturant"
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 26, fontWeight: '700', textShadowColor: 'rgba(0, 0, 0, 1)',textShadowRadius: 4 }}>
                                {name} 
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '500' , marginTop: 10}}>
                                {date} at {time}

                            </Text>
                            <Rating style= {{marginTop: 10}}
                                onClose={() => setOpenRating(false)} /* não está a fazer nada */
                                visible={isOpenRating}
                                readonly
                                showRating
                                type="star"
                                fractions={1}
                                startingValue={5}
                                imageSize={40}
                                ratingConfirm={selectedRating => {
                                    console.log('Selected rating', selectedRating);
                                }}
                            ></Rating>
                            <Text style={{ fontSize: 18, fontWeight: '500' , marginTop: 30}}>
                                Share on social:
                                <AntDesign name="facebook-square" size={32} color="#4267B2" />
                                <AntDesign name="instagram" size={32} color="black" />
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
                <Text style={styles.text}> Edit PostCard
                    <FontAwesome name="edit" size={32} color="blue" onPress={() => navigation.navigate("EditPostCard", { msg: "testing" })}  /* onpress por implementar*/ />
                </Text>



                <Text style={styles.textTitles}>
                    Sighted Species
                </Text>
                
                <Text style={{paddingHorizontal: 20, fontSize: 18, fontWeight: '700', marginTop: 10}}>
                    {sightedSpecies[0].SpeciesName}
                </Text>

                <Image  /*Insert specie image*/ />
                <Text style={styles.text}>
                    Sighted at: (eg. 10:23 AM)

                </Text>
                <Text style={styles.text}>
                    Behaviours: {sightedSpecies[0].Behaviours[0]}, {sightedSpecies[0].Behaviours[1]}

                </Text>
                
                <Text style={{paddingHorizontal: 20, fontSize: 18, fontWeight: '700', marginTop: 10}}>
                    {sightedSpecies[1].SpeciesName}
                </Text>

                <Image  /*Insert specie image*/ />
                <Text style={styles.text}>
                    Sighted at: (eg. 10:23 AM)

                </Text>
                <Text style={styles.text}>
                    Behaviours: {sightedSpecies[1].Behaviours[0]}

                </Text>
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
        fontSize: 22,
        fontWeight: '700',
        paddingHorizontal: 20,
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 4
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
        fontSize: 18, 
        fontWeight: '500', 
        marginTop: 10,
    }
})