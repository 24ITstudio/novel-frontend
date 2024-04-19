// 从这无法将示例数据传过去（先解决home传novelName问题）
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, FlatList, StyleSheet, ActivityIndicator, Dimensions, Image } from 'react-native';
import PasswordLoginScreen from './0_passwordLogin';

export default class ClassificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classifications: [],
            isloading:true,
            type:'t1',
            books:{}
        }
    }
    getBookByClassification = () => {
        const {type} = this.state;
        fetch(`http://124.70.57.215:8000/novel-tag?search=${type}`)
        .then(response => response.json())
        .then((json)=>{
            this.setState({books:json})
        })
        .finally(this.setState({isloading:false}));
        
    }
    componentDidMount() {
        this.getBookByClassification();
        fetch('http://124.70.57.215:8000/novel-tag/')
        .then(response => response.json())
        .then((json)=>{
            this.setState({classifications: json})
        })
        .finally(()=>{
            this.setState({isloading:false})
        });
    }
  render() {
    const {isloading} = this.state;
    const goToDetails = (id) => {
        this.props.navigation.navigate('Details',{
            username:this.props.route.params.username,
            id:id
        });
    }
    return (
        <View style={{flex:1}}>
            {isloading ? <ActivityIndicator /> :(
                <FlatList
                    data={this.state.books}
                    renderItem={
                        ({item})=>(
                            <TouchableOpacity
                                onPress={()=>{
                                    goToDetails(item.id);
                                    }}>
                                <View style={[styles.classInner]}>
                                    <Image
                                        style={[styles.classCover]}
                                        source={require('../asserts/cover_0.png')}
                                    />
                                    <View style={[styles.classIntro]}>
                                        <Text style={[styles.className]}>{item.name}</Text>
                                        <Text style={[styles.classDesc]}>{item.desc}</Text>
                                    </View>
                                    <Text style={[styles.classClick]}>点击阅读</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    } 
                    ListHeaderComponent={<FlatList 
                        horizontal={true}
                        data={this.state.classifications}
                        renderItem={({item})=>(
                            <TouchableOpacity onPress={()=>{
                                    this.setState({type:item},
                                    () => {
                                        this.getBookByClassification();
                                    })
                            }}>
                                <View style={{
                                    backgroundColor:item == this.state.type ? '#00f0ff':'#fff',
                                    height:30,
                                    width:50,
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginBottom: 20,
                                }}>
                                    <Text style={{fontSize:20,fontWeight:'bold'}}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />}
                />
            )}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    headerList:{
        flex:1,
        backgroundColor:'#00f0ff',
        height:30,
        width:50,
        justifyContent:'center',
        alignItems:'center',
    },
    classRak: {
        marginTop: 20,
    },
    classInner: {
        marginLeft: 15,
        marginRight: 15,
        flexDirection: 'row',
    },
    classCover: {
        width: Dimensions.get('screen').width / 7,
        height: Dimensions.get('screen').width / 7,
    },
    classIntro: {
        marginLeft: 15,
        width: Dimensions.get('screen').width * 2.8 / 5,
    },
    className: {
        fontSize: 23,
    },
    classDesc: {
        fontSize: 16,
    },
    classClick: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    }
})
