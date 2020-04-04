import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";

  class SecondView  extends BaseComponet{
    render(){
        return (
            <View style={styles.contain}>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#0000ff22',
        flex:1,
    },
});

const SecondNavi = createStackNavigator({
    Second: {
        screen: SecondView,
        navigationOptions: {
            title: '第2页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_BLUE,
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

export default SecondNavi;
