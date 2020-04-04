import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar, DeviceEventEmitter,
} from 'react-native';
import ADView from "./ADView";
import GuideGroup from "./GuideGroup";
import ADUtil from "./utils/ADUtil";
class LaunchView extends Component{
    constructor(pros){
        super(pros);
        this.state={
            isFirstLoad:true,
        };
        this.onEnterHome = this.onEnterHome.bind(this);
    }
    onEnterHome(){
        const {navigate} = this.props.navigation;
        navigate('Tabbar');
    }
    render(){
        let mView = this.state.isFirstLoad ?  <GuideGroup  onButtonClick = {this.onEnterHome} /> :  <ADView  onButtonClick = {this.onEnterHome} /> ;
        return (
            <>
                <StatusBar barStyle="dark-content"
                           backgroundColor="blue"
                />
                <SafeAreaView style={styles.container}>
                    {mView}
                </SafeAreaView>
            </>
        );
    }

    componentDidMount(): void {
        ADUtil.ftStart().then((res)=>{
            if (res == 'false'){
                this.setState({
                    isFirstLoad:false,
                })
            }
        }).catch((e)=>{

        });
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

});

export default LaunchView;
