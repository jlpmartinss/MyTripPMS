import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { ScrollView } from "react-native-gesture-handler";

let ITEM_WIDTH = Dimensions.get("window").width;
//Documentation https://docs.expo.dev/versions/latest/sdk/imagepicker/#permissions

export default function SelectPictureScreen() {
  let [selectedImage, setSelectedImage] = React.useState(null);
  var count = 0;
  let ImageList = [];

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

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
        <ImageBackground
          blurRadius={50}
          source={{ uri: selectedImage.localUri }}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.headerbox}>
            <Text style={styles.textHeader}>Select photo</Text>
          </View>

          <ScrollView>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <TouchableOpacity
              onPress={openShareDialogAsync}
              style={styles.buttom}
            >
              <Text style={styles.textButton}>Share this photo</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={50}
        source={require("../../assets/Trips/imdesertas.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>Select photo</Text>
        </View>

        <ScrollView>
          <View style={styles.textBox}>
            <Text style={styles.instructions}>
              To share a photo from your phone with a friend, just press the
              button below!
            </Text>
          </View>

          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.buttom}
          >
            <Text style={styles.textButton}>Pick a photo</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 15,
    margin: 10,
    textAlign: "center",
  },
  buttom: {
    width: ITEM_WIDTH / 2,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#12AEB7",
    marginTop: 0,
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  thumbnail: {
    width: ITEM_WIDTH / 1.1,
    height: ITEM_WIDTH,
    resizeMode: "contain",
    alignSelf: "center",
    margin: 30,
    borderRadius: 15,
  },
  imageBackground: {
    flex: 1,
    width: ITEM_WIDTH,
  },
  headerbox: {
    width: ITEM_WIDTH,
    paddingTop: 39,
    flex: 1,
  },
  buttonBack: {
    alignSelf: "flex-end",
    width: 45,
    height: 50,
    position: "absolute",
    zIndex: 15,
  },
  textHeader: {
    flex: 1,
    width: ITEM_WIDTH,
    position: "absolute",
    color: "white",
    paddingLeft: 10,
    paddingBottom: 2,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 2,
    fontWeight: "bold",
    fontSize: 28,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    zIndex: 10,
  },
  textBox: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    margin: 15,
    borderRadius: 15,
  },
});
