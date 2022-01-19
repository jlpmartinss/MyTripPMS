import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from "react-native-easy-rating";

import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";

let ITEM_WIDTH = Dimensions.get("window").width;

export default function EditPostCard({ route, navigation }) {
  const { tripId } = route.params;
  const [rating, setRating] = useState();
  const [editComment, setComment] = useState("");
  let [selectedImage, setSelectedImage] = React.useState(null);

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

  const setcomment = async () => {
    await AsyncStorage.setItem("newComment", editComment);
  };

  const setrating = async () => {
    if (rating == "") {
      Alert.alert("Warning!", "Please select a rating");
    } else {
      try {
        await AsyncStorage.setItem("newRating", JSON.stringify(rating));
      } catch (error) {
        console.log(console.error);
      }
    }
  };

  const setPhoto = async () => {
    if (selectedImage.localUri != undefined) {
      const imageSelected = selectedImage.localUri;
      await AsyncStorage.setItem("newPhoto", JSON.stringify(imageSelected));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={50}
        source={require("../../assets/welcomeimage/welcome2.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>Edit PostCard</Text>
          <View style={styles.buttonBack}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={40} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.textSubTitle}>Select photo</Text>

          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.buttom}
          >
            <Text style={styles.textButton}>Pick a photo</Text>
          </TouchableOpacity>

          <Text style={styles.textSubTitle}>Leave a comment of your Trip</Text>

          <TextInput
            style={styles.textInput}
            backgroundColor="#FFFFFF"
            placeholder="Enter Your Comment"
            onChangeText={(editComment) => setComment(editComment)}
          />

          <Text style={styles.textSubTitle}>Rate your Trip</Text>

          <Rating
            style={{ paddingHorizontal: 130 }}
            rating={rating}
            max={5}
            iconWidth={24}
            iconHeight={24}
            onRate={setRating}
          />

          <Text
            style={
              styles.textSubTitle
            } /* passar este valor para o json da viagem (para depois aparecer no postcard preview) */
          >
            Selected Rating: {rating} stars
          </Text>

          <TouchableOpacity
            style={styles.buttom}
            onPress={() => {
              setcomment(),
                setrating(),
                setPhoto(),
                navigation.navigate("PostCardEdited", { tripId: tripId });
            }}
          >
            <Text style={styles.text}>Finish Editing</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    height: 100,
    width: "50%",
    margin: 15,
    borderRadius: 8,
    textAlign: "center",
    marginTop: 30,
    alignSelf: "center",
  },
  textSubTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 20,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    justifyContent: "center",
  },
  inputCommment: {},
  imageBackground: {
    flex: 1,
  },
  buttom: {
    width: ITEM_WIDTH / 2,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#12AEB7",
    marginTop: 20,
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  imageBackground: {
    flex: 1,
    width: ITEM_WIDTH,
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
    fontSize: 22,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    zIndex: 10,
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
});
