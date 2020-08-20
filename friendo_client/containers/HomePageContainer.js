import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Friends from '../components/Friends';

const Tab = createBottomTabNavigator();

const HomePageContainer = (props) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Home" children={() => <Home {...props} tabProps={props.route.params} usersList={props.usersList} /> } />
        <Tab.Screen name="Friends" children={() => <Friends {...props} tabProps={props.route.params} /> } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomePageContainer;
