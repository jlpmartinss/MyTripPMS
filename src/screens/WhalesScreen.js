import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import Images from "./Images"


let ITEM_WIDTH = Dimensions.get('window').width;
let ITEM_HEIGHT = Dimensions.get('window').height;
//import Whale1 from './Whale1';

//const WhalesStack = createStackNavigator();

const WhalesScreen = ({ navigation }) => {
    //state = { columns: 2 }


    //render() {
    // const { navigation } = useNavigation;
    // const { columns } = this.state
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <FlatList
                    numColumns={columns}
                    data={[
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),
                        require("../../assets/whale.jpg"),

                    ]}
                    renderItem={({ item }) => {
                        return <ListItem itemWidth={ITEM_WIDTH / columns} image={item} />
                    }}
                    keyExtractor={
                        (index) => { return index }
                    }
                /> */
                    Images.map((image, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Whale1')}>
                            <Image source={image.url} style={{ height: ITEM_HEIGHT / 3, width: ITEM_WIDTH / 3 - 6, borderRadius: 10, margin: 2 }} />

                        </TouchableOpacity>
                    ))

                }
                {/* <TouchableOpacity style={styles.container}
                    onPress={() => this.props.navigation.navigate('Whale1')}>
                    <Text style={styles.button}> ddwd </Text>
                </TouchableOpacity> */}
            </View >
        </ScrollView>
    );
}
//}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        color: 'white',
        fontSize: 28,
        marginHorizontal: 10,
        marginVertical: 1,
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowRadius: 8
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }

})

export default WhalesScreen