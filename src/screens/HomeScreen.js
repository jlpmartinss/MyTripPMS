import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image, ScrollView, ImageBackground } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../Images"

const ITEM_WIDTH = Dimensions.get('window').width
import data from "./../../jsons/Trips.json";
var tripId = 0;
const id = data[tripId].id;
const ongoing = data[tripId].ongoing;
const location = data[tripId].location;
const name = data[tripId].name;
const imagecollection = data[tripId].imagecollection;
const date = data[tripId].date;
const imgPath = data[tripId].imgPath;
const rating = data[tripId].rating;
const comment = data[tripId].comment;
const sightedSpecies = data[tripId].sightedSpecies;
const route = data[tripId].route;

const Home = ({ navigation }) => {
    //state = { columns: 2 }

    //const { columns } = this.state
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={50} source={require("../../assets/Whales/1Blainvilles_beaked_whale.jpg")} resizeMode="cover" style={styles.imageBackground}>
                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate("PostCard")}>
                        <View style={styles.item}>
                            <Image style={styles.image} source={Images.trip0} />
                            <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                            <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <View style={styles.item}>
                            <Image style={styles.image} source={Images.trip1} />
                            <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                            <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <View style={styles.item}>
                            <Image style={styles.image} source={Images.trip2} />
                            <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                            <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <View style={styles.item}>
                            <Image style={styles.image} source={Images.trip3} />
                            <Text style={styles.textSubTitle}>{name}{"\n"}</Text>
                            <Text style={styles.text}>{"\n"}{location}{"\n"}{date} </Text>
                        </View>
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
    textSubTitle: {
        position: 'absolute',
        color: 'white',
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 25,
        marginLeft: 30,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8,
        paddingTop: 180,
        fontWeight:'bold',
        fontSize:30
        
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
        fontSize:14

        
    },
    image: {
        marginTop: 15,
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