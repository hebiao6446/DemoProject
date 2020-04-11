import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import HbImages from "../utils/HbImages";

export default class LoadDataView extends Component{
    constructor(pros){
        super(pros);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={HbImages.img_loadinggif} style={{width:200,height:200,resizeMode:'contain',}}/>
            </View>
        )
    }
    componentDidMount(): void {
    }
    componentWillUnmount(): void {
        this.setState = (state,callback)=>{
            return;
        };
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
