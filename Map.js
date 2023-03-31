import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

// Geolocation.setRNConfiguration(config);

export default class Mapss extends Component {


    constructor() {
        super()
        this.state = {
            latitude: 31.101283,
            longitude: 30.946070,
            error: null

        }
    }

    componentDidMount() {
        this.HandleUserLocation()

    }

    HandleUserLocation = () => {

        Geolocation.getCurrentPosition(pos => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                error: null

            })
        },
            err => {
                this.setState({ error: err.message })
            }, {
            enableHighAccuracy: true
        }
        );
    }



    render() {
        return (

            <MapView style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 31.100559,
                    longitudeDelta: 30.943690,
                }}

                onPress={(Reg) => {

                    // console.log(Reg.nativeEvent.position)
                    this.setState({
                        latitude: Reg.nativeEvent.coordinate.latitude,
                        longitude: Reg.nativeEvent.coordinate.longitude,


                    })

                }}
            >


                <Marker
                    coordinate={this.state}
                />
            </MapView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        position: "absolute",

        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});




