import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
        <View>
            <Text>DetailsScreen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
};
export default DetailsScreen