import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class LoginScreen extends Component {
    constructor() {
        super()

        this.state = {
            invisible: true,
            send: "发送验证码",
            username: '',
            code: ''
        }
    }
    handleLogin = () => {
        this.props.navigation.navigate('IT_novel')
    }
    render() {
        const { send } = this.state;
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
                            onChangeText={(username) => { this.setState({ username }) }}
                        />
                    </View>
                    <View style={[styles.firstLine]}>
                    </View>
                    <View style={[styles.codeView]}>
                        <View style={[styles.code]}>
                            <TextInput
                                placeholder='验证码'
                                style={[styles.codeInput]}
                                onChangeText={(code) => { this.setState({ code }) }}
                            //secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity>
                            <View style={[styles.sendCodeView]}>
                                <Text style={[styles.sendCode]}>
                                    {send}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.secondLine]}>

                    </View>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('PasswordLogin') }}
                    >
                        <View style={[styles.passwordLoginView]}>
                            <Text style={[styles.passwordLogin]}>
                                密码登录
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.bottoms]}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('Register') }}
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
    //         marginTop: 70,
    //         marginLeft: 50,
    //         marginBottom: 0
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
    //         backgroundColor: 'white',
    //         marginRight: 500,
    //         borderRadius: 10,
    //         marginLeft: 100,
    //         marginTop: 20
    //     },
    //     headline: {
    //         marginTop: 200
    //     },
    //     bottoms: {
    //         flexDirection: 'row',
    //         marginLeft: 600,
    //         marginTop: 100
    //     },
    //     login: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     loginView: {
    //         backgroundColor: 'rgb(252,232,158)',
    //         height: 80,
    //         width: 180,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: 20
    //     },
    //     register: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     registerView: {
    //         backgroundColor: 'rgb(252,232,158)',
    //         height: 80,
    //         width: 180,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         marginRight: 30,
    //         borderRadius: 20
    //     },
    //     head: {
    //         color: 'white',
    //         fontSize: 60,
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     },
    //     headView: {
    //         //marginTop: 20
    //         marginLeft: 100
    //     },
    //     inputs: {
    //         backgroundColor: 'rgb(250,235,180)',
    //         marginTop: 50,
    //         borderRadius: 20,
    //         marginLeft: 100,
    //         marginRight: 100,
    //         justifyContent: 'flex-end'
    //     },
    //     firstLine: {
    //         height: 2,
    //         //margin: 3,
    //         color: 'white',
    //         backgroundColor: 'white',
    //         marginRight: 80,
    //         borderRadius: 1,
    //         marginLeft: 60,
    //         marginTop: 0
    //     },
    //     secondLine: {
    //         height: 2,
    //         //margin: 3,
    //         color: 'white',
    //         backgroundColor: 'white',
    //         marginRight: 80,
    //         borderRadius: 1,
    //         marginLeft: 60,
    //         marginTop: 0
    //     },
    //     codeView: {
    //         marginTop: 20,
    //         flexDirection: 'row',
    //         marginLeft: 60
    //     },
    //     code: {
    //         width: 500
    //     },
    //     sendCodeView: {
    //         backgroundColor: 'white',
    //         marginTop: 30,
    //         height: 50,
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         width: 200
    //     },
    //     sendCode: {
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold',
    //         fontSize: 30
    //     },
    //     passwordLoginView: {
    //         marginLeft: 60,
    //         marginTop: 50,
    //         marginBottom: 50
    //     },
    //     passwordLogin: {
    //         fontSize: 30,
    //         fontFamily: global.font_family,
    //         fontWeight: 'bold'
    //     }
})