import React, {Component} from 'react';

class BaseComponet extends Component{
    constructor(){
        super();
    }

    pop():void{
        this.props.navigation.goBack();
    }
    popToRoot():void{
        this.props.navigation.popToTop();
    }
    push(name,data = {}):void{
        const {navigate} = this.props.navigation;
        navigate(name,data);
    }
    pushNavi(that,name,data = {}):void{
        const {navigate} = that.props.navigation;
        navigate(name,data);
    }




}

export default BaseComponet;
