import React, {useState} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Image, TouchableHighlight, TextInput, ImageBackground, Dimensions} from 'react-native';
import {Rating, RatingProps} from 'react-native-elements';
import { Entypo, Feather, Ionicons, Icon, AntDesign, FontAwesome } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';


import data from "./../../jsons/Trips.json";

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
            <ScrollView>
                <Text style={styles.textTitles}>
                    Localização {location}
                </Text>

            </ScrollView>

            <ScrollView /*horizontal = {true} */>
                <Text /* */>
                    Todas as imagens da viagem em side scroll
                    <Image style = {styles.image} source={require("../../assets/Seabirds/worldseabirdday.jpg")}/>
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Nome, data e rating | {name} , {hours}
                    <Rating
                    onClose={() => setOpenRating(false)} /* não está a fazer nada */
                    visible={isOpenRating}
                    showRating
                    type= "star"
                    fractions ={1}
                    startingValue={5}
                    imageSize={40}
                    ratingConfirm={selectedRating => {
                        console.log('Selected rating', selectedRating);
                      }}
                    >

                    </Rating>
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Share your PostCard Online
                    <AntDesign name="facebook-square" size={32} color="#4267B2" />
                    <AntDesign name="instagram" size={32} color="black" />
                </Text>
                

            </ScrollView>
            <ScrollView>
                <Text>
                    Imagem? (No exemplo tem uma imagem do por do sol)
                </Text>

            </ScrollView>
            <ScrollView>
                <Text>
                    Comment: {comment}
                </Text>
            </ScrollView>
            <ScrollView>
            <Text>Edit PostCard</Text>
                <FontAwesome name="edit" size={32} color="blue" onPress={() => navigation.push("EditScreen") } /* onpress por implementar*/ />
            </ScrollView>
            <ScrollView>
                <Text style={styles.textTitles}>
                    Sighted Species
                    </Text>
                    <Text>
                        (Specie Name) {sightedSpecies}
                    </Text>

                    <Image  /*Insert specie image*//>
                    <Text>
                    Sighted at: (eg. 10:23 AM)
                    
                    </Text>
                    <Text style={styles.textTitles}>
                    Description 
                    </Text>
                    
            </ScrollView>

            <ScrollView>
                <Text style={styles.textTitles}>
                    Route : {route}
                </Text>
                <Image  /*Insert route image*//>

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
    },image: {
        flex: 1,
        width: ITEM_WIDTH/20,
        height: ITEM_WIDTH/20,
        backgroundColor: 'white',
        borderRadius: 2
    },
    imageBackground: {
        flex: 1
    },
})