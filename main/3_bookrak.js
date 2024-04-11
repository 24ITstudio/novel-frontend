import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, StyleSheet, FlatList, ScrollView, Image, Dimensions } from 'react-native';

// function BookrakScreen({ navigation }) {
export default class BookrakScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: [],
            // userData: [],
            // userFavorID: [],
            // userNovelName: [],
            // userNovelDesc: [],

            isLoading: true,

            username: '',
            password: '',
            userID: '',
            favorsIDs: [],
            favorsDatas: [],
        };
    }
    componentDidMount() {
        //获取从登录页面传来的username
        const { route, navigation } = this.props;
        const { username, password } = route.params;
        console.log('3_bookrak_Username:', username, password);
        //第一处
        const url_1 = `http://124.70.57.215:8000/user-id/${username}`;
        console.log('url_1:', url_1);
        fetch(url_1)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ userID: json.id })
                console.log('3_getuserID_1:', this.state.userID);
                //第二处
                // const { userID } = this.userID;
                // const userID = json.id;
                // console.log('3_getuserID_2:', this.userID);

                const url_2 = `http://124.70.57.215:8000/user/${this.state.userID}`
                // const url_2 = `http://124.70.57.215:8000/novel/1/`
                console.log('url_2:', url_2);

                fetch(url_2)
                    .then((response) => response.json())
                    .then((json) => {
                        this.setState({ favorsIDs: json.favors });
                        //第三处
                        // const { favorsIDs } = this.state.favorsIDs;
                        const favorsIDs = json.favors;
                        const fetchPromises = favorsIDs.map(favorID => {
                            const url_3 = `http://124.70.57.215:8000/novel/${favorID}`;
                            return fetch(url_3)
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error(`Failed to fetch favorsData for favorID ${favorID}`);
                                    }
                                    return response.json();
                                })
                                .then(data => {
                                    // return { id: id, data: data };
                                    return { id: data.id, name: data.name, desc: data.desc };
                                })
                        })
                        Promise.all(fetchPromises)
                            .then(results => {
                                console.log(results);
                                this.setState({ favorsDatas: results });
                            })
                            .catch(error => {
                                console.error('3_Promise_Error:', error);
                            });
                    })
                    .catch(error => {
                        console.error('3_Promise_url2_Error:', error);
                    });
            })
            .catch(error => {
                console.error('3_Promise_url1_Error:', error);
            });
        // // 创建一个包含 User-Agent 头部信息的 Headers 对象
        // var myHeaders = new Headers();
        // myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "username": this.username,
        //     "password": this.password
        // });
        // // console.log('3_raw', username, password);
        // // 配置请求选项，包括请求方法、头部信息和重定向设置
        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'

        // };
        // // 发送带有配置选项的 GET 请求到指定的 URL
        // fetch(`http://124.70.57.215:8000/user-id/${username}`, requestOptions)
        //     .then(response => response.json())
        //     .then((json) => {
        //         this.setState({ userID: json.id });

        //     })
        //     .catch(error => console.log('userID_error', error)); // 捕获并处理任何错误

        // .then(users => {
        //     const user = users.find(user => user.username === username);
        //     if (user) {
        //         console.log('Found user:', user);
        //         const { userID } = user.id;
        //         const url = `http://124.70.57.215:8000/user/${userID}`;
        //         fetch(url, requestOptions)
        //             .then((response) => response.json())
        //             .then((json) => {
        //                 this.setState({ userFavorID: json.favors });
        //             })
        //     } else {
        //         console.log('User not found');
        //     }
        // })

        // Promise.all(fetchPromises)
        //     .then(results => {
        //         console.log(results);
        //         this.setState({ favorsDatas: results });
        //     })
        //     .catch(error => {
        //         console.error('3_Promise_Error:', error);
        //     });

        // const { userID } = this.props.route.params;
        // const { userID } = 1;
        // console.log({ userID });
        // const userID = 1;
        // const url_1 = `http://124.70.57.215:8000/user/1/`;
        // fetch(url_1)
        //     .then((response) => response.json())
        //     .then((json) => {
        //         this.setState({ userData: json });
        //         // console.log(json)
        //         // console.log(userData)
        //     })
        //     .catch((error) => console.error(error));
        // // console.log(userData)
    }

    // componentDidMount = (route) => {
    //     const { userFavorID } = this.state.userFavorID;
    //     // console.log(this.state.userFavorID);
    //     const url_2 = `http://124.70.57.215:8000/novel/${userFavorID}`
    //     // const url_2 = `http://124.70.57.215:8000/novel/1/`
    //     fetch(url_2)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             // this.setState({ data: json })
    //             this.setState({ data: json });
    //             this.setState({ userNovelName: json.name });
    //             this.setState({ id: json.id });
    //             this.setState({ userNovelDesc: json.desc });
    //         })
    //         .catch((error) => console.error(error));
    // }


    // .finally(() => {
    //     this.setState({ isLoading: false});
    // });


    render() {
        const { favorsDatas, isLoading } = this.state;
        if (favorsDatas.length) {
            // if (1) {
            return (
                <View style={[styles.favorRak]}>
                    <FlatList
                        data={this.state.favorsDatas}
                        keyExtractor={item => item.id.toString()}
                        // data={data}
                        // keyExtractor={({ userFavorID }, index) => id}
                        // keyExtractor={id => userNovelID}
                        renderItem={({ item }) => (
                            <View style={[styles.favorInner]}>
                                <Image
                                    style={[styles.favorCover]}
                                    source={require('../asserts/cover_0.png')}
                                />
                                <View style={[styles.favorIntro]}>
                                    <Text style={[styles.favorName]}>{item.name}</Text>
                                    {/* <Text style={[styles.favorDesc]}>{this.state.userNovelDesc}</Text> */}
                                    <Text style={[styles.favorDesc]}>{item.desc}</Text>
                                </View>
                                <Text style={[styles.favorClick]}>继续阅读 ＞</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 1 }, { borderBottomColor: 'deepblue' }, { marginVertical: 15 }]}></View>
                        }}
                        onEndReachedThreshold={0}
                        ListEmptyComponent={() => (
                            <View>
                                <Text>No data available</Text>
                            </View>
                        )}
                    />
                </View>
            );
        }
        if (!favorsDatas.length) {
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