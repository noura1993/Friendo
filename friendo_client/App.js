import React, { useEffect, useState, Fragment } from 'react';
import { Text, View, ActivityIndicator, FlatList, Image, StyleSheet, Button } from 'react-native';
import { ApiUrl } from './ApiUrl';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';
import Profile from './components/Profile';
import { navigationRef, navigate } from './RootNavigation';
import Chat from './components/Chat';
import ChatTest from './components/ChatTest';

const Stack = createStackNavigator();

const Friendo = ({ navigation }) => {
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
    return fetch(ApiUrl(endpointName), requestOptions)
    .then((response) => {
      // console.log(response.text());
      response.text();
    })
    // .then((json) => {
    //   console.log(json);
    //   return json
    //   //setter(json)
    // })
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
    postAPI("users/create", data).then(() => {
      navigate("Friendo")
    })
    .catch(console.error);
  }
  
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Friendo" >
        <Stack.Screen name="Friendo" component={WelcomePageContainer} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} submitFunction={signUpSubmit} propTest="prop passing working"/>}
        </Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} /> 
        <Stack.Screen name="ChatTest" component={ChatTest} /> 
        <Stack.Screen name="Chat" component={Chat} /> 
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
      
      
      