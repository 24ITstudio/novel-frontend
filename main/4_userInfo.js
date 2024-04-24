import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Image, Dimensions, FlatList, Alert, AsyncStorage, Modal, TextInput } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { ITLogo } from "../asserts/IT.jpg";

export default class UserInfoScreen extends Component {
    // function UserInfoScreen({ navigation }) {
    constructor(props) {
        super(props);
        this.state = {
            id: [],
            isLoading: true,
            // flag: false,
            passModelVisible: false,
            nameModelVisible: false,
            username: '',
            newUserName: '',
            password: '',
            newPassword: '',
            reNewPassword: '',
        };
    }

    componentDidMount() {
        const { route, navigation } = this.props;
        const { username, password } = route.params;
        // console.log('Username:', username);
    }

    // handleLogout = async () => {
    //     try {
    //         await AsyncStorage.removeItem('username');
    //         await AsyncStorage.removeItem('password');
    //         this.props.navigation.navigate('PasswordLogin');
    //     } catch (error) {
    //         console.error('清除用户凭据时出错:', error);
    //     }
    // }

    handleLogout = () => {
        this.props.navigation.navigate('PasswordLogin');
    }

    handleChangePassword = () => {
        const { route, navigation } = this.props;
        const { username, password } = route.params;
        // const { newPassword, reNewPassword } = this.state;
        if (this.state.newPassword === '' || this.state.reNewPassword === '') {
            alert('输入不得为空');
        } else if (this.state.newPassword != this.state.reNewPassword) {
            alert('两次输入的密码不一致');
        } else if (this.state.newPassword == this.state.reNewPassword) {

        } else {
            alert('修改出错');
        }
    }

    render = () => {
        const { route, navigation } = this.props;
        const { username, password } = route.params;


        return (
            <View >
                <View style={[styles.top]}>
                    <View style={[styles.headDisplay]}>
                        <Image
                            source={require('../asserts/IT.jpg')}
                            style={[styles.head]}
                        />
                    </View>
                    <View style={[styles.selfInfo]}>
                        <View style={[styles.nameDisplay]}>
                            <Text style={[styles.nameInner]}>{username}</Text>
                        </View>
                        <Text style={[styles.ITIntro]}>IT小说，快乐追书~</Text>
                    </View>
                    <View style={[styles.editInfo]}>
                        <Button
                            title='修改名称 ＞'
                            color='#0e53ff'
                            // onPress={() => changeName(this.state.id)}
                            onPress={() => this.setState({ nameModelVisible: true })}
                        />
                    </View>

                </View>
                {/* </View> */}

                {/* <View style={[styles.infoDisplays]}>
                <InfoDisplay info={{ title: "关注", num: 0 }} />
                <InfoDisplay info={{ title: "粉丝", num: 1 }} />
                <InfoDisplay info={{ title: "获赞", num: 2 }} />
            </View> */}

                <View style={[styles.mineButtons]}>
                    <TouchableOpacity
                        style={[styles.selfFunc]}
                        onPress={() => Alert.alert(' 我的评论 功能未开通，尽情期待')}
                    >
                        <Image
                            source={require('../asserts/comment.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>我的评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.selfFunc]}
                        onPress={() => Alert.alert(' 我的消息 功能未开通，尽情期待')}
                    >
                        <Image
                            source={require('../asserts/formation.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>我的消息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.selfFunc]}
                        onPress={() => this.setState({ passModelVisible: true })}
                    >
                        <Image
                            source={require('../asserts/password.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>修改密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.selfFunc]}
                        onPress={this.handleLogout}
                    >
                        <Image
                            source={require('../asserts/logout.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>退出登录</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    visible={this.state.nameModelVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => this.setState({ nameModelVisible: false })}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="请输入新密码"
                                value={this.state.newPassword}
                                onChangeText={newPassword => this.setState({ newPassword })}
                                secureTextEntry
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="请确认新密码"
                                value={this.state.reNewPassword}
                                onChangeText={reNewPassword => this.setState({ reNewPassword })}
                                secureTextEntry
                            />
                            {/* {this.state.error ? <Text style={styles.error}>{error}</Text> : null} */}
                            <Button title="确认修改" onPress={this.handleChangePassword} />
                            <Button title="取消" onPress={() => this.setState({ modalVisible: false })} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    visible={this.state.passModelVisible}
                >

                </Modal>
            </View >
        )
    };
}
// export default UserInfoScreen

const styles = StyleSheet.create({
    // total: {

    // },
    top: {
        flexDirection: 'row',
        // backgroundColor: 'black',
        height: Dimensions.get('screen').height / 10,
        marginTop: 10,
        marginLeft: 10,
    },
    headDisplay: {
        width: Dimensions.get('screen').width / 5,
        // flexDirection: 'column',
        justifyContent: 'space-around',
    },
    head: {
        height: 70,
        width: 70,
        borderRadius: 50,

    },
    selfInfo: {
        width: Dimensions.get('screen').width / 2,
        marginTop: 20,
        // backgroundColor: 'black',
    },
    nameInner: {
        // backgroundColor: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        // color: 'while',
    },
    ITIntro: {
        marginTop: 3,
        marginLeft: 1,
    },
    editInfo: {
        width: Dimensions.get('screen').width / 4,
        justifyContent: 'space-around',
    },
    // editButton: {
    //     color: "#841584",
    //     // backgroundColor: 'black',
    // },
    // infoDisplays: {
    //     flexDirection: 'row',
    // },
    mineButtons: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 5
    },
    selfFunc: {
        flexDirection: 'row',
        height: 70,
        // borderTopWidth: 0.5,
        // borderBottomWidth: 0.5,
        borderColor: 'black',

    },
    funcImg: {
        width: 30,
        height: 30,
        marginLeft: 20,
        marginTop: 15
    },
    funcName: {
        marginLeft: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        // textAlign: 70,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        width: '80%',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
})

// function InfoDisplay({ info }) {
//     return (
//         <View>
//             <Text>{info.num}</Text>
//             <Text>{info.title}</Text>
//         </View>
//     );
// };

// function MineButton({ person }) {
//     // const imgName = person.source;
//     // console.log(imgName);
//     // const souc = '../asserts/' + imgName + '.png';
//     return (
//         <TouchableOpacity style={[styles.selfFunc]}>

//             <Image
//                 // source={{ uri: souc }}
//                 source={require('../asserts/formation.png')}
//                 // source={require(person.source)}
//                 // source={require('@expo/snack-static/react-native-logo.png')}
//                 style={[styles.funcImg]}
//             />
//             {/* <Ionicons name={person.source} style={[styles.ioni]} /> */}
//             <Text style={[styles.funcName]}>{person.name}</Text>
//         </TouchableOpacity>

//     );
// };