import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null
    }

    this.getInitialState = this.getInitialState.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
  }
 
  getInitialState() {
    return {
      region: new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }),
    };
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }

  render() {
    return (
      <MapView style={styles.home}> 
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
