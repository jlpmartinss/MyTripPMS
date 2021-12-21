import { Touchable, Image, Text, View,StyleSheet } from "react-native";
import React, {Component } from 'react';
import { Animated, TouchableWithoutFeedback } from "react-native-web";


export default class ListItem extends React.Component{
    state = {
        animatePress: new Animated.Value(1)

    }

    render() {
        const {itemWidth} = this.props
        return (

                <View>
                    <Image style={{ flex:1, width: itemWidth -10, height: 100, margin:5, }} source={this.props.image}></Image>
                    <Text style={styles.viewTextStyle}> Whale </Text>
                </View>

        )
    }

   
}
const styles = StyleSheet.create({
    viewTextStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',

    }
    

})