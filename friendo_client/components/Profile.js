import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FriendoButton from './FriendoButton';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.navigation.navigate('Friendo');
    this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Friendo' }],
      });
  }

  render() {
    return (
        <View style={styles.profile}>
            <FriendoButton
                text="Log Out"
                buttonExternalStyles={styles.buttonExtraStyle}
                onPressMethod={this.handleLogOut}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default Profile;
