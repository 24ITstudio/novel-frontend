import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';

function BookrakScreen({ navigation }) {
    return (
        <View>
            <Text>BookrakScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
};
export default BookrakScreen