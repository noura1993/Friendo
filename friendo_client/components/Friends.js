import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.friends}>
            <Text>Friends!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    friends: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Friends;
