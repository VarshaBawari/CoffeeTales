import React, { Component } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer, } from 'react-navigation';
import Home from './home';
import CoffeePedia from './coffeePedia';
import Locator from './coffeeLocator';
import Profile from './profile';
import styles from '../styles'


const Tabs = createMaterialTopTabNavigator({
    "Coffee Room": {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image source={require('../../../assets/ic_table.png')} style={{ width: 25, height: 25, tintColor: focused ? "white" : "gray" }} />

            },
        },
    },

    "Store Locator": {
        screen: Locator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image source={require('../../../assets/ic_shop.png')} style={{ ...styles.tabIcon, tintColor: focused ? "white" : "gray" }} />

            },
        },
    },
    "Coffee Pedia": {
        screen: CoffeePedia,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image source={require('../../../assets/ic_coffee.png')} style={{ ...styles.tabIcon, tintColor: focused ? "white" : "gray" }} />

            },
        },
    },
    Profile: {
        screen: Profile,
        title: "Profile",
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image source={require('../../../assets/ic_person.png')} style={{ ...styles.tabIcon, tintColor: focused ? "white" : "gray" }} />

            },
        },
    }

}, {
    initialRouteName: "Coffee Room",
    'lazy': true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        scrollEnabled: true,
        animationEnabled: true,
        swipeEnabled: true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#123346',
        inactiveBackgroundColor: '#123346',
        upperCaseLabel: false,
        activeTintFontWeight: 'bold',
        tabStyle: { width: (Dimensions.get("window").width / 4) },
        style: { backgroundColor: '#123346' },
        labelStyle: {
            fontSize: 12
        }
    }
})

export const TabContainer = createAppContainer(Tabs)