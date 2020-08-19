import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Animated } from 'react-native';
import { ApiUrl } from './ApiUrl';

const Friendo = () => {
  const [isLoading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [interests, setInterests] = useState([{}]);

  accessAPI = (endpointName, setter) => {
    fetch(ApiUrl(endpointName))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setter(json)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    accessAPI('users', setUsersList)
    accessAPI('interests', setInterests)
  }, []);

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50
    }
  });


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello Bambino</Text>
      {
        isLoading ?
          <ActivityIndicator />
          : (
            <Fragment>
              <FlatList
                data={usersList}
                keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                  <Fragment>

                    <Text>{item.firstname}</Text>

                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: item.picture
                      }}
                    />

                  </Fragment>
                )}
              />

            </Fragment>
          )
      }
    </View>
  )
import React from 'react';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { Button } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';
import Profile from './components/Profile';

const Stack = createStackNavigator();

const Friendo = () => {
    return ( 
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator initialRouteName="Friendo" >
          <Stack.Screen name="Friendo" component={WelcomePageContainer} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} /> 
          <Stack.Screen name="Profile" component={Profile} /> 
          <Stack.Screen name="Home" component={HomePageContainer} 
            options={({ navigation }) => ({ 
              headerLeft: null,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Profile')}
                  title="Profile"
                  color="#00cc00" /> 
            )})}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Friendo;


