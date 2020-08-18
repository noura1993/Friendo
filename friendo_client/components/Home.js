import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MapView, { AnimatedRegion, Animated, Marker} from 'react-native-maps';
// import logo from '../assets/FriendoLogo2.png';

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
      }
      
    }

    this.onRegionChange = this.onRegionChange.bind(this);
  }
 
  
  onRegionChange(region) {
    this.state.region.setValue(region);
  }


  render() {
    return (
      <MapView 
        style={styles.home}
        region={this.state.region}
      > 
      <Marker coordinate={this.state.marker}>
        <Image source={require('../assets/FriendoLogo2.png')} style={{height: 35, width:35 }} />
      </Marker>
      <Animated
        region={this.state.region}
        onRegionChange={this.onRegionChange}
       />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
    home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
