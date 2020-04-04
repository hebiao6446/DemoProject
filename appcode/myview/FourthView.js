import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";
 class FourthView  extends BaseComponet{

    render(){
        return (
            <View style={styles.contain}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#00ff0022',
        flex:1,
    },
});
const FourthNavi = createStackNavigator({
    Fourth: {
        screen: FourthView,
        navigationOptions: {
            title: '第4页',
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

export default FourthNavi;
