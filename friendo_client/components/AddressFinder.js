import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import MapView, { Animated as AnimatedRegion, Marker } from 'react-native-maps';

class AddressFinder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: "",
            region: {
                latitude: 55.953251,
                longitude: -3.188267,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            icons: {
                logo: {
                    uri: require("../assets/FriendoLogo2.png")
                },
                searchIcon: {
                    uri: require("../assets/search.png")
                },
            }
        }

        this.findLocation = this.findLocation.bind(this);
    }

    findLocation() {
        fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6ce4a2cf52c0d9c2ff40a496f6f66158&q=${this.state.search}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                if (json.length > 0) {
                    let lat = json[0].lat;
                    let lon = json[0].lon;
                    this.setState({
                        region: {
                            latitude: parseFloat(lat),
                            longitude: parseFloat(lon),
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                    })
                } else {
                    alert("Couldn't find any matches for this address");
                }
            })
            .catch((error) => console.error(error))
    }

    render() {
        return (
            <>
                <MapView
                    style={styles.home}
                    region={this.state.region}
                >
                    <AnimatedRegion
                        region={this.state.region}
                        onRegionChange={this.onRegionChange}
                    />
                </MapView>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search here"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        onChangeText={(search) => this.setState({ search: search })}
                        style={{ flex: 1, padding: 0 }}
                    />
                    <TouchableOpacity activeOpacity={.5} onPress={this.findLocation}>
                        <Image source={this.state.icons.searchIcon.uri} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 7
    }
});

export default AddressFinder;
