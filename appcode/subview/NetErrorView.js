import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, TouchableOpacity, View} from "react-native";
import HbImages from "../utils/HbImages";

export default class NetErrorView extends Component{

    constructor(pros){
        super(pros);
        this.state = {
            imgW:0,
            imgH:0,
        };
    }
    render(){
        return (<View style={styles.container}>
            <TouchableOpacity onPress={
                () => {
                    this.props.onRefreshClick();
                }
            } >
                <Image source={HbImages.img_neterror}  style={{width:this.state.imgW,height:this.state.imgH,resizeMode:'contain',}} />

            </TouchableOpacity>
        </View>)
    }
    //  https://www.hangge.com/blog/cache/detail_1542.html

    componentDidMount(): void {
        let w = Image.resolveAssetSource(HbImages.img_neterror).width;
        let h = Image.resolveAssetSource(HbImages.img_neterror).height;
        let iw = Dimensions.get('window').width/2;
        let ih = iw*h/w;
        this.setState({
            imgW:iw,
            imgH:ih,
        })
        /*
   Image.getSize(Image.resolveAssetSource(HbImages.img_neterror),(w,h)=>{

       let iw = Dimensions.get('window').width/2;
       let ih = iw*h/w;
       this.setState({
           imgW:iw,
           imgH:ih,
       })
        });
*/
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
