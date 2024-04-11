import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './main/1_home';
import ClassificationScreen from './main/2_classification'
import BookrakScreen from './main/3_bookrak'
import UserInfoScreen from "./main/4_userInfo";
import DetailsScreen from "./main/5_details";
import LoginScreen from "./main/0_login";
import PasswordLoginScreen from "./main/0_passwordLogin";
import RegisterScreen from "./main/0_register";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs({ route }) {
  const { username, password } = route.params;
  return (
    <Tab.Navigator
      initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} initialParams={{ username, password }} />
      <Tab.Screen name="Classification" component={ClassificationScreen} options={{ title: '分类' }} initialParams={{ username, password }} />
      <Tab.Screen name="Bookrak" component={BookrakScreen} options={{ title: '书架' }} initialParams={{ username, password }} />
      <Tab.Screen name="UserInfo" component={UserInfoScreen} options={{ title: '我的' }} initialParams={{ username, password }} />
    </Tab.Navigator>
  )
}

function App_1() {

  return (
    <Stack.Navigator initialRouteName="PasswordLogin">
      <Stack.Screen name="PasswordLogin" component={PasswordLoginScreen} options={{ title: '密码登录' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: '登录' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '注册' }} />
      <Stack.Screen name="IT_novel" component={HomeTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>

  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={App_1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;