import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

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
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground blurRadius = {50} source={require("../../assets/Trips/imdesertas.jpg")} resizeMode="cover" style={styles.imageBackground}> 

        <View style= {styles.headerbox}>
          <Text style= {styles.textHeader}>Whale Watching</Text>
        </View>  

        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />

        <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>

        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  imageBackground: {
    flex: 1,
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
});
