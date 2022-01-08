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
import * as ImagePicker from 'expo-image-picker';
const { height, width } = Dimensions.get('window')

let ITEM_WIDTH = Dimensions.get('window').width;


const PostCardEdited = ({navigation , route }) => {

    const { rating, imageSelected, tripId,  } = route.params;
    console.log (tripId);
    console.log(imageSelected);

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
    };

    let [selectedImage1, setSelectedImage1] = React.useState(null);
    
    let openImagePickerAsync1 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        
        let pickerResult = await ImagePicker.launchImageLibraryAsync( {      
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            //allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        
        ;
        if (pickerResult.cancelled === true) {
            return;
        }
        
        setSelectedImage1({ localUri: pickerResult.uri });
        
    };
    
    let [selectedImage2, setSelectedImage2] = React.useState(null);
    let openImagePickerAsync2 = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (permissionResult.granted === false) {
          alert('Permission to access camera roll is required!');
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync( {      
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          //allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
          
        ;
        if (pickerResult.cancelled === true) {
          return;
        }
        
        setSelectedImage2({ localUri: pickerResult.uri });
        
      };let [selectedImage3, setSelectedImage3] = React.useState(null);
      let openImagePickerAsync3 = async () => {
          let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
          
          if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
          }
      
          let pickerResult = await ImagePicker.launchImageLibraryAsync( {      
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            //allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
            
          ;
          if (pickerResult.cancelled === true) {
            return;
          }
          
          setSelectedImage3({ localUri: pickerResult.uri });
          
        };
  
      let [selectedImage4, setSelectedImage4] = React.useState(null);
      let openImagePickerAsync4 = async () => {
          let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
          
          if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
          }
      
          let pickerResult = await ImagePicker.launchImageLibraryAsync( {      
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            //allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
            
          ;
          if (pickerResult.cancelled === true) {
            return;
          }
          
          setSelectedImage4({ localUri: pickerResult.uri });
          
        };

    return (
        <ImageBackground blurRadius={50} source={require("../../assets/welcomeimage/welcome2.png")} resizeMode="cover" style={styles.imageBackground}>
            <View style={styles.darkerimage}>

                <View style= {styles.headerbox}>

                    <Text style= {styles.textHeader}>PostCard</Text>
                    <View style={styles.buttonBack}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Home");}}>
                            <AntDesign name="arrowleft" size={30} color="#fff"/>
                        </TouchableOpacity>
                    </View>

                </View>  

                <ScrollView scrollEventThrottle = {16}/*Scrollview da página toda */>
                        <View style={{flex: 1,paddingTop: 20 }}>

                            <Text style={styles.textTitles}>{location} </Text>
                            <Text style={styles.text}>Coordinates: {latitude} , {longitude} É para incluir??!?! </Text>
                            <Text style={styles.text}>Sea State: {seaState}m </Text>
                            <Text style={styles.textSubTitles}>Your Gallery: </Text>

                            <View style={{ height: 130, marginTop: 0}}>
                                <ScrollView horizontal={true} height = {140} >
                                
                                <Card width={ITEM_WIDTH/3} marginTop = {0}/*Imagem 1 */>
                                    {selectedImage1 == undefined ? <Image style={styles.imageCard} source={require('../../assets/Whales/10Killer_whale_or_Orca.jpg')} /> 
                                    :  <Image style={styles.imageCard} source={{uri : selectedImage1.localUri}} />}
                                    <TouchableOpacity onPress={openImagePickerAsync1}>
                                    <Text style={{color:"white"}} >Edit picture <AntDesign name="picture" /> </Text>
                                    </TouchableOpacity>
                                </Card>

                                <Card width={ITEM_WIDTH/3} marginTop = {0} /*Imagem 2 */>
                                {selectedImage2 == undefined ? <Image style={styles.imageCard} source={require('../../assets/Whales/10Killer_whale_or_Orca.jpg')} /> 
                                    :  <Image style={styles.imageCard} source={{uri : selectedImage2.localUri}} />}
                                    <TouchableOpacity onPress={openImagePickerAsync2}>
                                    <Text style={{color:"white"}} >Edit picture <AntDesign name="picture" /> </Text>
                                    </TouchableOpacity>
                                </Card>

                                <Card width={ITEM_WIDTH/3} marginTop = {0}/*Imagem 3 */>
                                {selectedImage3 == undefined ? <Image style={styles.imageCard} source={require('../../assets/Whales/10Killer_whale_or_Orca.jpg')} /> 
                                    :  <Image style={styles.imageCard} source={{uri : selectedImage3.localUri}} />}
                                    <TouchableOpacity onPress={openImagePickerAsync3}>
                                    <Text style={{color:"white"}} >Edit picture <AntDesign name="picture" /> </Text>
                                    </TouchableOpacity>
                                </Card>

                                <Card width={ITEM_WIDTH/3} marginTop = {0}/*Imagem 4 */>
                                {selectedImage4 == undefined ? <Image style={styles.imageCard} source={require('../../assets/Whales/10Killer_whale_or_Orca.jpg')} /> 
                                    :  <Image style={styles.imageCard} source={{uri : selectedImage4.localUri}} />}
                                    <TouchableOpacity onPress={openImagePickerAsync4}>
                                    <Text style={{color:"white"}} >Edit picture <AntDesign name="picture" /> </Text>
                                    </TouchableOpacity>
                                    </Card>
                                
                                </ScrollView>
                            </View>

                            <View style={{ flex: 1, paddingTop: 20 }}>

                                <Text style={styles.textTitles}>{name} | {boatName}</Text>
                                <Text style={styles.text}>{date} at {time}</Text>

                                <View style = {styles.RatingBox}>

                                    { rating != undefined ?
                                        <Rating style = {{ marginTop: 0, alignSelf: 'center' }}
                                        readonly
                                        showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                                        type="star"
                                        startingValue={rating}
                                        imageSize={22}
                                    ></Rating>
                                    :
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
                                    
                                        { imageSelected == undefined ? <Image style={styles.image} source={require('../../assets/Trips/imsunset.jpg')}  /> : <Image style={styles.image} source={{ uri: imageSelected }} />   }

                                        { editComment == '' ? <Text style={styles.textComment} /*Comentário da viagem */ > {comment} 
                                        </Text> : <Text style={styles.textComment}> {editComment}

                                        </Text>
                                        }
                                </View>

                                <View style = {styles.textBoxPostCard} >

                                    <Text style={styles.textIcons}>Edit PostCard</Text>
                                    
                                        <View style = {{ height: 45, width: 50, marginTop: 5, alignSelf: 'center'}}>
                                            <TouchableOpacity onPress={() => navigation.navigate("EditCard",{selectedImage1:selectedImage1,selectedImage2:selectedImage2,selectedImage3:selectedImage3,selectedImage4:selectedImage4})}>
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

export default PostCardEdited;

const styles = StyleSheet.create({
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
    textSightedSpecies: {
        paddingHorizontal: 25,
        marginLeft: 10,
        fontSize: 15,
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
        borderRadius: 5, 
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
        paddingTop: 32,
        flex: 1,
    },
    buttonBack: {
        alignSelf: 'flex-end',
        width: 35,
        height: 30,
        position: 'absolute',
        zIndex: 15
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
        paddingBottom: 10,
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
    },imageCard: {
        resizeMode: 'cover',
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#dddddd', 
        width: 130, 
        height: 90,
        alignSelf: 'center',

    },
})