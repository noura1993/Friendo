import React, { Component } from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import 'react-native-gesture-handler';
import WelcomePageContainer from './containers/WelcomePageContainer';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class Friendo extends Component {
  render() {
    return ( 
        <NavigationContainer>
           
          <Stack.Navigator initialRouteName="WelcomePageContainer">
            <Stack.Screen name="WelcomePage" component={WelcomePageContainer} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="SignUp" component={SignUp} /> 
          </Stack.Navigator>
        </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})
export default Friendo;
