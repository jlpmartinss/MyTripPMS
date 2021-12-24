import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


//const ITEM_WIDTH = Dimensions.get('window').width


 const Home = ({navigation}) => {
    //state = { columns: 2 }

        //const { columns } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am screen1</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Whale1", { msg: "From Screen Home" })}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Click Me!</Text>
            </TouchableOpacity>
            </View >
        );
    }
  
export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8fcbbc'
    },
    submitText: {
        color: '#FFF',
        fontSize: 18
    },
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    text:{
        color:'#000',
        fontWeight:'700',
        fontSize:30
    },
    button:{
        backgroundColor:'#0275d8',
        paddingVertical: 5,
        paddingHorizontal: 10
        
    },
    buttonText:{
        color:'#fff',
        fontSize:25
    }
})