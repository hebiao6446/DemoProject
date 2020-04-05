import React, {Component} from 'react';
import HbImages from "./utils/HbImages";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import GuideView from "./GuideView";
import PageControl from 'react-native-page-control';
import ViewPager from "@react-native-community/viewpager";
import ADUtil from "./utils/ADUtil";
class GuideGroup extends Component{
    constructor(pros){
        super(pros);
        this.state = {
            imgArray:[HbImages.img_guide1,HbImages.img_guide2,HbImages.img_guide3,HbImages.img_guide4,HbImages.img_guide5],
            showButton:false,
            currentPage:0,
        }
        this.viewPagerSelectCurrent = this.viewPagerSelectCurrent.bind(this);
    }
    viewPagerSelectCurrent(tag) {

        this.setState({
            currentPage:tag.nativeEvent.position,
            showButton:tag.nativeEvent.position === 4,
        })
    }
    render(){
        return <View style={styles.container}>
            <ViewPager style={styles.viewPager}
                       initialPage={0} orientation={'horizontal'}
                       onPageSelected={this.viewPagerSelectCurrent}
            >
                {
                    this.state.imgArray.map(function (v,i) {
                        return <GuideView name={v} key={i} />
                    })
                }
            </ViewPager>
            <TouchableOpacity style={styles.btnView} onPress={
                () => {
                    if (!this.state.showButton) return;
                    this.props.onButtonClick();
                    ADUtil.setFtStart(false).then(r => {

                    });
                }
            } >
            </TouchableOpacity>
            <PageControl
                style={{position:'absolute', left:0, right:0, bottom:15}}
                numberOfPages={5}
                currentPage={this.state.currentPage}
                hidesForSinglePage
                pageIndicatorTintColor='#abaaaa'
                currentPageIndicatorTintColor='#313232'
                indicatorStyle={{borderRadius: 5}}
                currentIndicatorStyle={{borderRadius: 5}}
                indicatorSize={{width:8, height:8}}
            />
        </View>
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewPager:{
        flex:1,
    },
    btnView:{
        backgroundColor:"#00ff0000",
        width:350,
        height:70,
        position:'absolute',
        // left:'50%',
        bottom:30,
        ...Platform.select({
            // ios:{ transform:[{translateX:'-150'}],},
            // android:{},
        })

    },

});

export default GuideGroup;

