import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Rating, RatingProps } from "react-native-elements";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Share } from "react-native";
import data from "./../../jsons/Trips.json";
import Category from "../../Category";
import * as Sharing from "expo-sharing";
import Images from "../Images";
import * as ImagePicker from "expo-image-picker";
const { height, width } = Dimensions.get("window");
import ViewShot from "react-native-view-shot";

let ITEM_WIDTH = Dimensions.get("window").width;

const PostCardEdited = ({ navigation, route }) => {
  const { tripId } = route.params;
  console.log(tripId);
  //console.log(imageSelected);

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

  var img = "";
  var messageText = "Text that you want to share goes here";

  const [editComment, setComment] = useState("");
  const [editRating, setRating] = useState("");
  const [editPhoto, setPhoto] = useState("");

  const getComment = () => {
    try {
      AsyncStorage.getItem("newComment").then((value) => {
        if (value != null) {
          setComment(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getRating = () => {
    try {
      AsyncStorage.getItem("newRating").then((value) => {
        if (value != null) {
          let rating = JSON.parse(value);
          setRating(rating);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoto = () => {
    try {
      AsyncStorage.getItem("newPhoto").then((value) => {
        if (value != null) {
          let photo = JSON.parse(value);
          setPhoto(photo);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComment();
    getRating();
    getPhoto();
  }, []);

  const [text, setText] = useState("");

  const onShare = async () => {
    const shareOptions = {
      message: editComment,
      url: editPhoto,
    };

    try {
      const result = await Share.share(shareOptions);
    } catch (error) {
      alert(error.message);
    }
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    console.log(editPhoto);

    await Sharing.shareAsync(editPhoto);
  };

  let [selectedImage1, setSelectedImage1] = React.useState(null);

  let openImagePickerAsync1 = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage1({ localUri: pickerResult.uri });
  };

  let [selectedImage2, setSelectedImage2] = React.useState(null);
  let openImagePickerAsync2 = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage2({ localUri: pickerResult.uri });
  };
  let [selectedImage3, setSelectedImage3] = React.useState(null);
  let openImagePickerAsync3 = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage3({ localUri: pickerResult.uri });
  };

  let [selectedImage4, setSelectedImage4] = React.useState(null);
  let openImagePickerAsync4 = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage4({ localUri: pickerResult.uri });
  };

  function SpeciesImageFinder(name) {
    switch (name) {
      //Whales
      case "Blainvilles beaked Whale":
        return (img = Images.whale1);
      case "Blue Whale":
        return (img = Images.whale2);
      case "Bryde's Whale":
        return (img = Images.whale3);
      case "Cuvier's beaked Whale":
        return (img = Images.whale4);
      case "False killer Whale":
        return (img = Images.whale8);
      case "Fin Whale":
        return (img = Images.whale9);
      case "Gervais's beaked Whale":
        return (img = Images.whale7);
      case "Harbour porpoise":
        return (img = Images.whale8);
      case "Humpback Whale":
        return (img = Images.whale9);
      case "Killer or Orca Whale":
        return (img = Images.whale10);
      case "Long-finned pilot Whale":
        return (img = Images.whale11);
      case "Melon-headed Whale":
        return (img = Images.whale12);
      case "Minke Whale":
        return (img = Images.whale13);
      case "North Atlantic Right Whale":
        return (img = Images.whale14);
      case "Northern bottlenose Whale":
        return (img = Images.whale15);
      case "Sei Whale":
        return (img = Images.whale16);
      case "Short-finned pilot Whale":
        return (img = Images.whale17);
      case "Sowerbys beaked Whale":
        return (img = Images.whale18);
      case "Sperm Whale":
        return (img = Images.whale19);
      case "Trues beaked Whale":
        return (img = Images.whale20);

      //Dolphins
      case "Atlantic spotted Dolphin":
        return (img = Images.dolphin1);
      case "Bottlenose Dolphin":
        return (img = Images.dolphin2);
      case "Common Dolphin":
        return (img = Images.dolphin3);
      case "Frasers Dolphin":
        return (img = Images.dolphin4);
      case "Risso's Dolphin":
        return (img = Images.dolphin5);
      case "Rough toothed Dolphin":
        return (img = Images.dolphin6);
      case "Stripped Dolphin":
        return (img = Images.dolphin7);

      default:
        console.log(
          "Something went wrong with image name. Check if the name is the same in both JSONS!!!!"
        );
    }
  }

  return (
    <ImageBackground
      blurRadius={50}
      source={require("../../assets/welcomeimage/welcome2.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.darkerimage}>
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>PostCard</Text>
          <View style={styles.buttonBack}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView scrollEventThrottle={16} /*Scrollview da página toda */>
          <View style={{ flex: 1, paddingTop: 20 }}>
            <Text style={styles.textTitles}>{location} </Text>
            <Text style={styles.textSubTitles}>Your Gallery: </Text>

            <View style={{ height: 150, marginTop: 0 }}>
              <ScrollView horizontal={true}>
                <TouchableOpacity onPress={openImagePickerAsync1}>
                  {selectedImage1 == undefined ? (
                    <Category
                      imageUri={require("../../assets/Icons/addImage.png")}
                    />
                  ) : (
                    <Category imageUri={{ uri: selectedImage1.localUri }} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={openImagePickerAsync2}>
                  {selectedImage2 == undefined ? (
                    <Category
                      imageUri={require("../../assets/Icons/addImage.png")}
                    />
                  ) : (
                    <Category imageUri={{ uri: selectedImage2.localUri }} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={openImagePickerAsync3}>
                  {selectedImage3 == undefined ? (
                    <Category
                      imageUri={require("../../assets/Icons/addImage.png")}
                    />
                  ) : (
                    <Category imageUri={{ uri: selectedImage3.localUri }} />
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={openImagePickerAsync4}>
                  {selectedImage4 == undefined ? (
                    <Category
                      imageUri={require("../../assets/Icons/addImage.png")}
                    />
                  ) : (
                    <Category imageUri={{ uri: selectedImage4.localUri }} />
                  )}
                </TouchableOpacity>
              </ScrollView>
            </View>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <Text style={styles.textTitles}>
                {name} | {boatName}
              </Text>
              <Text style={styles.text}>
                {date} at {time}
              </Text>

              <View style={styles.RatingBox}>
                {editRating != "" ? (
                  <Rating
                    style={{ marginTop: 0, alignSelf: "center" }}
                    readonly
                    showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                    type="star"
                    startingValue={editRating}
                    imageSize={22}
                  ></Rating>
                ) : (
                  <Rating
                    style={{ marginTop: 0, alignSelf: "center" }}
                    readonly
                    showRating /*Podemos apagar se quisermos isto simplesmente imprime o valor do rating */
                    type="star"
                    startingValue={3}
                    imageSize={22}
                  ></Rating>
                )}
              </View>
              <TouchableOpacity
                style={styles.icon}
                onPress={() => openShareDialogAsync()}
              >
                <View style={styles.textBoxSocial}>
                  <Text style={styles.textIcons}>Share on social </Text>
                </View>
              </TouchableOpacity>

              <Text style={styles.textSubTitles}>Your Featured Photo: </Text>

              <View
                style={{
                  width: ITEM_WIDTH / 1.1,
                  height: 300,
                  marginTop: 0,
                  alignSelf: "center",
                }}
              >
                {editPhoto == "" ? (
                  <Image
                    style={styles.image}
                    source={require("../../assets/Trips/imsunset.jpg")}
                  />
                ) : (
                  <Image style={styles.image} source={{ uri: editPhoto }} />
                )}

                {editComment == "" ? (
                  <Text style={styles.textComment} /*Comentário da viagem */>
                    {" "}
                    {comment}
                  </Text>
                ) : (
                  <Text style={styles.textComment}> {editComment}</Text>
                )}
              </View>

              <View style={styles.textBoxPostCard}>
                <Text style={styles.textIcons}>Edit PostCard</Text>

                <View
                  style={{
                    height: 45,
                    width: 50,
                    marginTop: 5,
                    alignSelf: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("EditCard", { tripId: tripId })
                    }
                  >
                    <FontAwesome name="edit" size={50} color="#12AEB7" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.textTitles}> Sighted Species: </Text>

            {sightedSpecies.map((specie, key) => {
              return (
                <View key={key} style={styles.textBoxSpecies}>
                  <Text style={styles.textSightedSpecies} key={key}>
                    {specie.SpeciesName}
                  </Text>

                  <Image
                    style={styles.imageSpecies}
                    source={SpeciesImageFinder(specie.SpeciesName)}
                  />

                  <Text style={styles.text}>
                    First Seen at: {specie.Sighted}
                  </Text>

                  <Text style={styles.text}>
                    Behaviours: {specie.Behaviours}
                  </Text>

                  <Text style={styles.text}>
                    Reactions to boat: {specie.ReactionsToBoat}
                  </Text>
                </View>
              );
            })}

            <Text style={styles.textTitles}>Description: </Text>
            {/*Adicionar descrição*/}
            <Text style={styles.textTitles}>Route: {routetrip} </Text>
            <Image /*Insert route image*/ />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PostCardEdited;

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  textComment: {
    paddingHorizontal: 0,
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
    color: "white",
    lineHeight: 20,
  },
  textSightedSpecies: {
    paddingHorizontal: 25,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    color: "#12AEB7",
    textShadowRadius: 1,
    textShadowColor: "rgba(0, 0, 0, 1)",
  },
  textIcons: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 1)",
  },
  textTitles: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 20,
    margin: 10,
    marginLeft: 0,
    textShadowColor: "rgba(0, 0, 0, 1)",
  },
  textSubTitles: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 20,
    marginTop: 20,
    margin: 10,
    marginLeft: 0,
    textShadowColor: "rgba(0, 0, 0, 1)",
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dddddd",
  },
  imageSpecies: {
    marginTop: 10,
    alignSelf: "center",
    width: ITEM_WIDTH / 1.2,
    height: ITEM_WIDTH / 1.8,
    borderRadius: 15,
  },
  imageCard: {
    resizeMode: "cover",
    borderRadius: 10,
    width: 180,
    height: 150,
  },
  textBox: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    margin: 15,
    borderRadius: 15,
    width: ITEM_WIDTH / 1.1,
  },
  headerbox: {
    width: ITEM_WIDTH,
    paddingTop: 32,
    flex: 1,
  },
  buttonBack: {
    alignSelf: "flex-end",
    width: 35,
    height: 30,
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
    fontSize: 22,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  },
  imageBackground: {
    flex: 1,
  },
  textBoxSocial: {
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    margin: 20,
    borderRadius: 15,
    width: ITEM_WIDTH / 1.1,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1,
  },
  RatingBox: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 15,
    width: ITEM_WIDTH / 1.1,
    height: 95,
    alignSelf: "center",
  },
  textBoxPostCard: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    margin: 20,
    marginTop: 40,
    borderRadius: 15,
    padding: 5,
    width: ITEM_WIDTH / 1.1,
    alignSelf: "center",
    height: 100,
  },
  textBoxSpecies: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginTop: 10,
    borderRadius: 15,
    width: ITEM_WIDTH / 1.1,
    paddingBottom: 10,
    alignSelf: "center",
  },
  imageBackground: {
    flex: 1,
  },
  darkerimage: {},
  icon: {
    flex: 1,
    alignSelf: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
});
