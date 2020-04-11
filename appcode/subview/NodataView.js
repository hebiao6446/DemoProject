import React, {Component} from "react";
import {Image, StyleSheet, View,Dimensions} from "react-native";
import HbImages from "../utils/HbImages";
export default class NodataView extends Component{


    constructor(pros){
        super(pros);
        this.state = {
            imgW:0,
            imgH:0,
        };
    }


    render(){
        return(
            <View style={styles.container}>
                <Image source={HbImages.img_empty} style={{width:this.state.imgW,height:this.state.imgH,resizeMode:'contain',}}/>
            </View>
        )
    }
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
        Image.getSize(Image.resolveAssetSource(HbImages.img_empty),(w,h)=>{
            let iw = Dimensions.get('window').width/2;
            let ih = iw*h/w;
            this.setState({
                imgW:iw,
                imgH:ih,
            })
        });

         */
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
    image:{
        width:'50%',
        resizeMode:'contain',
        backgroundColor: '#00ff00'

    }
})
