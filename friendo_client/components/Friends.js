import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: props.tabProps
    }
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
