import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';

function UserInfoScreen({ navigation }) {
    return (
        <View>
            <Text>UserInfoScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
};
export default UserInfoScreen