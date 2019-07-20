import React from 'react';
import '../assets/css/detail.css'
import {Link} from "react-router-dom";
import { Button } from 'antd-mobile';
import querystring from 'query-string';
import {asyncAction} from "../store/asyncAction";
import * as types from "../store/types";
import {connect} from "react-redux";
class Detail extends React.Component{
    componentDidMount() {
        let {match,location,history}=this.props;
        let id=match.params.id;
        let dataName=querystring.parse(location.search).dataName;
       this.props.getDetail(id,dataName)

    }
    ADD_ITEM=()=>{
        //console.log({...this.props.data,...{num:1}})
        localStorage.setItem('react_buycar',JSON.stringify({...this.props.data,...{num:1}}))
        this.props.history.push('/buycar')
    }
    render(){
        let dataName=querystring.parse(this.props.location.search).dataName;
        let {data}=this.props;
        return (
            <div className="detail">
                <header>
                    <div className="navtitle">
                        <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                        <span className="n-title">商品详情</span>
                        <Link to="/buycar" className="navtitle-car">
                        </Link>
                    </div>
                </header>
                <ul className="plist3">
                    <li>
                        <div className="info">
                            {dataName=='banner'? <img src={"http://localhost:3001"+data.banner}/>:<img src={"http://localhost:3001"+data.src}/>}
                            <p>{data.name}</p>
                            <span className="price">现价：￥<i>{data.newprice}</i></span>
                            <span className="oldprice"><del>原价：￥{data.oldprice}</del></span>
                        </div>
                        <div className="goods_service">
                            <span>正品保障</span>
                            <span>14天退换货</span>
                        </div>
                    </li>
                </ul>
                <p className="menu">图文详情<i>(建议在wifi下查看)</i></p>
                {
                    data.detail&&<div className="Miaoshu"><img src={"http://localhost:3001"+data.detail.icon}/></div>
                }

                <div className="btngroup">
                    <Button
                        inline
                        size="small"
                        type="primary"
                        style={{marginLeft:"30px",float:"left"}}
                        onClick={()=>{this.props.history.push('/accounts')}}

                    >立即购买</Button>
                    <Button
                        type="warning"
                        inline
                        style={{marginRight:"30px",float:"right"}}
                        size="small"
                        onClick={this.ADD_ITEM}>加入购物车
                    </Button>
                </div>
            </div>
        )
    }
}

const initMapStateToProps =state =>({
    data:state.detail
})
const initMapDispatchToProps =dispatch =>({
    getDetail:(id,dataName)=>dispatch(asyncAction({
        url:`/api/${dataName}/${id}`,
        typeName:types.UPDATE_DETAIL
    }))

})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail)