import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions } from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


import data from "./../../jsons/Trips.json";
import Category from '../../Category';

const { height, width } = Dimensions.get('window')

var tripId = 0;

const id = data[tripId].id;
const ongoing = data[tripId].ongoing;
const location = data[tripId].location;
const name = data[tripId].name;
const imagecollection = data[tripId].imagecollection;
const hours = data[tripId].hours;
const imgPath = data[tripId].imgPath;
const rating = data[tripId].rating;
const comment = data[tripId].comment;
const sightedSpecies = data[tripId].sightedSpecies;
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
                        <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            {location}
                        </Text>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category imageUri={require('../../assets/home.png')}
                                    name="Home"
                                />
                                <Category imageUri={require('../../assets/whale.jpg')}
                                    name="Experiences"
                                />
                                <Category imageUri={require('../../assets/586396-dophin-animals.jpg')}
                                    name="Resturant"
                                />
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                {name}
                            </Text>
                            <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                {hours}

                            </Text>
                            <Rating
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
                            <Text>
                                Share on social
                                <AntDesign name="facebook-square" size={32} color="#4267B2" />
                                <AntDesign name="instagram" size={32} color="black" />
                            </Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={require('../../assets/home.png')}
                                />

                            </View>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView>
                    <View>
                        <Text /*Comentaário da viagem */ >
                            {comment}
                        </Text>
                    </View>
                </ScrollView>


                <Text>Edit PostCard
                    <FontAwesome name="edit" size={32} color="blue" onPress={() => navigation.navigate("EditPostCard", { msg: "testing" })}  /* onpress por implementar*/ />
                </Text>



                <Text style={styles.textTitles}>
                    Sighted Species
                </Text>
                <Text>
                    (Specie Name) {sightedSpecies}
                </Text>

                <Image  /*Insert specie image*/ />
                <Text>
                    Sighted at: (eg. 10:23 AM)

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
        fontSize: 32,
        marginHorizontal: 10,
        marginTop: 10,
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
})