import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class RegisterScreen extends Component {
    constructor() {
        super()

        this.state = {
            invisible1: true,
            invisible2: true,
            send: "发送验证码",
            isTouchable: false,
            mail: '',
            password: '',
            repassword: '',
            username: '',
            code: '',
            msg: ''
        }
    }
    handleSend = () => {
        if (this.state.send == "发送验证码") {
            var i = 60;
            let t = setInterval(() => { this.setState({ send: i-- }) }, 1000);
            this.setState({ isTouchable: true });

            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": this.state.mail,
                }),
            };

            fetch('http://ouchelper.daoxuan.cc/log/code/', requestOptions)
                .then(response => response.json())
                .then((json) => {
                    console.log(json);
                })
                .catch(error => console.log('error', error));
            setTimeout(() => {
                clearInterval(t);
                this.setState({ send: "发送验证码" });
                this.setState({ isTouchable: false });
            }, 60 * 1000);

        }
    }
    handleRegister = () => {
        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": this.state.username,
                "password": this.state.password,
                "re_password": this.state.repassword,
                "code": this.state.code
            }),
        };
        fetch('http://ouchelper.daoxuan.cc/log/register/', requestOptions)
            .then(response => response.json())
            .then((json) => {
                console.log(json);
                this.setState({ msg: json.msg }, () => {
                    if (this.state.msg == "注册成功") {
                        this.props.navigation.navigate('Login');
                    } else {
                        Alert.alert(this.state.msg);
                    }
                });
                console.log(msg);
            })
            .catch(error => console.log('error', error));

    }
    render() {
        const { invisible1, invisible2, send } = this.state;
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
                            placeholder='邮箱/手机号码'
                            maxLength={25}
                            onChangeText={(mail) => { this.setState({ mail }) }}
                        />
                    </View>
                    <View style={[styles.firstLine]}>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='验证码'
                                style={[styles.codeInput]}
                                maxLength={10}
                                onChangeText={(code) => { this.setState({ code }) }}
                            //secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={this.handleSend}
                            disabled={this.state.isTouchable}
                        >
                            <View style={[styles.sendCodeView]}>
                                <Text style={[styles.sendCode]}>
                                    {send}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.secondLine]}>

                    </View>
                    <View style={[styles.codeView]}>
                        <TextInput
                            style={[styles.codeInput]}
                            placeholder='用户名'
                            maxLength={10}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />
                    </View>
                    <View style={[styles.firstLine]}>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='设置密码'
                                style={[styles.codeInput]}
                                secureTextEntry={this.state.invisible1}
                                maxLength={18}
                                onChangeText={(password) => { this.setState({ password }) }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => { this.setState({ invisible1: !invisible1 }) }}
                        >
                            <View style={[styles.visibleView]}>
                                {invisible1 ? <Ionicons name='eye-off-outline' size={18}></Ionicons> : <Ionicons name='eye-outline' size={18}></Ionicons>}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.firstLine]}>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='确认密码'
                                style={[styles.codeInput]}
                                secureTextEntry={this.state.invisible2}
                                maxLength={18}
                                onChangeText={(repassword) => { this.setState({ repassword }) }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => { this.setState({ invisible2: !invisible2 }) }}
                        >
                            <View style={[styles.visibleView]}>
                                {invisible2 ? <Ionicons name='eye-off-outline' size={18}></Ionicons> : <Ionicons name='eye-outline' size={18}></Ionicons>}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bottoms]}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Login') }}
                    >
                        <View style={[styles.registerView]}>
                            <Text style={[styles.register]}>
                                取消
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleRegister}
                    >
                        <View style={[styles.loginView]}>
                            <Text style={[styles.login]}>
                                注册
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //     container: {
    //         flex: 1,
    //         backgroundColor: 'rgb(255,223,105)'
    //     },
    //     mailInput: {
    //         color: 'rgb(51,51,51)',
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold',

    //     },
    //     mailView: {
    //         marginTop: pp(70),
    //         marginLeft: pp(50),
    //         marginBottom: 0
    //     },
    //     codeInput: {
    //         color: 'rgb(51,51,51)',
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     topLine: {
    //         height: pp(20),
    //         margin: pp(3),
    //         color: 'white',
    //         backgroundColor: 'white',
    //         marginRight: pp(500),
    //         borderRadius: pp(10),
    //         marginLeft: pp(100),
    //         marginTop: pp(20)
    //     },
    //     headline: {
    //         marginTop: pp(200)
    //     },
    //     bottoms: {
    //         flexDirection: 'row',
    //         marginLeft: pp(600),
    //         marginTop: pp(100)
    //     },
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
    //     register: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     registerView: {
    //         backgroundColor: 'rgb(252,232,158)',
    //         height: pp(80),
    //         width: pp(180),
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         marginRight: pp(30),
    //         borderRadius: pp(20)
    //     },
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
    //         backgroundColor: 'white',
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
    //     passwordLoginView: {
    //         marginLeft: pp(60),
    //         marginTop: pp(50),
    //         marginBottom: pp(50)
    //     },
    //     passwordLogin: {
    //         fontSize: pp(30),
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     visibleView: {
    //         marginTop: pp(30),
    //         height: pp(50),
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         width: pp(200)
    //     }
})