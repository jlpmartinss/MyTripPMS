import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import ListItem from "../../ListItem";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const ITEM_WIDTH = Dimensions.get('window').width
//import Whale1 from './Whale1';

//const WhalesStack = createStackNavigator();



export default class WhalesScreen extends React.Component {
    state = {columns:2}

    
    render() {
        const {navigation} = useNavigation;
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
                <Button title="whale1" onPress={() => this.props.navigation.navigate("Whale1")} />
                <TouchableOpacity style={styles.container} 
                onPress = {() => this.props.navigation.navigate('Whale1') }>  
                <Text> ddwd </Text> </TouchableOpacity>   
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