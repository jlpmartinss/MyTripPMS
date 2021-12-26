import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../Images"

//const ITEM_WIDTH = Dimensions.get('window').width


 const Home = ({navigation}) => {
    //state = { columns: 2 }

        //const { columns } = this.state
        return (
            <View style={styles.container}>
             <Image blurRadius = {50} source={Images.trip0} resizeMode="cover" style={styles.imageBackground}> 

            </Image>
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