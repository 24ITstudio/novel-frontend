// 从这无法将示例数据传过去（先解决home传novelName问题）
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import PasswordLoginScreen from './0_passwordLogin';

function ClassificationScreen({ navigation }) {
    return (
        <View>
            <Text>ClassificationScreen </Text>
            <Button
                title="点击阅读"
                onPress={() => navigation.navigate('Details', { usrname: 'u1', password: 'u1' })}
            />
        </View>
    )
};
export default ClassificationScreen