import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Button } from 'react-native';
import { ApiUrl } from './ApiUrl';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';
import Profile from './components/Profile';

const Stack = createStackNavigator();

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
  
  postAPI = (endpointName, data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(ApiUrl(endpointName), requestOptions)
    .then((response) => {
      console.log(response.text());
      response.json();
    })
    .then((json) => {
      console.log(json);
      //setter(json)
    })
    .catch((error) => console.error(error))
//    .finally(() => setLoading(false))
  }
  
  useEffect(() => {
    accessAPI('users', setUsersList)
    accessAPI('interests', setInterests)
  }, []);
  
  styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50
    }
  });
  
  signUpSubmit = (data) => {
    console.log("signing up with data:")
    console.log(data)
    postAPI("users/create", data);
  }
  
  return ( 
    <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator initialRouteName="Friendo" >
    <Stack.Screen name="Friendo" component={WelcomePageContainer} />
    <Stack.Screen name="LogIn" component={LogIn} />
    <Stack.Screen name="SignUp">
    {props => <SignUp {...props} submitFunction={signUpSubmit} propTest="prop passing working"/>}
    </Stack.Screen>
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
      
      
      