import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';



function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="点击阅读"
                onPress={() => { navigation.navigate('Details') }}
            />
        </View>
    )
};
export default HomeScreen

