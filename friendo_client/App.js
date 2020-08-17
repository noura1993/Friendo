import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LaunchContainer from './containers/LaunchContainer';
// import PageContainer from './containers/PageContainer';

class Friendo extends Component {
  render() {
    return (
      <View style={styles.app}>
        <LinearGradient style={styles.linearGradient} colors={['#ff6666', '#df80ff', '#668cff', '#66ffff']}>
          <LaunchContainer />
        {/* <PageContainer/> */}
        </LinearGradient>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  linearGradient: {
    flex: 1
  }
})
export default Friendo;
