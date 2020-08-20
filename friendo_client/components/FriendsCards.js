import React, { Component } from 'react';
import { ApiUrl } from '../ApiUrl'
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import MapView, { Marker, Animated as AnimatedRegion } from 'react-native-maps';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.5;
const CARD_WIDTH = width * 0.8;

class FriendsCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 0,
            currentFriendsIds: [],
            intervalId: null
        }

        this.addFriendship = this.addFriendship.bind(this);
        this.updateFriends = this.updateFriends.bind(this);
        this.updateUserId = this.updateUserId.bind(this);

        this.updateFriends();
    }

    componentDidMount() {
        this.updateFriends();

        const intervalId = setInterval(() => this.updateFriends(), 500);
        this.setState({ intervalId: intervalId});
    }

    componentWillUnmount() {
        if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
        }
    }

    updateUserId() {
        return fetch(ApiUrl(`user/${this.props.userInfo.userEmail}`))
          .then((response) => response.json())
          .then((json) => {
            this.setState({ userId: json[0].id });
          })
          .catch((error) => console.error(error))
      }

    addFriendship(friendId) {
        fetch(ApiUrl('friends'), {
            method: 'POST',
            body: JSON.stringify({
                userId: this.state.userId,
                friendId: friendId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.updateFriends())
    }

    updateFriends() {
        this.updateUserId().then(() => {
            fetch(ApiUrl(`friends/${this.state.userId}`))
            .then((response) => response.json())
            .then((json) => {
                const currentFriendsIds = json.map((friend) => {
                    return friend.friend_id
                });
                this.setState({ currentFriendsIds: currentFriendsIds });
            })
            .catch((error) => console.error(error))
        })
    }

    render() {
        return (
            <>
                {this.props.usersList.filter((marker) => marker.id != this.state.userId).map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <TouchableOpacity style={[styles.chatButton, { backgroundColor: this.state.currentFriendsIds.includes(marker.id) ? "rgba(255,255,255, 0.7)" : "#668cff" }]} disabled={this.state.currentFriendsIds.includes(marker.id)} onPress={() => this.addFriendship(marker.id)}>
                            <Text>{this.state.currentFriendsIds.includes(marker.id) ? "Friend" : "Add Friend"}</Text>
                        </TouchableOpacity>
                        <Image
                            source={{ uri: marker.picture }}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={styles.textContent}>
                            <Text>{marker.firstname + ' ' + marker.lastname}</Text>
                            <Text>Age: {marker.age}</Text>
                            <Text>Interested in: {marker.interest}</Text>
                            <Text>Bio: {marker.bio}</Text>
                        </View>
                    </View>
                ))}
            </>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginHorizontal: 10,
        // marginVertical:-100,
        flex: 2,

        height: 500,
        width: CARD_WIDTH
    },
    cardImage: {
        width: 332,
        height: 332,
        alignSelf: "center",
        zIndex: 0,
        // position: "absolute",
        borderRadius: 4,
        // flex: 1

    },
    textContent: {
        flex: 2,
        padding: 10,
        zIndex: 0,
        position: "relative"
    },
    chatButton: {
        backgroundColor: 'rgba(255,255,255, 0.7)',
        width: 120,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 280,
        paddingVertical: 11,
        paddingHorizontal: 22,
        borderRadius: 10,
        zIndex: 1,
        position: "absolute",
        fontWeight: "700"

    }
});

export default FriendsCards;
