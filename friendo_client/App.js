import React, { Component } from 'react';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import WelcomePageContainer from './containers/WelcomePageContainer';
import { Text, View, StyleSheet } from 'react-native';
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
          {/* <View style={styles.app}>
            <LinearGradient style={styles.linearGradient} colors={['#ff6666', '#df80ff', '#668cff', '#66ffff']}>
            </LinearGradient>
          </View> */}
        </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  linearGradient: {
    flex: 1
  }
})
export default Friendo;
