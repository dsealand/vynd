import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import forYou from '../screens/forYou/forYou';
import discover from '../screens/discover/discover';
import cart from '../screens/cart/cart';

import Colors from '../colors';

const BottomTab = createBottomTabNavigator();

const tabsOptions = {activeTintColor: Colors.black,
                    inactiveTintColor: Colors.lightGrey,
                    showLabel: false,
                    labelStyle: {fontSize:15, fontWeight:'bold'},
                    style: {backgroundColor: Colors.culture, borderTopWidth: 0}};

const Tab = () => (
    <NavigationContainer>
        <BottomTab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'For You') {
                    iconName = 'ios-home';
                }
                if (route.name === 'Discover') {
                    iconName = 'ios-browsers';
                }
                if (route.name === "Cart") {
                    iconName = 'ios-cart';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        initialRouteName="For You"
        tabBarOptions={tabsOptions}>
            <BottomTab.Screen name="For You" component={forYou} />
            <BottomTab.Screen name="Discover" component={discover} />
            <BottomTab.Screen name="Cart" component={cart} />
        </BottomTab.Navigator>
    </NavigationContainer>
)

export default Tab;