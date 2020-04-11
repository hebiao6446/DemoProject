import BaseComponet from "./BaseComponet";
import {Image, StyleSheet, View,FlatList,RefreshControl,ActivityIndicator,Text} from "react-native";
import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import HbColor from "../utils/HbColor";
import SecondViewCell from "./SecondViewCell";


import NetErrorView from "../subview/NetErrorView";
import LoadDataView from "../subview/LoadDataView";
import NodataView from "../subview/NodataView";

class SecondView  extends BaseComponet{
    constructor(props){
        super(props);
        this.state={
            start:1,
            num:10,
            arrList:[],
            netError:false,
            isRefreshing:false,
            footerStatus:0,
            canLoadMore:false,
        };
        this.refreshData = this.refreshData.bind(this);
    }
    refreshData():void{

        this.setState({
            start:1,
            isRefreshing:true,
        },()=>{
            this.getDaraFromUrl();
        });

    }
    render(){
        return (
            <View style={styles.contain}>

                {this.state.arrList.length > 0 ?
                <FlatList
                    data={this.state.arrList}
                    renderItem={this.renderItemView}
                    keyExtractor={(item, index) => (index + '1')}
                    refreshControl={
                        <RefreshControl
                            title={'加载中...'}
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.refreshData.bind(this)}//因为涉及到this.state
                            colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                    onEndReachedThreshold={0.2}
                    onScrollBeginDrag={()=>{
                        this.state.canLoadMore = false;
                    }}
                    onScrollEndDrag={()=>{
                        this.state.canLoadMore = true;
                    }}
                    onMomentumScrollBegin={()=>{
                        this.state.canLoadMore = false;
                    }}
                    onMomentumScrollEnd={()=>{
                        this.state.canLoadMore = true;
                    }}
                    ListFooterComponent={()=>this.loadMoreView()}//上拉加载更多视图
                    ItemSeparatorComponent = {
                        ()=>{
                            return (<View style={{height: 1, width: '100%', backgroundColor: '#e2e2e2'}}/>)
                        }
                    }
                    onEndReached={()=>{
                        // 数据少
                        if (this.state.footerStatus != 1) return;
                        // if (!this.state.canLoadMore) return;
                        this.setState({
                            start:this.state.start+1,
                        },()=>{
                            this.getDaraFromUrl();
                        })
                    }}
                />: (this.state.netError ? <NetErrorView  onRefreshClick = {this.refreshData}/> : (this.state.isRefreshing ? <LoadDataView /> : <NodataView /> )) }


            </View>
        );
    }
    componentDidMount(): void {
        this.getDaraFromUrl();
    }

    renderItemView({item}) {
        return (
            <SecondViewCell item = {item}   onItemClick = {()=>{
                    console.log(item.title)
            }}  />
        );
    }


    loadMoreView(){
        if (this.state.footerStatus == 0 ){
            return null;
        }else if (this.state.footerStatus == 1){
            return (<View style={{alignItems:'center',height:70,width:'100%',}}>
                <ActivityIndicator
                    style={{
                        margin:10}}
                    size={'small'}
                    animating={true}
                />
                <Text>正在加载更多</Text>
            </View>);
        }else {
            return (<View style={{alignItems:'center',height:44,width:'100%',textAlign: 'center',justifyContent: 'center'  }}>
                <Text>没有更多数据</Text>
            </View>);
        }
    }
    getDaraFromUrl():void{
        let url = "https://way.jd.com/jisuapi/get?appkey=cecba3ef670321c25c7246174f586113";
        let para = {
            start:this.state.start,
            num:this.state.num,
            channel:"头条"
        };
        this.postHttp(url,para).then((res)=>{
            if (res.result.status == 0){
                let dataList = res.result.result.list;
                let newList  = this.state.arrList.concat(dataList);
                let ftStatus =  dataList.length == this.state.num ? 1:2;
                let ddList = this.state.start == 1 ? dataList : newList;
                this.setState({
                    arrList:ddList,
                    footerStatus:ftStatus,
                    isRefreshing:false,
                    netError:false,
                })


            }else {
                this.setState({
                    isRefreshing:false,
                    netError:false,
                })
            }

        }).catch((e)=>{
            this.setState({
                isRefreshing:false,
                netError:true,
            })
        });
    }

    postHttp(url,postDic):Promise{
          return fetch(url,{
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(postDic),
          }).then((response) =>
          {
              return response.json()
          });
    }
}
const styles = StyleSheet.create({
    contain:{
        backgroundColor:'#ffffff',
        flex:1,
    },
});

const SecondNavi = createStackNavigator({
    Second: {
        screen: SecondView,
        navigationOptions: {
            title: '第2页',
            headerStyle: {
                backgroundColor: HbColor.COLOR_BLUE,
            },
            headerTintColor: '#ffffff',
        },
    },
}, {
    navigationOptions: ({
                            navigation
                        }) => ({
        tabBarVisible: navigation.state.index > 0 ? false : true,
    })
});

export default SecondNavi;
