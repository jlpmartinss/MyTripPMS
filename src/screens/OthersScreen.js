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
  ImageBackground,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

let ITEM_WIDTH = Dimensions.get("window").width;
let ITEM_HEIGHT = Dimensions.get("window").height;

export default function OthersScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={50}
      source={require("../../assets/Others/1Others.jpg")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.headerbox}>
        <Text style={styles.textHeader}>Others</Text>
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
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 6</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 9</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 10</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 11</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 12</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Image
                style={styles.image}
                source={require("../../assets/Others/1Others.jpg")}
              />
              <Text style={styles.textSubTitle}>Other 13</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    //alignItems: 'center',
    flexDirection: "row",
    flexWrap: "wrap",
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
  item: {
    padding: 5,
    flex: 1,
    fontSize: 20,
  },
  textSubTitle: {
    position: "absolute",
    color: "white",
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowRadius: 8,
  },
  image: {
    flex: 1,
    width: ITEM_WIDTH / 2.15,
    height: ITEM_WIDTH / 3.15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  imageBackground: {
    flex: 1,
  },
});
