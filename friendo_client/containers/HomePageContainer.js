import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Friends from '../components/Friends';

const Tab = createBottomTabNavigator();

const HomePageContainer = (props) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="HomePage" >
        <Tab.Screen name="HomePage" children={() => <Home tabProps={props.route.params} /> } />
        <Tab.Screen name="Friends" children={() => <Friends tabProps={props.route.params} /> } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomePageContainer;
