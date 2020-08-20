import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Dimensions, Animated } from 'react-native';
import MapView, { Marker, Animated as AnimatedRegion } from 'react-native-maps';


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height * 0.5;
const CARD_WIDTH = width * 0.8;

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("props log", props);
    this.state = {
      region: {
        latitude: 55.953251,
        longitude: -3.188267,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [{
        coordinate: {
          latitude: 55.943251,
          longitude: -3.188267
        },
        image: require("../assets/FriendoLogo2.png"),
        name: "Jack Friendo",
        age: "95+",
        description: "I have the best mustache :p"
      },
      {
        coordinate: {
          latitude: 55.963251,
          longitude: -3.158267
        },
        image: require("../assets/FriendoLogo2.png"),
        name: "Craig Friendo",
        age: "95+",
        description: "I have the best Guitar :p"
      },
      {
        coordinate: {
          latitude: 55.973251,
          longitude: -3.168267
        },
        image: require("../assets/FriendoLogo2.png"),
        name: "Noura Friendo",
        age: "95+",
        description: "I have the best baloon :p"
      },
      {
        coordinate: {
          latitude: 55.963251,
          longitude: -3.188267
        },
        image: require("../assets/FriendoLogo2.png"),
        name: "Rumen Friendo",
        age: "95+",
        description: "I have the best beard :p"
      },
      {
        coordinate: {
          latitude: 55.953251,
          longitude: -3.209267
        },
        image: require("../assets/FriendoLogo2.png"),
        name: "Ed Friendo",
        age: "95+",
        description: "I have the best eyeglasses :p"
      }],
      icons: {
        logo: {
          uri: require("../assets/FriendoLogo2.png")
        },
        searchIcon: {
          uri: require("../assets/search.png")
        },
      },
      categories: [
        { interest: 'Gaming', uri: require('../assets/gamepad.png'), backgroundColor:'red' },
        { interest: 'Sport', uri: require('../assets/football.png') },
        { interest: 'Art', uri: require('../assets/gallery.png') },
        { interest: 'Gaming', uri: require('../assets/gamepad.png') },
        { interest: 'Sport', uri: require('../assets/football.png') },
        { interest: 'Art', uri: require('../assets/gallery.png') },
      ]
    }

    this.onRegionChange = this.onRegionChange.bind(this);
  }

  onRegionChange(region) {
    this.state.region.setValue(region);
  }


  render() {
    return (
      <>
        <MapView
          style={styles.home}
          region={this.state.region}
        >
          {this.state.markers.map((marker, index) => (
            <Marker coordinate={marker.coordinate} key={index}>
              <Image source={marker.image} style={{ height: 50, width: 50 }} />
            </Marker>
          ))}
          <AnimatedRegion
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          />
        </MapView>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0 }}
          />
          <Image source={this.state.icons.searchIcon.uri} style={{ height: 25, width: 25 }} />
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
            <TouchableOpacity key={index} style={styles.tagsItem}>
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
          contentOffset={{x:0, y:-150}}
          contentInset={{
            top: 150,
            left: 0,
            bottom: 0,
            right: 25
          }}
          
          >
            
          {this.props.usersList.map((marker, index) => (
            <View style={styles.card} key={index}>
              <TouchableOpacity style={styles.chatButton}>
                <Text>Add Friend</Text>
              </TouchableOpacity>
              <Image
                  source={{uri: marker.picture}}
                style={{width: 332, height: 332}}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text>{marker.firstname}</Text>
                <Text>{marker.lastname}</Text>
              </View>
            </View>
          ))}

            {/* <TouchableOpacity style={{backgroundColor: '#000'}}>
                <Text>Chat</Text>
            </TouchableOpacity> */}

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
    bottom:0,
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
  },
  card: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    
    // marginVertical:-100,
    
    height: CARD_HEIGHT,
    width: CARD_WIDTH
  },
  cardImage: {
    width: "60%",
    height: "60%",
    alignSelf: "center",
    zIndex: 0,
    position: "absolute"
  },
  textContent: {
    flex: 2,
    padding: 10
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
export default Home;
