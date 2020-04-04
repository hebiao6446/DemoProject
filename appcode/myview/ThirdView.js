import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";

  class ThirdView  extends BaseComponet{

    render(){
        return (
            <View style={styles.contain}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#ff00ff22',
        flex:1,
    },
});


const ThirdNavi = createStackNavigator({
    Third: {
        screen: ThirdView,
        navigationOptions: {
            title: '第2页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_111111,
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

export default ThirdNavi;
