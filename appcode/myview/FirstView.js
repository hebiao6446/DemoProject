import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View, Button, TouchableOpacity,Text} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";
import NewPushView from "./NewPushView";
import LeftItemBar from "../subview/LeftItemBar";


class FirstView  extends BaseComponet{
    constructor() {
        super();
        this.state = {
          fvName:"动态标题1",
        };
    }
    render(){
        return (
            <View style={styles.contain}>

                <TouchableOpacity onPress={
                    () => {
                        let data = {name:'金三pang'};
                        const {navigate} = this.props.navigation;
                        navigate("NewPush",data);
                    }
                } >
                    <View style={{width: 100,height: 50,backgroundColor:"#0ff000aa"}} ></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={
                    () => {
                        this.setTitle('标题修改了');
                    }
                } >
                    <View style={{width: 100,height: 50,backgroundColor:"#0f00f0aa"}} ><Text style={{color:'#FFFFFF',padding:20}}>改标题</Text></View>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount(): void {
        this.setTitle('动态标题33');

        this.props.navigation.setParams({navigatePress:this.clickBarButton})
    }

    setTitle(str){
        const { setParams } = this.props.navigation;
        setParams({ title: str });
    }

    clickBarButton(){
        alert('bar button');
    }

    static navigationOptions = ({navigation,screenProps}) =>  {
        const { params } = navigation.state;

        return ({
            headerTitle:params?params.title:"wz",
            headerLeft:<TouchableOpacity onPress={()=>{
                console.log(navigation);
                let data = {name:'编辑动态标题'};
                navigation.push("NewPush",data);
            }} ><Text>确定</Text></TouchableOpacity>,

            headerRight:<TouchableOpacity onPress={()=>{
                // navigation.state.params.navigatePress()
                params?params.navigatePress():{};
            //
            }} ><Text>方法</Text></TouchableOpacity>,
        })
    }

}
const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#ff000022',
        flex:1,
    },

});
const FirstNavi = createStackNavigator({
    First: {
        screen: FirstView,
        navigationOptions: {
            title: '第一页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_e85b53,
            },
            headerTintColor: '#ffffff',
            // headerRight:
        },
    },
    NewPush:{
        screen: NewPushView,
        navigationOptions: {
            title: '新页面',
            headerStyle: {
                backgroundColor: HbColor.COLOR_3D8BAA,
            },
            headerTintColor: '#ffffff',
            // headerRight:
        },
    }
}, {
    navigationOptions: ({
                            navigation
                        }) => ({
        //如果第二个页面还需要底部的四个按钮，那么把下面段代码注释掉
        tabBarVisible: navigation.state.index > 0 ? false : true,
    })
});

export default FirstNavi;
