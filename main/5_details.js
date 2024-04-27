import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Button, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: [],
            // id: [],
            isLoading: true,
            // flag: false,

            username: '',
            password: '',
            token: '',
            chapterData: [],
            currentChapter: 1,
            chapterContent: {},
        };
    }
    async componentDidMount() {
        // async componentDidMount() {
        // const { route, navigation } = this.props;
        // const { username, id, name, max_chapter } = route.params;
        // console.log('5_details_gerInfo:', username, id, name, max_chapter);
        try {
            const savedChapter = await AsyncStorage.getItem('currentChapter');
            if (savedChapter) {
                this.setState({ currentChapter: parseInt(savedChapter, 10) });
                await this.fetchChapter(parseInt(savedChapter, 10));
            }
        } catch (error) {
            // if (error.savedChapter.status === 404) {
            //     console.error('componentDidMount资源未找到');
            // } else {
            console.error('componentDidMount错误：', error);
            // }

        }
    }

    fetchChapter = async (chapterNumber) => {
        const { route, navigation } = this.props;
        const { username, id, name, max_chapter } = route.params;
        // this.setState({ token: this.token });
        console.log('5_id_name_max:', id, name, max_chapter);
        //获取对应小说章节
        const url = `http://124.70.57.215:8000/novel/${id}-${chapterNumber}`;
        try {
            const response = await axios.get(url);
            this.setState({ chapterContent: response.data });

            //console.log("chapterContent_1:", this.chapterContent);

        } catch (error) {
            // if (error.savedChapter.status === 404) {
            //     console.error('fetchChapter资源未找到');
            // } else {
            console.error('fetchChapter错误：', error);
            // }
        }

        //获取用户token
        // const url_2 = `http://124.70.57.215:8000/token-auth/`;

        // var myHeaders = new Headers();
        // myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "username": this.state.username,
        //     "password": this.state.password
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://124.70.57.215:8000/token-auth/", requestOptions)
        //     .then(response => {
        //         if (response.status === 200) {
        //             return response.json();
        //         }
        //     })
        //     .then(data => {
        //         this.setState({ token: data.token })
        //     })



        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

        //为对应用户添加书架
        // const url_3 = `http://124.70.57.215:8000/favor/${id}`;
        var myHeaders = new Headers();
        myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        myHeaders.append("Authorization", this.state.token);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://124.70.57.215:8000/favor//", requestOptions)
            .then(response => {
                if (response.status === 201) {
                    alert('添加书架成功');
                }
            })
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    }

    handleNextChapter = async () => {
        const { route, navigation } = this.props;
        const { id, max_chapter } = route.params;
        const { currentChapter } = this.state;
        const nextChapter = currentChapter + 1;
        // this.setState(({ currentChapter }) => ({ currentChapter: currentChapter + 1 }));
        if (nextChapter <= max_chapter) {
            this.setState({ currentChapter: nextChapter });
            await this.fetchChapter(nextChapter);
            try {
                await AsyncStorage.setItem('currentChapter', nextChapter.toString());
            } catch (error) {
                console.error('Failed to save chapter:', error);
            }
        } else {
            alert("已经是最后一章");
        }
    }

    handlePrevChapter = async () => {
        // const { route, navigation } = this.props;
        // const { id, max_chapter } = route.params;
        const { currentChapter } = this.state;
        const prevChapter = currentChapter - 1;
        if (prevChapter >= 1) {
            this.setState({ currentChapter: prevChapter });
            await this.fetchChapter(prevChapter);
            try {
                await AsyncStorage.setItem('currentChapter', prevChapter.toString());
            } catch (error) {
                console.error('Failed to save chapter:', error);
            }
        } else {
            alert("已经是第一章");
        }
    };


    render() {
        // username为测试数据，最后要删掉，只传入小说id，名字,最大章节数
        const { username, id, name, max_chapter } = this.props.route.params;
        const { currentChapter, chapterContent } = this.state;
        const addRak = (id) => {

        }

        console.log("chapterContent_1:", this.state.chapterContent);
        console.log("chapterContent_2:", chapterContent);
        return (
            <View >
                {/* <Text>Welcome to DetailsScreen, {username}!</Text> */}
                {/* <Text style={[styles.title]}>《{name}》, ID：{id}, 共有{max_chapter}个章节</Text> */}
                <View style={[styles.title]}>
                    <Text style={[styles.title_1]}>《{name}》  共{max_chapter}章</Text>
                    <Button
                        title='加入书架'
                        color='#0e53ff'
                        onPress={() => addRak(this.id)}
                    />

                </View>
                <Text style={[styles.title_2]}>当前章节: {currentChapter}</Text>
                {/* <Text>Current Chapter: {currentChapter}</Text> */}

                <Text style={[styles.content]}>章节内容：{chapterContent.content}</Text>
                <View style={[styles.allBut]}>
                    <View style={[styles.preBut]}>
                        <Button title="上一章" onPress={this.handlePrevChapter} />
                    </View>
                    <View style={[styles.nexBut]}>
                        <Button title="下一章" onPress={this.handleNextChapter} />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
    },
    title_1: {
        fontSize: 20,
    },
    title_2: {
        fontSize: 17,
        marginLeft: 20,
        marginTop: 2,
    },
    content: {
        fontSize: 15,
        marginTop: 5,
    },
    allBut: {
        marginTop: 20,
        marginLeft: Dimensions.get('screen').width / 5,
        marginRight: Dimensions.get('screen').width / 5,
        height: Dimensions.get('screen').width / 8,
        // width: Dimensions.get('screen').width * 2 / 3,
        flexDirection: 'row',
        // backgroundColor: 'black',

    },
    preBut: {
        marginLeft: 40,
    },
    nexBut: {
        marginLeft: 40,
    }
})

