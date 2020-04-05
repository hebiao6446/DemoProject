import React, {Component} from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import HbImages from "../utils/HbImages";
export default class RightItemBar extends Component{
    render(){
        return <TouchableOpacity><Image style={{backgroundColor:''}} source={HbImages.bar_item_sc}/></TouchableOpacity>

    }
}
