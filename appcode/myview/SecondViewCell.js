import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {Component} from "react";
export default class SecondViewCell extends Component{

    /*
    render(){
        let imgUrl = "https://p.ivideo.sina.com.cn/video/331/403/567/331403567.jpg";
        return (
            <TouchableOpacity onPress={()=>{
                this.props.onItemClick();
            }}>
                <View style={styles.container}>
                    <Image source={{uri:imgUrl}} style={{width:70,height:70,margin:10,borderRadius:3,}}/>
                    <View style={styles.container1}>
                        <Text style={{color:'#000000',fontSize:15,fontWeight:'900'}} >测试列表内容</Text>
                        <Text style={{color:'#efaf23',fontSize:14}} >红星视频</Text>
                        <Text style={{color:'#323232',fontSize:12}} >2020-04-10 10:22:00</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

     */


    render(){

        return (
            <TouchableOpacity onPress={()=>{
                this.props.onItemClick();
            }}>
                <View style={styles.container}>
                    <Image source={{uri:this.props.item.pic}} style={{width:70,height:70,margin:10,borderRadius:3,}}/>
                    <View style={styles.container1}>
                        <Text style={{color:'#000000',fontSize:15,fontWeight:'900'}} >{this.props.item.title}</Text>
                        <Text style={{color:'#efaf23',fontSize:14}} >{this.props.item.src}</Text>
                        <Text style={{color:'#323232',fontSize:12}} >{this.props.item.time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        height:90,
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor: '#ffffff',
    },
    container1:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor:"#f2f2f2",
        margin:10
    },

});
