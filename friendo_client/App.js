import React, { Component } from 'react';
import WelcomePageContainer from './containers/WelcomePageContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomePageContainer from './containers/HomePageContainer';
import Profile from './components/Profile';

const Stack = createStackNavigator();

class Friendo extends Component {
  constructor(props) {
    super(props);

  }

  render() {
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
}

export default Friendo;


