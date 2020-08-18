import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import MapView, { AnimatedRegion, Animated, Marker} from 'react-native-maps';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 55.953251,
        longitude: -3.188267,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      marker: {
        latitude: 55.953251,
        longitude: -3.188267
      },
      icons: {
        uri: require("../assets/FriendoLogo2.png")
      },
      searchIcon: {
        uri: require("../assets/search.png")
      }
    }

    this.onRegionChange = this.onRegionChange.bind(this);
  }
 
  onRegionChange(region) {
    this.state.region.setValue(region);
  }


  render() {
    return (
      <>
      <MapView 
        style={styles.home}
        region={this.state.region}
      > 
      <Marker coordinate={this.state.marker}>
        <Image source={this.state.icons.uri} style={{height: 50, width:50 }} />
      </Marker>
      <Animated
        region={this.state.region}
        onRegionChange={this.onRegionChange}
       />
      </MapView>
       <View style={styles.searchBar}>
         
       <TextInput 
         placeholder="Search here"
         placeholderTextColor="#000"
         autoCapitalize="none"
         style={{flex:1,padding:0}}
       />
        <Image source={this.state.searchIcon.uri} style={{height: 25, width:25 }} />
       {/* <Ionicons name="ios-search" size={20} /> */}
     </View>
     </>
    );
  }
}

const styles = StyleSheet.create({
    home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  searchBar: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  }
});
export default Home;