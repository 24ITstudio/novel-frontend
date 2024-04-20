//阅读器没写
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
            chapterData: [],
            currentChapter: 1,
            chapterContent: '',
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
        console.log('5_id_name_max:', id, name, max_chapter);

        const url = `http://124.70.57.215:8000/novel/${id}-${chapterNumber}`;
        try {
            const response = await axios.get(url);
            this.setState({ chapterContent: response.data });

            // console.log("chapterContent_1:", this.chapterContent);

        } catch (error) {
            // if (error.savedChapter.status === 404) {
            //     console.error('fetchChapter资源未找到');
            // } else {
            console.error('fetchChapter错误：', error);
            // }
        }
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

        console.log("chapterContent_1:", this.state.chapterContent);
        console.log("chapterContent_2:", chapterContent);
        return (
            <View >
                {/* <Text>Welcome to DetailsScreen, {username}!</Text> */}
                {/* <Text style={[styles.title]}>《{name}》, ID：{id}, 共有{max_chapter}个章节</Text> */}
                <View style={[styles.title]}>
                    <Text style={[styles.title_1]}>《{name}》  共{max_chapter}章</Text>
                    <Text style={[styles.title_2]}>当前章节: {currentChapter}</Text>
                </View>

                {/* <Text>Current Chapter: {currentChapter}</Text> */}

                <Text style={[styles.content]}>章节内容：{this.chapterContent}</Text>
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

