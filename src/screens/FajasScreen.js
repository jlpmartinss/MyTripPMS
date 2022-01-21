import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Images from "../Images";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

const ITEM_WIDTH = Dimensions.get("window").width;

export default function FajasScreen({ route, navigation }) {
  console.log("I'm in Fajas Screen ");

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={50}
        source={require("../../assets/Trips/imfaja.jpg")}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.headerbox}>
          <Text style={styles.textHeader}>Fajãs</Text>
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
          <Image
            style={styles.image}
            source={require("../../assets/Trips/imfaja.jpg")}
          />

          <View style={styles.textBox}>
            <Text style={styles.textTitle}>Summary:</Text>

            <Text style={styles.textNormal}>Duration:{"\n"}- 9H</Text>

            <Text style={styles.textNormal}>
              Interest points:{"\n"}- Câmara de lobos{"\n"}- Largo do Cabo Girão
              {"\n"}- Ribeira Brava{"\n"}- Madalena do Mar{"\n"}- Calheta{"\n"}-
              Jardim do Mar{"\n"}- Paúl do Mar
            </Text>

            <Text style={styles.textNormal}>
              Stopping points:{"\n"}- Paúl do Mar Village
            </Text>

            <Text style={styles.textNormal}>
              Available activities:{"\n"}- Standup paddle{"\n"}- Snorkeling
              {"\n"}- Swimming{"\n"}- Desembarque na vila do Paúl do Mar{"\n"}-
              Snacks + bar{"\n"}- Buffet + 1 drink
            </Text>
          </View>

          <View style={styles.textBox}>
            <Text style={styles.textTitle}>Description</Text>
            <Text style={styles.textNormal}>
              And what if the scenery to the West of Madeira is even more
              incredible?{"\n"}
              {"\n"}
              Reserve your excursion with friends and family on a 9 hour journey
              that you will not forget in a hurry! Passing by Fajã dos Padres,
              we head off on a full day of cliffs and fun. Disembark in Paúl do
              Mar for a quick visit, swimming, standup paddle and snorkeling
              are, of course, on the ‘menu’. And speaking of menu, a full
              delicious Madeiran buffet lunch is served on board after a
              disembark of one hour in Paúl do Mar village.{"\n"}
              {"\n"}
              Amongst the memorable 'Fajãs' are “Fajã do Mar”, “Jardim do Mar”,
              “Paúl do Mar” and “Fajã da Ovelha”.{"\n"}
              {"\n"}
              An itinerary by sea where it is possible to see much of the
              natural beauty and life that our Island has to show.
            </Text>
          </View>

          <View style={styles.textBoxMap}>
            <ReactNativeZoomableView
              maxZoom={1.5}
              minZoom={1}
              zoomStep={0.5}
              initialZoom={1}
              captureEvent={true}
            >
              <Text style={styles.textTitle}>Route</Text>
              <Image
                style={styles.imageRoute}
                source={require("../../assets/Trips/mapa_fajas.png")}
              />
              <Text style={styles.zoomText}>Double tap to zoom</Text>
            </ReactNativeZoomableView>
          </View>

          <View style={styles.textBox}>
            <Text style={styles.textTitle}>Crew:</Text>

            <Text style={styles.textTitle}>Skippers:</Text>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Luana Mendonça:</Text>
                <Text style={styles.textCrew}>
                  Luana is an experienced skipper with more than 5000 sailing
                  hours. {"\n"}She will take you on the most beautiful Trip you
                  have ever seen.{" "}
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/Luana.jpg")}
              />
            </View>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Marcelo Sousa:</Text>
                <Text style={styles.textCrew}>
                  Marcelo is an experienced skipper with more than 5000 sailing
                  hours. {"\n"}Some say he looks like a president of some kind.{" "}
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/marcelo-rebelo-de-sousa-foto-rodrigo-antunes-lusa1315263edefaultlarge_1024.jpg")}
              />
            </View>

            <Text style={styles.textTitle}>Biologists:</Text>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>João Martins:</Text>
                <Text style={styles.textCrew}>
                  João is a biologist that knows all about the waters of Madeira
                  Island like the palm of his hand. He knows every specie and
                  will tell you all about it.{" "}
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/Joao.jpg")}
              />
            </View>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>António Costa:</Text>
                <Text style={styles.textCrew}>
                  António might look like a famous portuguese politician but we
                  guarentee he is not. He knows every specie and will tell you
                  all about it.{" "}
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/QvhnkTYJ_400x400.png")}
              />
            </View>

            <Text style={styles.textTitle}>Tourist Guides:</Text>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Francisco Vasconcelos:</Text>
                <Text style={styles.textCrew}>
                  Francisco is your tour guide. He will guide you through your
                  trip and identify all the important landmarks.
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/Francisco.jpg")}
              />
            </View>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Angelina Jolie:</Text>
                <Text style={styles.textCrew}>
                  Angelina is your tour guide. In the Past she was an actress
                  but now she is a full time tour guide. Don't mention her past
                  life. She might not like it.
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/angelina-jolie.jpg")}
              />
            </View>

            <Text style={styles.textTitle}>Barmans:</Text>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Marcos Silva:</Text>
                <Text style={styles.textCrew}>
                  Marcos will be your barman. He knows everything about your
                  drinks. You can be assured that you will serve you very well.
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/Marcos.jpg")}
              />
            </View>

            <View style={styles.containerHorizontal}>
              <View width={ITEM_WIDTH / 2 - 30}>
                <Text style={styles.textSubTitle}>Brad Pitt:</Text>
                <Text style={styles.textCrew}>
                  Brad will be your barman. He knows everything about your
                  drinks. Some say he was once married to Angelina and that he
                  is also an actor. If you ask about his last movie he might
                  throw you overboard.
                </Text>
              </View>
              <Image
                style={styles.imageFace}
                source={require("../../assets/Crew/Brad-Pitt-2.jpg")}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "grey",
  },
  containerHorizontal: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    color: "red",
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
  image: {
    alignSelf: "center",
    marginTop: 15,
    flex: 1,
    width: ITEM_WIDTH - 30,
    height: ITEM_WIDTH / 1.5,
    borderRadius: 15,
  },
  imageRoute: {
    width: ITEM_WIDTH - 30,
    height: ITEM_WIDTH / 1.5,
  },
  zoomText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginHorizontal: 10,
    marginVertical: 10,
    textShadowRadius: 8,
  },
  imageFace: {
    flex: 1,
    height: ITEM_WIDTH / 2.5,
    backgroundColor: "white",
    borderRadius: 15,
  },
  imageBackground: {
    flex: 1,
  },
  textTitle: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textSubTitle: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    marginRight: 10,
  },
  textNormal: {
    alignSelf: "auto",
    marginHorizontal: 15,
    color: "white",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "justify",
    fontSize: 15,
    lineHeight: 20,
  },
  textCientific: {
    marginLeft: 20,
    marginHorizontal: 10,
    color: "white",
    textAlign: "justify",
    fontSize: 15,
  },
  textCrew: {
    flex: 1,
    color: "white",
    textAlign: "justify",
    fontSize: 14,
    marginRight: 10,
    lineHeight: 20,
  },
  textBox: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.33)",
    margin: 15,
    paddingBottom: 10,
    borderRadius: 15,
  },
  textBoxMap: {
    flex: 1,
    margin: 15,
    borderRadius: 15,
    backgroundColor: "rgba(0, 200, 255, 0.33)",
    overflow: "hidden",
  },
});
