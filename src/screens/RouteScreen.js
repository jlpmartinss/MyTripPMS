import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
//import { Permissions } from 'expo'
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 29.9990674;
const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class RouteScreen extends React.Component {
    state = {
        latitude: null,
        longitude: null,
    }

    async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)
        Geolocation.getCurrentPosition(info => console.log(info));


        if (status !== 'granted') {
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
            (error) => console.log('Error:', error)
        )
    }

    render() {

        return (
            <MapView
                showsUserLocation={true}
                style={{ flex: 1 }}
                initialRegion={{
                    // latitude,
                    // longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            ></MapView>
        );

    }

}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})
