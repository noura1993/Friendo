import React, { Component } from 'react';
import { ApiUrl } from '../ApiUrl'
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import MapView, { Marker, Animated as AnimatedRegion } from 'react-native-maps';
import FriendsCards from './FriendsCards';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.2;
const CARD_WIDTH = width * 0.6;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      userInfo: props.tabProps,
      userId: 0,
      usersList: [],
      currentFriendsIds: [],
      region: {
        latitude: 55.953251,
        longitude: -3.188267,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      icons: {
        logo: {
          uri: require("../assets/FriendoLogo2.png")
        },
        searchIcon: {
          uri: require("../assets/search.png")
        },
      },
      categories: [
        { interest: 'ALL', uri: require('../assets/all.png') },
        { interest: 'Gaming', uri: require('../assets/gamepad.png') },
        { interest: 'Sport', uri: require('../assets/football.png') },
        { interest: 'Art', uri: require('../assets/gallery.png') },
        { interest: 'Travelling', uri: require('../assets/travelling.png') }
      ]
    }

    this.onRegionChange = this.onRegionChange.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
    this.findLocation = this.findLocation.bind(this);
    this.getUsersByIntrest = this.getUsersByIntrest.bind(this);

    this.updateUserId();
  }

  componentDidMount() {
    this.setState( {usersList: this.props.usersList});
  }

  getUsersByIntrest(category) {
    fetch(ApiUrl(category.interest === 'ALL' ? 'users/' : `usersByInterest/${category.interest}`))
      .then((response) => response.json())
      .then((json) => {
        this.setState({ usersList: json });
      })
      .catch((error) => console.error(error))
  }

  findLocation() {
    fetch(`https://us1.locationiq.com/v1/search.php?key=pk.6ce4a2cf52c0d9c2ff40a496f6f66158&q=${this.state.search}&format=json`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length > 0) {
          let lat = json[0].lat;
          let lon = json[0].lon;
          this.setState({
            region: {
              latitude: parseFloat(lat),
              longitude: parseFloat(lon),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            },
            isValid: true
          })
        } else {
          alert("Couldn't find any matches for this address");
        }
      })
      .catch((error) => console.error(error))
  }

  onRegionChange(region) {
    this.setState({ region: region });
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

  render() {
    return (
      <>
        <MapView
          style={styles.home}
          region={this.state.region}
        // onRegionChange={this.onRegionChange}
        >
          {this.state.usersList.filter((marker) => marker.id != this.state.userId).map((marker, index) => (
            <Marker coordinate={{ latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude) }} key={index}>
              <Image source={{ uri: marker.picture }} style={{ height: 50, width: 50, borderRadius: 50 }} />
            </Marker>
          ))}
          <AnimatedRegion
          // region={this.state.region}
          />
        </MapView>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(search) => this.setState({ search: search })}
            style={{ flex: 1, padding: 0 }}
          />
          <TouchableOpacity activeOpacity={.5} onPress={this.findLocation}>
            <Image source={this.state.icons.searchIcon.uri} style={{ height: 25, width: 25 }} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.tagsScrollView}
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 25
          }}
        >
          {this.state.categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.tagsItem} onPress={() => this.getUsersByIntrest(category)}>
              <Image style={styles.iconStyle} source={category.uri} />
              <Text>{category.interest}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Animated.ScrollView //Cards
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          // style={styles.bottomScrollView}
          pagingEnabled
          snapToInterval={CARD_WIDTH + 25}
          snapToAlignment="center"
          decelerationRate="fast"
          directionalLockEnabled="true"
          disableIntervalMomentum="true"


          style={styles.scrollView}
          contentOffset={{ x: 0, y: -70 }}
          contentInset={{
            top: 70,
            left: 0,
            bottom: 0,
            right: 25
          }}
        >
          <FriendsCards userId={this.state.userId} userInfo={this.state.userInfo} usersList={this.state.usersList}></FriendsCards>
        </Animated.ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 7
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: -50,
  },
  tagsScrollView: {
    position: 'absolute',
    top: 90,
    paddingHorizontal: 10
  },
  bottomScrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10
  },
  tagsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    height: 35
  },
  tagsIcon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 18,
    height: 18,
    marginRight: 5
  }
});
export default Home;
