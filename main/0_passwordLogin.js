import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'



export default class PasswordLoginScreen extends Component {
    constructor() {
        super()

        this.state = {
            invisible: true,

            username: '',
            password: '',

            refresh: '',
            access: ''
        }
    }
    handleLogin = async () => {
        const { username, password } = this.state;
        if (username === 'u' && password === 'u') {
            this.props.navigation.navigate('IT_novel', { username, password });
        } else {
            alert('登录失败，请检查账号密码');
        }
        // var requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "username": username,
        //         "password": password
        //     }),
        // };
        // fetch("http://ouchelper.daoxuan.cc/login/", requestOptions)
        //     .then(response => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         this.setState({ access: json.access });
        //         this.setState({ refresh: json.refresh }, () => {
        //             if (this.state.refresh != '') {
        //                 global.access = json.access;
        //                 global.refresh = json.refresh;
        //                 this.props.navigation.navigate('IT_novel');
        //             } else {
        //                 Alert.alert('登录失败');
        //             }
        //         })
        //     })
        //     .catch(error => {
        //         console.log('error', error);
        //         Alert.alert("您似乎网络不太好")
        //     });

    }
    render() {
        const { invisible } = this.state;
        const { username, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={[styles.headline]}>
                    <View style={[styles.headView]}>
                        <Text style={[styles.head]}>
                            海大生活互助
                        </Text>
                    </View>
                    <View style={[styles.topLine]}>
                    </View>
                </View>
                <View style={[styles.inputs]}>
                    <View style={[styles.mailView]}>
                        <TextInput
                            style={[styles.mailInput]}
                            placeholder='用户名'
                            value={username}
                            // onChangeText={(username) => { this.setState({ username }) }}
                            onChangeText={text => this.setState({ username: text })}
                        />
                    </View>
                    <View style={[styles.firstLine]}>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='密码'
                                value={password}
                                style={[styles.codeInput]}
                                secureTextEntry={this.state.invisible}
                                // onChangeText={(password) => { this.setState({ password }) }}
                                onChangeText={text => this.setState({ password: text })}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => { this.setState({ invisible: !invisible }) }}
                        >
                            <View style={[styles.sendCodeView]}>
                                {invisible ? <Ionicons name='eye-off-outline' size={18}></Ionicons> : <Ionicons name='eye-outline' size={18}></Ionicons>}
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={[styles.secondLine]}>

                    </View> */}
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Login') }}
                    >
                        <View style={[styles.passwordLoginView]}>
                            <Text style={[styles.passwordLogin]}>
                                验证码登录
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.bottoms]}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Register') }}
                    // onPress={() => navigation.navigate('Register')}
                    >
                        <View style={[styles.registerView]}>
                            <Text style={[styles.register]}>
                                注册
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleLogin}
                    >
                        <View style={[styles.loginView]}>
                            <Text style={[styles.login]}>
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
        flex: 1,
        backgroundColor: 'rgb(255,223,105)'
    },
    mailInput: {
        color: 'rgb(51,51,51)',
        fontFamily: global.font_family,
        fontWeight: 'bold',
        // borderColor: 'black',
    },
    mailView: {
        // marginTop: 70,
        // marginLeft: 50,
        // marginBottom: 0,
        // backgroundColor: 'green'
    },
    codeInput: {
        color: 'rgb(51,51,51)',
        fontFamily: global.font_family,
        fontWeight: 'bold'
    },
    topLine: {
        height: 20,
        margin: 3,
        color: 'white',
        // backgroundColor: 'white',
        // backgroundColor: 'black',
        marginRight: 500,
        borderRadius: 10,
        marginLeft: 100,
        marginTop: 20,
    },
    // headline: {
    //     marginTop: 200,
    //     // backgroundColor: 'black',
    // },
    bottoms: {
        flexDirection: 'row',
        // marginLeft: pp(600),
        // marginTop: pp(100)
    },
    //     login: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     loginView: {
    //         backgroundColor: 'rgb(252,232,158)',
    //         height: pp(80),
    //         width: pp(180),
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: pp(20)
    //     },
    register: {
        fontFamily: global.font_family,
        fontWeight: 'bold'
    },
    registerView: {
        backgroundColor: 'rgb(252,232,158)',
        height: 80,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        borderRadius: 20
    },
    //     head: {
    //         color: 'white',
    //         fontSize: pp(60),
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     headView: {
    //         //marginTop:pp(20)
    //         marginLeft: pp(100)
    //     },
    //     inputs: {
    //         backgroundColor: 'rgb(250,235,180)',
    //         marginTop: pp(50),
    //         borderRadius: pp(20),
    //         marginLeft: pp(100),
    //         marginRight: pp(100),
    //         justifyContent: 'flex-end'
    //     },
    //     firstLine: {
    //         height: pp(2),
    //         //margin:pp(3),
    //         color: 'white',
    //         backgroundColor: 'white',
    //         marginRight: pp(80),
    //         borderRadius: pp(1),
    //         marginLeft: pp(60),
    //         marginTop: 0
    //     },
    //     secondLine: {
    //         height: pp(2),
    //         //margin:pp(3),
    //         color: 'white',
    //         backgroundColor: 'white',
    //         marginRight: pp(80),
    //         borderRadius: pp(1),
    //         marginLeft: pp(60),
    //         marginTop: 0
    //     },
    //     codeView: {
    //         marginTop: pp(20),
    //         flexDirection: 'row',
    //         marginLeft: pp(60)
    //     },
    //     code: {
    //         width: pp(500)
    //     },
    //     sendCodeView: {
    //         //backgroundColor:'white',
    //         marginTop: pp(30),
    //         height: pp(50),
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         width: pp(200)
    //     },
    //     sendCode: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold',
    //         fontSize: pp(30)
    //     },
    // passwordLoginView: {
    //     marginLeft: pp(60),
    //     marginTop: pp(50),
    //     marginBottom: pp(50)
    // },
    passwordLogin: {
        fontSize: 30,
        fontFamily: global.font_family,
        fontWeight: 'bold'
    }
})