import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import ListItem from "../../ListItem";

const ITEM_WIDTH = Dimensions.get('window').width

export default class Whale1 extends React.Component {
    state = {columns:2}


    render() {
        const {columns} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Whale1</Text>   
                <Image style={styles.image} source={require("../../assets/whale.jpg")}/>             
                <Text style={styles.textNormal}>Nome científico: whale1</Text>
                <Text style={styles.textNormal}>Peso médio: whale1 kg </Text>
                <Text style={styles.textNormal}>Comprimento médio: whale1 m</Text>
                <Text style={styles.textNormal}>Classificação: whale1 class</Text>
                <Text style={styles.textNormal}>Descrição: A whale1 é uma das blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla  </Text>
            </View >
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8fcbbc',

    },
    image: {
        padding: 50,    
        marginVertical: 10,    
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: 'black',
        fontSize: 24,
        marginHorizontal: 10,
        marginVertical: 1,
    },
    textNormal: {
        
        marginHorizontal: 10,
        //color: 'black',
    }

})