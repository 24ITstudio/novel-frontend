import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';

function ClassificationScreen({ navigation }) {
    return (
        <View>
            <Text>ClassificationScreen</Text>
            <Button
                title="点击阅读"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
};
export default ClassificationScreen