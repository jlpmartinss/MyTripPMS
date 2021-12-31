import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import data from "./../../jsons/Trips.json";
import Rating from 'react-native-easy-rating';
//import {writeJsonFile} from 'write-json-file';

let ITEM_WIDTH = Dimensions.get('window').width;

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
  const [rating, setRating] = useState();
  const [editComment, setComment] = useState('');
  //console.log(editedrating);

  const setData = async () => {
    if (editComment == '') {
      //console.log(editedrating);
      Alert.alert('Warning!', 'Please write a comment')
    }
    else {
        try {
            await AsyncStorage.setItem('newComment', editComment);
            navigation.navigate('PostCardEdited', rating);
        } catch (error) {
            console.log(console.error);

        }
    }
    
}

  return (
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
        rating={rating}
        max={5}
        iconWidth={24}
        iconHeight={24}
        onRate={setRating}
      />
<Text style ={{textAlign: 'center'}}  /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */  >Selected Rating: {rating} stars</Text>

<TouchableOpacity style={styles.buttom}  onPress={() => {setData()}}>
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
  imageBackground: {
      flex: 1
  },
  buttom: {
    width: ITEM_WIDTH/2,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#12AEB7',
    marginTop: 20,
    alignSelf: 'center'
},
textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
},
})