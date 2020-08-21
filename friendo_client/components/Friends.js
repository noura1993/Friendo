import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ApiUrl } from '../ApiUrl';


class Friends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: props.tabProps,
      userId: 0,
      intervalId: null,
      friends: [],
      names: [
        {
          id: 0,
          name: 'Ben',
        },
        {
          id: 1,
          name: 'Susan',
        },
        {
          id: 2,
          name: 'Robert',
        },
        {
          id: 3,
          name: 'Mary',
        }
      ]
    }

    this.updateFriends = this.updateFriends.bind(this);
    this.startChat = this.startChat.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
  }

  componentDidMount() {
    this.updateUserId();
    const intervalId = setInterval(() => this.updateFriends(), 500);
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  updateUserId() {
    fetch(ApiUrl(`user/${this.state.userInfo.userEmail}`))
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) {
          this.setState({ userId: json[0].id });
        }
      })
      .catch((error) => console.error(error))
  }

  updateFriends() {
    fetch(ApiUrl(`friends/${this.state.userId}`))
      .then((response) => response.json())
      .then((json) => {
        const friends = json.map((friend) => {
          return {
            friendshipId: friend.id,
            friendIcon: friend.friend_picture,
            friendName: friend.friend_first_name + ' ' + friend.friend_last_name,
            friendEmail: friend.friend_email,
          }
        })
        this.setState({ friends: friends });
      })
      .catch((error) => console.error(error))
  }

  startChat(receiverEmail, receiverName) {
    this.props.navigation.navigate('Chat', {
      senderEmail: this.state.userInfo.userEmail,
      receiverEmail: receiverEmail,
      senderName: this.state.userInfo.userFirstName + ' ' + this.state.userInfo.userLastName,
      receiverName: receiverName,
    });
  }

  removeFriend(friendshipId) {
    fetch(ApiUrl('friends/' + friendshipId), {
      method: 'DELETE'
    }).then(() => this.updateFriends())
      .catch((error) => console.error(error))
  }

  render() {
    return (
      <>
        {this.state.friends.map((friend, index) => (
          <View key={index} style={styles.container} >
            <View style={styles.userImage}>
            <Image style={styles.iconStyle} source={{ uri: friend.friendIcon}} ></Image> 
            </View>
            <View style={styles.user}>
              <Text>{friend.friendName}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.chatButton} onPress={() => this.startChat(friend.friendEmail, friend.friendName)}>
                <Text style={styles.text}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={() => this.removeFriend(friend.friendshipId)}>
                <Text style={styles.text}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  chatButton: {
    padding: 5,
    paddingBottom: 5,
    backgroundColor: '#00cccc',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    width: 70,
  },
  removeButton: {
    padding: 5,
    paddingBottom: 5,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    width: 70,
  },
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%"
  },
  userImage: {
    width: "10%"
  },
  user: {
    width: "50%"
  },
  buttons: {
    width: "40%",
    flexDirection: 'row',
  },
  text: {
    color: '#fff'
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 5, 
    resizeMode: "cover",
    borderRadius: 50
  }
});

export default Friends;
