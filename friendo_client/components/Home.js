import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
        <View style={styles.home}>
            <Text>Hello!</Text>
        </View>
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
