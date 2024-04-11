import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ITLogo } from "../asserts/IT.jpg";

export default class UserInfoScreen extends Component {
    // function UserInfoScreen({ navigation }) {
    constructor(props) {
        super(props);
        this.state = {
            id: [],
            isLoading: true,
            flag: false,

            username: '',
            password: '',
        };
    }

    componentDidMount() {
        const { route, navigation } = this.props;
        const { username } = route.params;
        // console.log('Username:', username);
    }

    render = () => {
        // const { route } = this.props;
        // const { username } = route.params;
        // const { username } = this.props.route.params;
        // const { username } = this.state;
        const { route, navigation } = this.props;
        const { username } = route.params;
        console.log('4_userInfo_Username:', username);

        // const username = route && route.params ? route.params.username : "无";

        return (
            <View >
                {/* <View style={[styles.top]}> */}
                <View style={[styles.top]}>
                    <View style={[styles.headDisplay]}>
                        {/* <Text>头像</Text> */}
                        <Image
                            source={require('../asserts/IT.jpg')}
                            style={[styles.head]}
                        />
                    </View>
                    <View style={[styles.selfInfo]}>
                        <View style={[styles.nameDisplay]}>
                            <Text style={[styles.nameInner]}>{username}</Text>
                        </View>
                        {/* <View> */}
                        <Text style={[styles.ITIntro]}>IT小说，快乐追书~</Text>
                        {/* </View> */}
                    </View>
                    <View style={[styles.editInfo]}>
                        {/* <Text>编辑资料 ＞</Text> */}
                        <Button
                            title='编辑资料 ＞'
                            color='#0e53ff'
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
                    <TouchableOpacity style={[styles.selfFunc]}>
                        <Image
                            source={require('../asserts/comment.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>我的评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selfFunc]}>
                        <Image
                            source={require('../asserts/formation.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>我的消息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selfFunc]}>
                        <Image
                            source={require('../asserts/password.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>修改密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.selfFunc]}>
                        <Image
                            source={require('../asserts/logout.png')}
                            style={[styles.funcImg]}
                        />
                        <Text style={[styles.funcName]}>退出登录</Text>
                    </TouchableOpacity>
                    {/* <MineButton person={{ name: "我的评论", source: 'comment', value: 1 }} />
                <MineButton person={{ name: "我的消息", source: "chatbubble-ellipses-outline", value: 1 }} />
                <MineButton person={{ name: "修改密码", source: "document-text-outline", value: 1 }} />
                <MineButton person={{ name: "退出登录", source: "star-outline", value: 1 }} /> */}
                </View>


                {/* < View >
                < Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')
                    }
                />
            </View > */}
            </View>
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
    }
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