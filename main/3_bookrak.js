import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

// function BookrakScreen({ navigation }) {
export default class BookrakScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFavorID: [],
            userNovel: [],
            isLoading: true
        };
    }

    componentDidMount = (route) => {
        // const { id } = this.props.route.params;
        const { userID } = 1;

        const url_1 = `http://124.70.57.215:8000/user/${userID}`;

        fetch(url_1)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ userFavorID: json.favors });
            })
            .catch((error) => console.error(error));
        const { userFavorID } = this.state;
        const url_2 = `http://124.70.57.215:8000/novel/${userFavorID}`
        fetch(url_2)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ userNovel: json });
            })
            .catch((error) => console.error(error));
        // .finally(() => {
        //     this.setState({ isLoading: false});
        // });
    }

    render() {
        const { userNovel, isLoading } = this.state;
        if (userNovel.length) {
            return (
                <View style={[styles.bookRak]}>
                    <FlatList
                        data={userNovel}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={[styles.book]}>
                                <Text style={[styles.favorName]}>{item.name}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 2 }, { borderBottomColor: 'grey' }, { marginVertical: 1 }]}></View>
                        }}
                        onEndReachedThreshold={0}
                    />
                </View>
            );
        }
        if (!userNovel.length) {
            return (
                <Text>您暂时还未收藏书籍</Text>
            )
        }
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

const styles = StyleSheet.create({
    book: {
        backgroundColor: 'black',
    },

})