import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PasswordLoginScreen extends Component {
    constructor() {
        super()

        this.state = {
            invisible: true,

            username: '',
            password: '',
            token: '',

            refresh: '',
            access: ''
        }
    }
    handleLogin = () => {
        const { username, password } = this.state;
        console.log('handleLogin:', username, password);

        var myHeaders = new Headers();
        myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": this.state.username,
            "password": this.state.password,

        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://124.70.57.215:8000/token-auth/", requestOptions)
            .then(response => {
                if (response.status === 200) {
                    this.props.navigation.navigate('IT_novel', { username, password });
                    // console.log(response.status);
                    // return response.json();
                } else {
                    // console.log(response.status);
                    Alert.alert('用户账号密码输入错误！');
                    throw new Error('Failed to login');
                }
            })
            // .then(data => {
            //     try {
            //         if (data && data.token) {
            //             console.log('token:', data.token);
            //             // const { token } = data.token;
            //             this.setState({ token: data.token });
            //             console.log('state_token:', this.state.token);
            //         } else {
            //             console.error('Token not found in response data');
            //         }
            //     } catch (error) {
            //         console.error('Error while accessing token property:', error);
            //     }

            // })
            // .then(result => console.log(result))
            .catch(error => console.log('0_navigation_Error', error));
    }

    render() {
        const { invisible } = this.state;
        const { username, password } = this.state;
        return (
            <View style={styles.container}>

                <View style={[styles.title]}>
                    <Text style={[styles.titleText]}>
                        欢迎使用 IT_novel
                    </Text>
                </View>
                <View style={[styles.allInput]}>
                    <View style={[styles.nameView]}>
                        <TextInput
                            style={[styles.nameInput]}
                            placeholder='用户名'
                            value={username}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />
                    </View>
                    <View style={[styles.pswView]}>
                        <TextInput
                            placeholder='密码'
                            value={password}
                            style={[styles.pswInput]}
                            secureTextEntry={this.state.invisible}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        <TouchableOpacity onPress={() => { this.setState({ invisible: !invisible }) }}>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bottomButtons]}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={[styles.register]}>
                        <View style={[styles.registerView]}>
                            <Text style={[styles.registerText]}>
                                注册
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleLogin} style={[styles.login]}>
                        <View style={[styles.loginView]}>
                            <Text style={[styles.loginText]}>
                                登录
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: Dimensions.get('screen').width / 40,
        marginRight: Dimensions.get('screen').width / 40,
        marginTop: Dimensions.get('screen').width / 10,
    },
    title: {
        height: Dimensions.get('screen').height / 10,
        backgroundColor: 'blue',
    },
    titleText: {
        color: 'white',
        fontSize: 30,
    },
    allInput: {
        marginTop: Dimensions.get('screen').width / 10,
        marginLeft: Dimensions.get('screen').width / 20,
        marginRight: Dimensions.get('screen').width / 20,
    },
    bottomButtons: {
        marginTop: Dimensions.get('screen').width / 8,
        flexDirection: 'row',
    },
    register: {
        backgroundColor: 'blue',
        width: Dimensions.get('screen').width / 8,
        height: Dimensions.get('screen').width / 10,
        marginLeft: Dimensions.get('screen').width / 5,

    },
    registerText: {
        fontSize: 17,
        color: 'white'
    },
    loginText: {
        fontSize: 17,
        color: 'white'
    },
    login: {
        backgroundColor: 'blue',
        width: Dimensions.get('screen').width / 8,
        height: Dimensions.get('screen').width / 10,
        marginLeft: Dimensions.get('screen').width / 5,
    }
})

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rgb(255,223,105)'
//     },
//     mailInput: {
//         color: 'rgb(51,51,51)',
//         fontFamily: global.font_family,
//         fontWeight: 'bold',
//         // borderColor: 'black',
//     },
//     mailView: {
//         // marginTop: 70,
//         // marginLeft: 50,
//         // marginBottom: 0,
//         // backgroundColor: 'green'
//     },
//     codeInput: {
//         color: 'rgb(51,51,51)',
//         fontFamily: global.font_family,
//         fontWeight: 'bold'
//     },
//     topLine: {
//         height: 20,
//         margin: 3,
//         color: 'white',
//         marginRight: 500,
//         borderRadius: 10,
//         marginLeft: 100,
//         marginTop: 20,
//     },
//     // headline: {
//     // },
//     bottoms: {
//         flexDirection: 'row',
//     },
//     //     login: {
//     //     },
//     //     loginView: {
//     //     },
//     register: {
//         fontFamily: global.font_family,
//         fontWeight: 'bold'
//     },
//     registerView: {
//         backgroundColor: 'rgb(252,232,158)',
//         height: 80,
//         width: 80,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginRight: 30,
//         borderRadius: 20
//     },
//     //     head: {
//     //     },
//     //     headView: {
//     //     },
//     //     inputs: {
//     //     },
//     //     firstLine: {
//     //     },
//     //     secondLine: {
//     //     },
//     //     codeView: {
//     //     },
//     //     code: {
//     //     },
//     //     sendCodeView: {
//     //     },
//     //     sendCode: {
//     //     },
//     // passwordLoginView: {
//     // },
//     passwordLogin: {
//         fontSize: 30,
//         fontFamily: global.font_family,
//         fontWeight: 'bold'
//     }
// })