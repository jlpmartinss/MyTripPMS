import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Images from "../Images";

let ITEM_WIDTH = Dimensions.get("window").width;

export default function TripListScreen({ navigation }) {
  console.log("I'm in TripList Screen");

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={50}
        source={require("../../assets/welcomeimage/welcome2.png")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>Routes</Text>
        </View>

        <ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("WhaleWatching")}
          >
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Trips/imcetaceos.jpg")}
              />
              <Text style={styles.textSubTitle}>Whale Watching</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Desertas")}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Trips/imdesertas.jpg")}
              />
              <Text style={styles.textSubTitle}>Desertas Island</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Fajas")}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Trips/imfaja.jpg")}
              />
              <Text style={styles.textSubTitle}>Fajãs</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Sunset")}>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Trips/imsunset.jpg")}
              />
              <Text style={styles.textSubTitle}>Sunset</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    marginTop: 15,
    padding: 5,
    flex: 1,
    fontSize: 20,
  },
  textSubTitle: {
    position: "absolute",
    color: "white",
    marginHorizontal: 10,
    marginVertical: 25,
    marginLeft: 30,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 8,
    fontSize: 18,
  },
  headerbox: {
    width: ITEM_WIDTH,
    paddingTop: 32,
    flex: 1,
    fontSize: 20,
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
  image: {
    marginTop: 15,
    marginLeft: 15,
    flex: 1,
    width: ITEM_WIDTH - 35,
    height: ITEM_WIDTH / 1.5,
    borderRadius: 15,
  },
  imageBackground: {
    flex: 1,
  },
});
