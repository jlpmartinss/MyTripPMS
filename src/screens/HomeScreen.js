import React from "react";
import { View, Text, Button, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "../../ListItem";
import WhalesScreen from "./WhalesScreen";

const ITEM_WIDTH = Dimensions.get('window').width


export default class Home extends React.Component {
    state = { columns: 2 }



    render() {
        const { columns } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={columns}
                    data={[
                        require("../../assets/whale.jpg"),
     
                        require("../../assets/whale.jpg"),

                    ]}
                    renderItem={({ item }) => {
                        return <ListItem itemWidth={ITEM_WIDTH} image={item} />
                    }}
                    keyExtractor={
                        (index) => { return index }
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
    submitText:{
        color:'#FFF',
        fontSize: 18
      },

})