import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import ListItem from "../../ListItem";

const ITEM_WIDTH = Dimensions.get('window').width

export default class WhalesScreen extends React.Component {
    state = {columns:2}


    render() {
        const {columns} = this.state
        return (
            <View style={styles.container}>
                <FlatList
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
                    renderItem={({item}) => {
                        return <ListItem itemWidth={ITEM_WIDTH/columns} image={item} />
                    }}
                    keyExtractor={
                        (index)=> {return index}
                    }
                />
            </View >
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8fcbbc'
    },
   
})