import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.profile}>
            <Text>Profile!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Profile;
