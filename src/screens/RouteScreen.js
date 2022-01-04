import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import { Permissions } from 'expo'
import MapView from 'react-native-maps';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 29.9990674;
const LONGITUDE = -90.0852767;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function RouteScreen({ provider }){
    const [region, setRegion] = useState({
        latitude: LATITUDE,    // initial location latitude
        longitude: LONGITUDE,  // initial location longitude
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    return (
       
            <MapView
                provider={provider}
                style={styles.map}
                initialRegion={region}
                zoomTapEnabled={false}
            ></MapView>
       
    );

}



const styles = StyleSheet.create({ 
    map: {
        ...StyleSheet.absoluteFillObject,
      },
})
