import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { ScrollView } from 'react-native-gesture-handler';

let ITEM_WIDTH = Dimensions.get('window').width;
//Documentation https://docs.expo.dev/versions/latest/sdk/imagepicker/#permissions

export default function SelectPictureScreen() {
  //const [image, setImage] = useState(null);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //     openShareDialogAsync();
  //   }
  // };

  // let openShareDialogAsync = async () => {
  //   if (!(await Sharing.isAvailableAsync())) {
  //     alert(`Uh oh, sharing isn't available on your platform`);
  //     return;
  //   }
  //   console.log("hi!");

  //   await Sharing.shareAsync(image.uri);
  // }; 
  // if (image !== null) {
  //   return (
  //     <View>
  //       <Image source={{ uri: image }} />
  //       <TouchableOpacity onPress={openShareDialogAsync} >
  //         <Text >Share this photo</Text>
  //       </TouchableOpacity>
  //       </View>
  //   );
  // }
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

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        
        <ImageBackground blurRadius = {50} source={{ uri: selectedImage.localUri }} 
        resizeMode="cover" style={styles.imageBackground}> 

        <View style= {styles.headerbox}>
          <Text style= {styles.textHeader}>Select photo</Text>
        </View>
        
          <ScrollView>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.roundButton1}  >
            <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground> 
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      <ImageBackground blurRadius = {50} source={require("../../assets/Trips/imdesertas.jpg")} resizeMode="cover" style={styles.imageBackground}> 
      <View style= {styles.headerbox}>
        <Text style= {styles.textHeader}>Select photo</Text>
      </View>
        <ScrollView>

        <View style={styles.textBox}>
          <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
        </View>        

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.roundButton1}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 15,
    margin: 10,
  },
  roundButton1: {
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#176cff',
    //overflow = 'hidden'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  thumbnail: {
    width: ITEM_WIDTH/1.1,
    height: ITEM_WIDTH,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 30,    
    borderRadius: 15,
  },
  imageBackground: {
    flex: 1,
    width: ITEM_WIDTH
  },
  headerbox: {
    width: ITEM_WIDTH,
    paddingTop: 35,
    padding:8,
    flex:1,
    fontSize: 20,        
  },
  textHeader: {
    flex:1,
    width: ITEM_WIDTH,
    position: 'absolute',
    color: 'white',
    fontSize: 20,
    paddingLeft:10,
    paddingBottom: 2,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 8,
    fontWeight: 'bold',
    fontSize: 30,       
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    zIndex: 10
  },
  textBox: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    margin: 15,
    borderRadius: 15,
  }
});
