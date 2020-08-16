import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LaunchContainer from './containers/LaunchContainer';
import PageContainer from './containers/PageContainer';

class Friendo extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello,</Text>
        <LaunchContainer/>
        {/* <PageContainer/> */}
      </View>
    )
  }
  
}
export default Friendo;
