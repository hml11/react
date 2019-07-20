import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd-mobile';
import '../assets/css/user.css';
import {withRoute}from 'react-router-dom';
class User extends React.Component{
    logout=()=>{
        axios({
            url:'/api/logout',
            method:'put'
        }).then(
            res=>{
            console.log('zhuxiao',res);
            if(res.data.err===0){
                this.props.history.push('/login')
                //console.log(this.props)
            }}
        )
    }

    render(){
        console.log(this.props.userdata);
        let{data:{icon,nikename}}=this.props.userdata
        return(
            <div className="user">
                <header>
                    <div className="navtitle">
                       <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                        <span className="n-title">个人中心</span>
                        <Link to="/home" className="navtitle-home"/>
                    </div>
                </header>
                <div className="user-content">
                    <ul className="userinfo">
                        <li style={{float:"left"}}>
                            <p style={{fontSize: "16px"}}>{nikename}</p>
                        </li>
                        <li style={{float:"right"}}><Button
                            type="ghost"
                            size="small"
                            inline
                            onClick={this.logout}
                        >注销</Button></li>
                    </ul>
                    <ul className="moneyinfo">
                        <li>
                            <p style={{color: "#999"}}>可用积分</p>
                            <p className="redfont">20分</p>
                        </li>
                        <li>
                            <p style={{color: "#999"}}>可用余额</p>
                            <p className="redfont">￥0.00</p>
                        </li>
                        <li>
                            <Button inline type="warning">去充值</Button>
                        </li>
                    </ul>
                    <ul className="menulist">
                        <a href="javascript:;">
                            <li style={{marginBottom: "10px"}}>
                                <span>全部订单</span>
                                <b>＞</b>
                            </li>
                        </a>
                        <a href="javascript:;">
                            <li>
                                <span>待付款</span>
                                <b>＞</b>
                                <em>5</em>
                            </li>
                        </a>
                        <a href="javascript:;">
                            <li>
                                <span>代发货</span>
                                <b>＞</b>
                                <em>5</em>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <span>已发货</span>
                                <b>＞</b>
                                <em>5</em>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <span>已完成</span>
                                <b>＞</b>
                            </li>
                        </a>
                        <a href="javascript:;">
                            <li style={{margin:"10px 0"}}>
                                <span>充值记录</span>
                                <b>＞</b>
                            </li>
                        </a>
                        <a href="javascript:;">
                            <li style={{margin:"10px 0"}}>
                                <span>地址管理</span>
                                <b>＞</b>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>


        )
    }
}
export default User;