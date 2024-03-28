import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, ActivityIndicator } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

// function BookrakScreen({ navigation }) {
export default class BookrakScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
        const url = http;
    }

    // render() {
    //     const { isLoading } = this.state;
    //     return (
    // <ScrollView>
    //     {isLoading ? <ActivityIndicator /> : (
    //         <FlatList
    //             renderItem={({ item }) => (
    //                 <TouchableOpacity>
    //                     onPress={() => this.props.navigation.navigate('Details', {
    //                         url: item.url,
    //                         name: item.title,
    //                         id: item.id
    //                     })}
    //                 </TouchableOpacity>
    //             )}
    //         />
    //     )}
    // </ScrollView>
    //  <View>
    //     <Text>BookrakScreen</Text>
    //     <Button 
    //         title="点击阅读"
    //         onPress={() => navigation.navigate('Details')}
    //     />
    //   </View> 
    //     );
    // }
};
