/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GuideGroup from './appcode/GuideGroup';
import ADView from "./appcode/ADView";
import RootTabbar from "./appcode/myview/ARootTabbar";
import LaunchView from "./appcode/LaunchView";
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

/*

class App extends Component{
  render() {
    return (
        <View style={styles.view1}>
        <ADView/>
        </View>
  )
  }
}
const styles = StyleSheet.create({
  view1:{
    flex:1,
    justifyContent:'center',
  }
});
export default App;

*/

const navi = createSwitchNavigator({
    //所有切换控制器列表
    Launch:LaunchView,
    Tabbar:{
        screen:RootTabbar,
    },
},{
    //默认的控制器
    initialRouteName:'Launch',
});
const  App = createAppContainer(navi);
export default App;
