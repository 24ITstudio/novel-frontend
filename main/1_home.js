import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

gotoLogin = () => {
    this.props.navigation.navigate("Details");
}

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => { navigation.navigate('Details') }}
            />
        </View>
    )
};
export default HomeScreen



// const Details = ({ navigation }) => (
//     <Button title="点击查看" onPress={() => navigation.navigate("Details")} />
// );
// const DetailsWithNavigation = withNavigation(Details);

// // @withNavigation
// export default class HomeScreen extends Component {
//     render() {
//         return (
//             <Button title="点击查看" onPress={() => navigation.navigate("Details")} />
//         );
//     }
// };