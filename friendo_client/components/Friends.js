import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ApiUrl } from '../ApiUrl';


class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: props.tabProps,
      friends: []
    }

    this.updateFriends = this.updateFriends.bind(this);
    this.startChat = this.startChat.bind(this);
  }

  componentDidMount() {
    this.updateFriends();
  }

  updateFriends() {
    fetch(ApiUrl(`friends/${this.state.userInfo.userId}`))
      .then((response) => response.json())
      .then((json) => {
        const friends = json.map((friend) => {
          return {
            friendIcon: friend.friend_picture,
            friendName: friend.friend_first_name + ' ' + friend.friend_last_name,
            friendEmail: friend.friend_email,

          }
        })
        this.setState({ friends: friends});
      })
      .catch((error) => console.error(error))
  }

  startChat(receiverEmail, receiverName) {
    this.props.navigation.navigate('Chat', {
      senderEmail: this.state.userInfo.userEmail,
      receiverEmail: receiverEmail,
      senderName: this.state.userInfo.userFirstName + ' ' + this.state.userInfo.userLasttName,
      receiverName: receiverName,
    });
  }

  render() {
    return (
      <View style={styles.friends}>
        {this.state.friends.map( (friend) => (
          <View>
            <Image source={friend.friendIcon} style={{ height: 10, width: 10 }} />
            <Text>{friend.friendName}</Text>
            <TouchableOpacity onPress={() => this.startChat(friend.friendEmail, friend.friendName)}>
              <Text>Chat!</Text>
            </TouchableOpacity>
          </View>
        ))}
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
