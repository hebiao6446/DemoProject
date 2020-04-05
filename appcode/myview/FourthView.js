import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View,Text} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";

import RightItemBar from "../subview/RightItemBar";
import LeftItemBar from "../subview/LeftItemBar";
import FourEditView from "./FourEditView";
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
        navigationOptions: (navigation) => ({
            title: '第4页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_e85b53,
            },
            headerTintColor: '#ffffff',
            headerRight:<RightItemBar/>,
            headerLeft:<LeftItemBar />
        }),
    },
    EditView:{
        screen: FourEditView,
        navigationOptions: ({navigation}) => ({
            title: '编辑页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_ffffff,
            },
            headerTintColor: '#aa02a4',
        }),
    }
}, {
    navigationOptions: ({
                            navigation
                        }) => ({
        tabBarVisible: navigation.state.index > 0 ? false : true,
    })
});

export default FourthNavi;
