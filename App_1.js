import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './main/1_home';
import ClassificationScreen from './main/2_classification'
import BookrakScreen from './main/3_bookrak'
import UserInfoScreen from "./main/4_userInfo";
import DetailsScreen from "./main/5_details";

const Main = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: '主页'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerTitle: '我的'
        }
    }
}, {
    tabBarOptions: {
        labelStyle: {
            fontSize: 16
        }
    }
});

const AppNavigator = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: '登录'
        }
    },
    Main: {
        screen: Main
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerTitle: '注册'
        }
    }
});

export default AppNavigator;