import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Friends from '../components/Friends';

const Tab = createBottomTabNavigator();

const HomePageContainer = (homePageContainerProps) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home" >
        <Tab.Screen name="Home" >
          {props => (<Home {...props} usersList={homePageContainerProps.usersList}/>)}
          </Tab.Screen>
        <Tab.Screen name="Friends" component={Friends} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomePageContainer;
