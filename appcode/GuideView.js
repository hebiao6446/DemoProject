import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
class GuideView extends Component{

    render(){
        return (
            <View>
                <Image source={this.props.name} key={this.props.key} style={styles.imgStyle} ></Image>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    imgStyle:{
        resizeMode:'cover',
        height: '100%',
        width: '100%',
    },

});
export default GuideView;
