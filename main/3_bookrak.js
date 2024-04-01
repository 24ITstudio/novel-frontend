import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, StyleSheet, FlatList, ScrollView, Image, Dimensions } from 'react-native';
// import {  } from 'react-native-gesture-handler';

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
        // const { userID } = this.props.route.params;
        const { userID } = 1;
        // console.log({ userID });
        const url_1 = `http://124.70.57.215:8000/user/${userID}`;
        const { userFavorID } = this.state;
        const url_2 = `http://124.70.57.215:8000/novel/${userFavorID}`
        fetch(url_1)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ userFavorID: json.favors });
            })
            .catch((error) => console.error(error));
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
                <View style={[styles.favorRak]}>
                    <FlatList
                        data={userNovel}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={[styles.favorInner]}>
                                <Image
                                    style={[styles.favorCover]}
                                    source={require('../asserts/cover_0.png')}
                                />
                                <View style={[styles.favorIntro]}>
                                    <Text style={[styles.favorName]}>{item.name}</Text>
                                    <Text style={[styles.favorDesc]}>{item.desc}</Text>
                                </View>
                                <Text style={[styles.favorClick]}>继续阅读 ＞</Text>
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

};

const styles = StyleSheet.create({
    book: {
        // backgroundColor: 'black',
    },
    favorRak: {
        marginTop: 20,
    },
    favorInner: {
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
    },
    // bookInner_1: {

    // },
    favorCover: {
        width: Dimensions.get('screen').width / 7,
        height: Dimensions.get('screen').width / 7,
    },
    favorIntro: {
        marginLeft: 15,
        width: Dimensions.get('screen').width * 2.8 / 5,
        // backgroundColor: 'green',
    },
    favorName: {
        fontSize: 23,
    },
    favorDesc: {
        fontSize: 16,
    },
    favorClick: {
        fontSize: 16,
        fontWeight: 'bold',
        // backgroundColor: 'green',
        marginTop: 10,

        // marginLeft: Dimensions.get('screen').width * 2 / 5,
    }

})