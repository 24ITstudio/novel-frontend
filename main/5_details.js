import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';

// function DetailsScreen({ navigation, route }) {
//     const { username } = route.params;
//     return (
//         <View>
//             <Text>DetailsScreen {username}</Text>
//             <Button
//                 title="Go to Home"
//                 onPress={() => navigation.navigate('Home')}
//             />
//         </View>
//     )
// };
// export default DetailsScreen

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
        // const { route } = this.props;
        // const { username } = route.params;
        const { username } = this.props.route.params;
        return (
            <View>
                <Text>Welcome to DetailsScreen, {username}!</Text>
            </View>
        );
    }
}