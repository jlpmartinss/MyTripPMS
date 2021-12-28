import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
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
  const [editedrating, setRating] = useState();
  //console.log(editedrating);

  const setData = async () => {
    if (editedrating == undefined) {
      //console.log(editedrating);
      Alert.alert('Warning!', 'Please select a rating')
    }
    else {
        try {
            await AsyncStorage.setItem('newRating', editedrating);
            navigation.navigate('PostCard');
        } catch (error) {
            console.log(console.error);

        }
    }
    
}

  return (
    <View>
      <Rating
        rating={editedrating}
        max={5}
        iconWidth={24}
        iconHeight={24}
        onRate={setRating}
      />

      <Text /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */  >{editedrating}</Text>

      <Button
        title="Confirm"
        onPress={() => {setData ;
          navigation.navigate("PostCard", editedrating)

          //writeToJson(rating);
          /* data[tripId].rating.replace(rating);
          
          const testing = data[tripId].rating;
          const value = testing.valueOf();
          testing.replace(value,rating);
          console.log("Valor do Json " + data[tripId].rating.toString() +" \nvalor para inserir:" + rating);
          console.log("Valor lido: " + testing);*/


        }}
      />

    </View>
  );

}
