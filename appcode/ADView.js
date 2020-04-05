import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HbImages from "./utils/HbImages";
import ADUtil from "./utils/ADUtil";

class ADView extends Component{
    constructor(pros){
        super(pros)
        this.state = {
            haveAD:false,
            adImgUrl:'',
            remainTime:5,
        }
    }
    render(){
        let showAD = this.state.haveAD && this.state.adImgUrl.length > 0 ;
        let showText = showAD ? <Image defaultSource={HbImages.img_launch}  style={styles.bgImage} source={{uri:this.state.adImgUrl}}></Image> : <Image defaultSource={HbImages.img_launch}  style={styles.bgImage}></Image> ;
        return (
            <View style={styles.container}>
                {showText}
                <View style={styles.djsView}  >
                    <Text style={styles.djsText}  onPress={
                        () => {
                            this.props.onButtonClick();
                        }
                    }
                    >{this.state.remainTime}s</Text>
                </View>
                <TouchableOpacity onPress={
                    () => {
                        this.props.onButtonClick();
                    }
                } >
                    <View style={styles.btnView} ></View>
                </TouchableOpacity>

            </View>)
    }
    componentDidMount(): void {

        ADUtil.getAdUrlImg().then((res)=>{
            this.setState({
                adImgUrl:res,
            })
        }).catch((e)=>{
        });
        ADUtil.hasAd().then((res)=>{
            if (res || res == 'true'){
                this.setState({
                    haveAD:true,
                })
            }
        }).catch((e)=>{

        });

        ADUtil.getAdDuringTime().then((res)=>{
            let rmt = Number.parseInt(res);
            this.setState({
                remainTime:rmt?rmt:3,
            })
            this.counFun(rmt);
        }).catch((e)=>{

        });
    }

    counFun(time):void{
        this.timer = setInterval(()=>{
            let t = this.state.remainTime - 1;
            if (t == 0){
                clearInterval(this.timer);
                this.props.onButtonClick();
            }else {
                this.setState({
                    remainTime:t,
                })
            }

        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bgImage:{
        width:'100%',
        height:'100%',
    },
    djsView:{
        width: 46,
        height: 46,
        position:'absolute',
        backgroundColor:'#e8e8e8',
        borderRadius: 23,
        top:'5%',
        left:'80%',


    },
    djsText:{
        width: 46,
        height: 46,
        fontSize:16,
        fontWeight: '200',
        textAlign:'center',
        textAlignVertical: 'center',
        ...Platform.select({
            ios:{lineHeight: 46},
            android:{},
        })
    },
    btnView:{
        backgroundColor:"#00000000",
        width:300,
        height:150,
        position:'absolute',
        left:'50%',
        bottom:30,
        transform:[{translateX:-150}],
    },

});
export default ADView;
