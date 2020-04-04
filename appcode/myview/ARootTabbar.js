import {Image, Text, View, StyleSheet, DeviceEventEmitter} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs"
import HbColor from "../utils/HbColor";
import HbImages from "../utils/HbImages";

// import FirstView from "./FirstView";
// import SecondView from "./SecondView";
// import ThirdView from "./ThirdView";
// import FourthView from "./FourthView";
import FirstNavi from "./FirstView";
import SecondNavi from "./SecondView";
import ThirdNavi from "./ThirdView";
import FourthNavi from "./FourthView";
const RootTabbar = createBottomTabNavigator(
    {
        First:{
            screen:FirstNavi,
            navigationOptions:{
                tabBarLabel:'一',
                tabBarIcon: ({ tintColor, focused }) => {
                    return <Image
                        source={HbImages.img_tabbar1}
                        style={focused?TabbarStyles.tabbarSelect:TabbarStyles.tabbleUnselect}
                    />
                }
            }
        },
        Second:{
            screen:SecondNavi,
            navigationOptions:{
                tabBarLabel:'two',
                tabBarIcon: ({ tintColor, focused }) => {
                    return <Image
                        source={HbImages.img_tabbar2}
                        style={focused?TabbarStyles.tabbarSelect:TabbarStyles.tabbleUnselect}
                    />
                }
            }
        },
        Third:{
            screen:ThirdNavi,
            navigationOptions:{
                tabBarLabel:'삼',
                tabBarIcon: ({ tintColor, focused }) => {
                    return <Image
                        source={HbImages.img_tabbar3}
                        style={focused?TabbarStyles.tabbarSelect:TabbarStyles.tabbleUnselect}
                    />
                }
            }
        },
        Fourth:{
            screen:FourthNavi,
            navigationOptions:{
                tabBarLabel:'よん',
                tabBarIcon: ({ tintColor, focused }) => {
                    return <Image
                        source={HbImages.img_tabbar3}
                        style={focused?TabbarStyles.tabbarSelect:TabbarStyles.tabbleUnselect}
                    />
                }
            }
        }
    },
    {
        initialRouteName:'First',
        order:['First','Second','Third','Fourth'],
        tabBarOptions:{
            activeTintColor:HbColor.COLOR_DEF,
            activeBackgroundColor:'#00000000',
            inactiveTintColor:HbColor.COLOR_abaaaa,
            inactiveBackgroundColor:'#00000000',
            showLabel:true,
            showIcon:true,
            style:{
                // borderTopColor: 'red',
                height: 49,
            },
            tabStyle:{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            labelStyle:{
                fontSize:11,
            },
            allowFontScaling:false,

        },
        defaultNavigationOptions:({navigation})=>({
            tabBarVisible:true,
            tabBarIcon:({focused, horizontal, tintColor })=>{
                const { routeName } = navigation.state; // 选项卡名称
                let textStyle = {};
                if(focused){
                    textStyle = {
                        color: 'red'
                    };
                }
                return(
                    <View>
                        <Text style={textStyle}>{routeName}-Icon</Text>
                    </View>
                );

            },
            tabBarLabel:({focused, tintColor})=>{
                const { routeName } = navigation.state; // 选项卡名称
                console.log(focused); // 是否处于活动状态,是为true
                console.log(tintColor); // 状态颜色值
                return(
                    <View>
                        <Text>{routeName}-Label</Text>
                    </View>);
            }
        })
    }
);

const TabbarStyles = StyleSheet.create({
    tabbarSelect:{
        tintColor: HbColor.COLOR_DEF,
        height:'70%',
        resizeMode:'contain',
    },
    tabbleUnselect:{
        tintColor: HbColor.COLOR_abaaaa,
        height:'70%',
        resizeMode:'contain',
    }
})

export default RootTabbar;
