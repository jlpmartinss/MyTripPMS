import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import Data from "./../../jsons/Trips.json";

let ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const AddTripScreen = ({ route, navigation }) => {
  const [idTrip, setIdTrip] = useState("");
  const [array_, setArray] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  var dataAtual = new Date().toLocaleString();

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();

    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + minutes
    );

    getDataArray();
  }, []);

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  const checkTripTime = () => {
    if (Data[idTrip]) {
      var tripTime = Data[idTrip].fullDate;
      console.log("dataatual" + dataAtual);
      console.log("tripTime:" + tripTime);
      if (dataAtual > tripTime) {
        //Alert.alert(idTrip);
        setData();
      } else {
        console.log("Your trip is not over yet!");
        Alert.alert("Your trip is not over yet!");
      }
    } else {
      console.log("This trip id does not exist");
      Alert.alert("This trip id does not exist");
    }
  };

  const setData = async () => {
    if (idTrip.length == 0 || isNaN(idTrip)) {
      Alert.alert("Warning!", "Please write your data");
    } else {
      try {
        var trip = { Id: idTrip };
        await AsyncStorage.setItem("IdNewTrip", JSON.stringify(trip));
        if (!array_.includes(Number(idTrip))) {
          array_.push(Number(idTrip));
        }
        setArray(array_);
        console.log("Add trip", array_);
        setDataArray();
        navigation.navigate("Home");
      } catch (error) {
        console.log(console.error);
      }
    }
  };

  const setDataArray = async () => {
    try {
      await AsyncStorage.setItem("NewArray", JSON.stringify(array_));
    } catch (error) {
      console.log(console.error);
    }
  };

  const getDataArray = () => {
    try {
      AsyncStorage.getItem("NewArray").then((value) => {
        if (value != null) {
          //volta a converter num objeto
          let array_ = JSON.parse(value);
          console.log("array do home", array_);
          setArray(array_);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      blurRadius={50}
      source={require("../../assets/welcomeimage/welcome2.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <ScrollView>
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>Add Trip</Text>
          <View style={styles.buttonBack}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.textSubTitle}>
          {" "}
          Start a Trip or {"\n"} See Your Trips{" "}
        </Text>

        <TextInput
          style={styles.textInput}
          backgroundColor="#FFFFFF"
          placeholder="Enter Your Trip Code"
          onChangeText={(idTrip) => setIdTrip(idTrip)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkTripTime();
          }}
        >
          <Text style={styles.textButton}>Join Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIdTrip("");
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.textButton}>See My Trips</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonBack: {
    alignSelf: "flex-end",
    width: 35,
    height: 30,
    position: "absolute",
    zIndex: 15,
  },
  textInput: {
    padding: 10,
    height: 40,
    width: 150,
    alignSelf: "center",
  },
  textSubTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 150,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerbox: {
    width: ITEM_WIDTH,
    paddingTop: 35,
    padding: 8,
    flex: 1,
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
    minHeight: ITEM_HEIGHT,
  },
  button: {
    width: ITEM_WIDTH / 2,
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "#12AEB7",
  },
  textInput: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    height: 40,
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    textAlign: "center",
  },
});

export default AddTripScreen;
