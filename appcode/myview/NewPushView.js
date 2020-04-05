import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View,Button,Text} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";
export default class NewPushView  extends BaseComponet{

    constructor(pros){
        super(pros);
        this.state = {
            npName:'',
        };
    }
    render(){
        return (
            <View style={styles.contain}>
                <Text>{this.state.npName}</Text>
            </View>
        );
    }
    componentDidMount(): void {
        let name = this.props.navigation.state.params.name;
        this.setState({
            npName:name,
        })

    }
}
const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#00ff0022',
        flex:1,
    },
});
