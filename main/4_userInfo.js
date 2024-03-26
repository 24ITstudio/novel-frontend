import { TransitionIOSSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

function InfoDisplay({ info }) {
    return (
        <View>
            <Text>{info.num}</Text>
            <Text>{info.title}</Text>
        </View>
    );
};

function MineButton({ person }) {
    return (
        <TouchableOpacity>
            <Ionicons name={person.source} style={[styles.ioni]} />
            <Text>{person.name}</Text>
        </TouchableOpacity>

    );
};

function UserInfoScreen({ navigation }) {
    return (
        <View style={[styles.total]}>
            {/* <View style={[styles.top]}> */}
            <TouchableOpacity style={[styles.top]}>
                <View>
                    <Text>头像</Text>
                </View>
                <View>
                    <View>
                        <Text>名称</Text>
                    </View>
                    <View>
                        <Text>夸克小说，快乐追书~</Text>
                    </View>
                </View>
                <View>
                    <Text>个人主页 ＞</Text>
                </View>
            </TouchableOpacity>
            {/* </View> */}

            <View style={[styles.infoDisplays]}>
                <InfoDisplay info={{ title: "关注", num: 0 }} />
                <InfoDisplay info={{ title: "粉丝", num: 1 }} />
                <InfoDisplay info={{ title: "获赞", num: 2 }} />
            </View>

            <View style={[styles.mineButtons]}>
                <MineButton person={{ name: "我的消息", source: 'chatbubbles-outline' }} />
                <MineButton person={{ name: "我的评论", source: "chatbubble-ellipses-outline" }} />
                <MineButton person={{ name: "我的帖子", source: "document-text-outline" }} />
                <MineButton person={{ name: "我的收藏", source: "star-outline" }} />
            </View>

            <View>
                <View>
                    <Text>常用功能</Text>
                </View>
                {/* <FlatList

                /> */}
            </View>
            <View>
                {/* <Text>UserInfoScreen</Text> */}
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </View>
    );
}
export default UserInfoScreen

const styles = StyleSheet.create({
    total: {

    },
    top: {
        flexDirection: 'row',
    },
    infoDisplays: {
        flexDirection: 'row',
    },
    mineButtons: {
        flexDirection: 'row',
    },
    ioni: {
        width: 30,
        height: 30
    }
})