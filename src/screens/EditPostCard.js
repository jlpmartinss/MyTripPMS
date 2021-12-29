import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';
import data from "./../../jsons/Trips.json";
import Rating from 'react-native-easy-rating';
//import {writeJsonFile} from 'write-json-file';



//const text = await FileSystem.getInfoAsync("../../jsons/Trips.json");

var tripId = 0;

function writeToJson(data) {
  //await writeJsonFile('./../../jsons/Trips.json', {rating: data}, replacer);
  /*var ficheiro = FileSystem.readAsStringAsync("file://./../../jsons/Trips.json");
  console.log(ficheiro);
  return data;*/
  //if()
}

export default function EditPostCard({ route, navigation }) {
  const [editedrating, setRating] = useState('');
  const [editComment, setComment] = useState('');
  //console.log(editedrating);

  const setData = async () => {
    if (editedrating == undefined && editComment == undefined) {
      //console.log(editedrating);
      Alert.alert('Warning!', 'Please select a rating')
    }
    else {
        try {
            await AsyncStorage.setItem('newRating', editedrating);
            await AsyncStorage.setItem('newComment', editComment);
            navigation.navigate('PostCard');
        } catch (error) {
            console.log(console.error);

        }
    }
    
}

  return (
    /*<View >
      <View style={styles.container}>
      <Text  >Leave a comment of your Trip</Text>
            <TextInput
                    
                    backgroundColor='#FFFFFF'
                    placeholder="Type your new comment here"

                    onChangeText={editComment => setComment(editComment)}
                />
                </View>
                <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 120, textShadowColor: 'rgba(0, 0, 0, 1)', textAlign: 'center' }} >Rate your Trip</Text>
      <Rating
        style ={{paddingHorizontal: 130 }}
        rating={editedrating}
        max={5}
        iconWidth={24}
        iconHeight={24}
        onRate={setRating}
      />

      <Text style ={{textAlign: 'center'}}  /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */  /*>{editedrating}</Text>*/

    /*         
      <TouchableOpacity style={styles.roundButton1} onPress={() => {navigation.navigate("PostCard", editedrating)}}
    
      >
                   <Text style={styles.textButton}> Finish Editing</Text> 
                </TouchableOpacity >
                
                </View>

          


    </View> */

<View style={styles.container}>
<Text style={styles.textSubTitle}>Leave a comment of your Trip</Text>

<TextInput
    style={{ padding: 10, height: 150, width: 210, margin: 15, borderRadius: 8 }}
    backgroundColor='#FFFFFF'
                    placeholder="Type your new comment here"

                    onChangeText={editComment => setComment(editComment)}
/>

<Text style={styles.textSubTitle}>Rate your Trip</Text>
<Rating
        style ={{paddingHorizontal: 130 }}
        rating={editedrating}
        max={5}
        iconWidth={24}
        iconHeight={24}
        onRate={setRating}
      />
<Text style ={{textAlign: 'center'}}  /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */  >Selected Rating: {editedrating} stars</Text>

<TouchableOpacity style={styles.roundButton1}  onPress={() => {navigation.navigate("PostCard", editedrating)}}>
    
    <Text style={styles.textButton}>Finish Editing</Text>
</TouchableOpacity>
</View>

  );

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',

  },
  textInput: {
      padding: 10, height: 40, width: 150, alignSelf: 'center'
  },
  textSubTitle: {

      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 50,
      textShadowColor: 'rgba(0, 0, 0, 1)',
      //textShadowRadius: 5

  },
  textButton: {
      color: 'white',
      fontSize: 18,
  },

  imageBackground: {
      flex: 1
  },
  roundButton1: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#176cff',
      //overflow = 'hidden'
  },
})