import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Search from '../components/Search';
import Friends from '../components/Friends';

const Tab = createBottomTabNavigator();

const HomePageContainer = () => {
    return (
       <NavigationContainer independent={true}>
          <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Friends" component={Friends} />
          </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomePageContainer;
