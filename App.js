import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './main/1_home';
import ClassificationScreen from './main/2_classification'
import BookrakScreen from './main/3_bookrak'
import UserInfoScreen from "./main/4_userInfo";
import DetailsScreen from "./main/5_details";
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
      <Tab.Screen name="Classification" component={ClassificationScreen} options={{ title: '分类' }} />
      <Tab.Screen name="Bookrak" component={BookrakScreen} options={{ title: '书架' }} />
      <Tab.Screen name="UserInfo" component={UserInfoScreen} options={{ title: '我的' }} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IT_novel" component={HomeTabs} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = StackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions:{
//       headerTitle: '登录'
//     }
//   },
//   Main: {
//     screen: Login,
//     navigationOptions: {
//       headerTitle: '登录'
//     }
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       headerTitle: '登录'
//     }
//   },
// });

// class App extends Component {
//   render(){
//     return(
//       <View style={[styles.container]}>
//         <AppInner />
//       </View>
//     )
//   }
// }


export default App;




const styles = StyleSheet.create({
  // ioni: {
  //   width: 30,
  //   height: 30
  // }
})
