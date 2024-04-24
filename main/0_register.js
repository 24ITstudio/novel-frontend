import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default class RegisterScreen extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            id: [],
            // invisible1: true,
            // invisible2: true,
            // send: "发送验证码",
            // isTouchable: false,
            // mail: '',
            password: '',
            repassword: '',
            username: '',
            code: '',
            msg: '',
            isOK: false,
        }
    }
    // handleSend = () => {
    //     if (this.state.send == "发送验证码") {
    //         var i = 60;
    //         let t = setInterval(() => { this.setState({ send: i-- }) }, 1000);
    //         this.setState({ isTouchable: true });

    //         var requestOptions = {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "email": this.state.mail,
    //             }),
    //         };

    //         fetch('http://ouchelper.daoxuan.cc/log/code/', requestOptions)
    //             .then(response => response.json())
    //             .then((json) => {
    //                 console.log(json);
    //             })
    //             .catch(error => console.log('error', error));
    //         setTimeout(() => {
    //             clearInterval(t);
    //             this.setState({ send: "发送验证码" });
    //             this.setState({ isTouchable: false });
    //         }, 60 * 1000);

    //     }
    // }
    handleRegister = () => {
        // const { username } = this.state.username;
        // const { password } = this.state.password;
        // const { repassword } = this.state.repassword;
        if (this.state.username === '' || this.state.password === '' || this.state.repassword === '') {
            alert("填写不得为空");
        } else if (this.state.password == this.state.repassword) {
            // console.log('name&psw&repsw', this.state.username, this.state.password, this.state.repassword);
            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // "username": this.state.username,
                    "username": this.state.username,
                    // "password": this.state.password,
                    "password": this.state.password,
                    // "re_password": this.state.repassword,
                    // "code": this.state.code
                }),
            };
            fetch('http://124.70.57.215:8000/register/', requestOptions)
                // .then(response => response.json())
                .then((response) => {
                    if (response.status === 400) {
                        // throw new Error('注册失败');
                        alert('该用户名已被占用，请使用其他用户名！');
                    } else if (response.status === 201) {
                        alert('注册成功');
                        this.setState({ isOK: true })
                        // this.setState({ data: json })
                        // this.props.navigation.navigate('PasswordLogin');
                    } else {
                        console.log('response.status:', response.status);
                        alert('出错啦');
                    }
                    // this.setState({ msg: json.msg }, () => {
                    //     if (this.state.msg == "注册成功") {
                    //         this.props.navigation.navigate('Login');
                    //     } else {
                    //         Alert.alert(this.state.msg);
                    //     }
                    // });
                    // console.log(msg);
                })
                .then((json) => {
                    console.log('isOK:', this.state.isOK);
                    if (this.state.isOK) {
                        // this.setState({ id: json.id });
                        // if (this.state.id) {
                        this.props.navigation.navigate('PasswordLogin');
                        // }
                    }
                })
                .catch(error => console.log('error', error));
        } else {
            alert("两遍密码不一致，请重新输入");
        }


    }
    render() {
        // const { invisible1, invisible2, send } = this.state;
        return (
            <View style={styles.container}>

                <View style={[styles.headline]}>
                    <View style={[styles.title]}>
                        <Text style={[styles.titleText]}>
                            IT_novel 注册
                        </Text>
                    </View>
                    <View style={[styles.topLine]}>
                    </View>
                </View>

                <View style={[styles.allInput]}>
                    <View style={[styles.codeView]}>
                        <TextInput
                            style={[styles.codeInput]}
                            placeholder='用户名'
                            maxLength={10}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='设置密码'
                                style={[styles.codeInput]}
                                secureTextEntry={true}
                                maxLength={18}
                                onChangeText={(password) => { this.setState({ password }) }}
                            />
                        </View>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.codeInputS]}>
                            <TextInput
                                placeholder='确认密码'
                                style={[styles.codeInput]}
                                secureTextEntry={true}
                                maxLength={18}
                                onChangeText={(repassword) => { this.setState({ repassword }) }}
                            />
                        </View>
                    </View>
                </View>

                <View style={[styles.bottoms]}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('PasswordLogin') }}
                        style={[styles.cancel]}
                    >
                        <View style={[styles.cancelView]}>
                            <Text style={[styles.cancelText]}>
                                取消
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleRegister}
                        style={[styles.register]}
                    >
                        <View style={[styles.registerView]}>
                            <Text style={[styles.registerText]}>
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
    container: {

        marginLeft: Dimensions.get('screen').width / 30,
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
    bottoms: {
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').width / 8,
    },
    cancel: {
        marginLeft: Dimensions.get('screen').width / 5,
        backgroundColor: 'blue',
        width: Dimensions.get('screen').width / 8,
        height: Dimensions.get('screen').width / 10,
    },
    cancelText: {
        fontSize: 17,
        color: 'white'
    },
    register: {
        marginLeft: Dimensions.get('screen').width / 5,
        backgroundColor: 'blue',
        width: Dimensions.get('screen').width / 8,
        height: Dimensions.get('screen').width / 10,
    },
    registerText: {
        fontSize: 17,
        color: 'white'
    },
    allInput: {
        marginTop: Dimensions.get('screen').width / 10,
        marginLeft: Dimensions.get('screen').width / 20,
        marginRight: Dimensions.get('screen').width / 20,
    }
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