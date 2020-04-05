import React, {Component} from 'react';
import {Image, TouchableOpacity,Text} from "react-native";
import HbImages from "../utils/HbImages";

export default class LeftItemBar extends Component{
    constructor(pros) {
        super(pros)
    }
    render(){
        return <TouchableOpacity onPress={()=>{
            alert("xx"+ this.props.navi);

        }} ><Text style={{color:'white'}}>编辑</Text></TouchableOpacity>

    }
}
