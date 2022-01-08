import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Rating from 'react-native-easy-rating';

import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { ScrollView } from 'react-native-gesture-handler';


let ITEM_WIDTH = Dimensions.get('window').width;

var tripId = 0;

export default function EditPostCard({ route, navigation }) {
  const [rating, setRating] = useState();
  const [editComment, setComment] = useState('');
  //console.log(editedrating);
  let [selectedImage, setSelectedImage] = React.useState(null);
  var count = 0;
  let ImageList = [];

  let openImagePickerAsync = async () => {
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

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };


  const setData = async () => {
    if (editComment == '') {
      //console.log(editedrating);
      Alert.alert('Warning!', 'Please write a comment')
    }
    else {
      try {
            const imageSelected = selectedImage.localUri;
            console.log(imageSelected);
            await AsyncStorage.setItem('newComment', editComment);
            if(imageSelected!=null){
              navigation.navigate('PostCardEdited', {rating:rating, imageSelected:imageSelected, tripId: tripId});
            }
            else{
              navigation.navigate('PostCardEdited', {rating:rating,tripId: tripId});
            }
        } catch (error) {
            console.log(console.error);

        }
    }
    
}
  return (
    
    <View style={styles.container}>

      <View style={styles.buttonBack}>
        <TouchableOpacity onPress={() => {navigation.goBack();}}>
          <AntDesign name="arrowleft" size={30} color="#12AEB7"/>
         </TouchableOpacity>
      </View>
      <View style= {styles.headerbox}>
        <Text style= {styles.textSubTitle}>Select photo</Text>
      </View>
                

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.buttom}>    
        <Text style={styles.textButton}>Pick a photo</Text>
      </TouchableOpacity>


      <Text style={styles.textSubTitle}>Leave a comment of your Trip</Text>

      <TextInput
        style={styles.texInput}
        backgroundColor='#FFFFFF'
        placeholder="Enter Your Comment"
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
  texInput: {
    backgroundColor: 'white',
    padding: 10, 
    height: 100, 
    width: '50%', 
    margin: 15, 
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 30
  },
  textSubTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 60,
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textAlign: 'center',
      justifyContent: 'center'
  },
  inputCommment: {

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
},buttonBack: {
  alignSelf: 'flex-end',
  width: 35,
  height: 30,
  position: 'absolute',
  zIndex: 15
},
})