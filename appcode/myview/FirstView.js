import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";
class FirstView  extends BaseComponet{
    render(){
        return (
            <View style={styles.contain}>
            </View>
        );
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
        },
    },
}, {
    navigationOptions: ({
                            navigation
                        }) => ({
        tabBarVisible: navigation.state.index > 0 ? false : true,
    })
});

export default FirstNavi;
