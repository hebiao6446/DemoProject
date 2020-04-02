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

class App extends Component{
  render() {
    return (
        <View style={styles.view1}>
        <GuideGroup/>
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