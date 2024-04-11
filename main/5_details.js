//阅读器没写
import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: [],
            isLoading: true,
            flag: false,

            username: '',
            password: '',
        };
    }
    componentDidMount() {
        const { route, navigation } = this.props;
        const { username } = route.params;
        console.log('5_details_Username:', username);
    }

    render() {
        const { username } = this.props.route.params;
        return (
            <View>
                <Text>Welcome to DetailsScreen, {username}!</Text>
            </View>
        );
    }
}