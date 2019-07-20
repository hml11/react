import React from 'react';
import '../assets/css/login.css'
import {Link} from "react-router-dom";
import {Button,Toast,} from "antd-mobile";
import {asyncAction} from "../store/asyncAction";
import * as types from "../store/types";
import {connect} from "react-redux";
class Login extends React.Component{
    state={
        username:"",
        password:"",
        mess:""
    };
    render(){
        return (
            <div className="Login">
                <header>
                    <div className="navtitle">
                       <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                        <span className="n-title">登录</span>
                        <Link to="/reg" className="navtitle-reg"/>
                    </div>
                </header>
                <ul className="form">
                    <li><input
                        type="tel"
                        placeholder="请输入手机号"
                        value={this.state.username}
                        onChange={(ev)=>this.setState({username:ev.target.value})}/></li>
                    <li><input type="password" placeholder="请输入密码" onChange={(ev)=>this.setState({password:ev.target.value})}/></li>
                </ul>
                <Button
                    type="warning"
                    style={{marginTop:"10px"}}
                    onClick={()=>this.props.login(this.state.username,this.state.password)}
                >
                    登录
                </Button>
            </div>
        )
    }
}
const initMapStateToProps =state =>({

})
const initMapDispatchToProps = (dispatch,ownProps) => ({

    login: (username,password) => dispatch(asyncAction({
        url:'/api/login',
        method:'post',
        data:{username,password},
        typeName: types.UPDATE_USER,
        receipt:true//需要回执
    })).then(
        res => {
            // console.log('回执',res)
            if (res.err===0){
                localStorage.setItem('react_user',JSON.stringify(res))
                ownProps.history.push('/user')
            } else {
                Toast.info('登录失败,去注册', 1)
                // console.log(this);//this指向丢失
                // this.setState({mess:res.msg}) 把 mess 放置到 /store/state>mess
            }
        }
    )

});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login)