import React from 'react';
import {Button, Toast,Icon} from "antd-mobile";
import '../assets/css/reg.css';
import {Link} from "react-router-dom";
class Reg extends React.Component{
    state={
        username:"",
        password:"",
        sms:"",
        code:"a",
    };
    reg=()=>{
        if(this.state.sms!=this.state.code){
            this.showToast('验证码错误')
            return;
        }
        if(!this.usernameIcon()){
            this.showToast('手机格式错误')
            return;
        }
        if(!this.passwordIcon()){
            this.showToast('密码格式错误')
            return;
        }
        axios({
            url:'/api/reg',
            method:"POST",
            data:{username:this.state.username,password: this.state.password}
        }).then(res=>{
            if(res.data.err===0){
                this.props.history.push('/login')
            }else{
                this.showToast('账号已存在，注册失败');
            }
        })

    };

    sendCode=()=>(
        axios({
            url:'https://www.daxunxun.com/users/sendCode?tel='+this.state.username
        }).then(res=>this.state.code=res.data.code)
    )
    showToast=(mess)=>{
        Toast.info(mess, 1);
    }
    usernameIcon=()=>{
        if(this.state.username===''){
            return '';
        }else if(/^1[3456789]\d{9}$/.test(this.state.username)){
            return true
        }else{
            return false
        }
    }
    passwordIcon=()=>{
        if(this.state.password===''){
            return '';
        }else if(this.state.password.length>5){
            return true;
        }else{
            return false
        }
    }
    render(){
         return (
             <div className='Reg'>
                 <header>
                     <div className="navtitle">
                       <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                         <span className="n-title">注册</span>
                         <Link to="/login" className="navtitle-login"/>
                     </div>
                 </header>
                 <ul className="form">
                     <li><input
                         type="tel"
                         placeholder="请输入手机号"
                         value={this.state.username}
                         onChange={(ev)=>this.setState({username:ev.target.value})}/>
                         {this.usernameIcon()  && <Icon type="check-circle"/>}
                     </li>
                     <li>
                         <input
                             type="password"
                             placeholder="请输入密码"
                             value={this.state.password}
                             onChange={(ev)=>this.setState({password:ev.target.value})}/>
                         {this.passwordIcon() && <Icon type="check-circle"/>}
                     </li>
                     <li className="confirm">
                         <input
                             type="text"
                             placeholder="请输入验证码"
                             value={this.state.sms}
                             onChange={(ev)=>this.setState({sms:ev.target.value})}
                         />
                         <Button
                             type="warning"
                             inline
                             style={{height:"40px",fontSize:"14px",marginLeft:"10px"}}
                             onClick={this.sendCode}
                         >获取验证码
                         </Button>
                     </li>
                </ul>
                 <Button type="warning" style={{marginTop:"10px"}} onClick={this.reg}>注册</Button>
             </div>
         )
     }
 }
 export default Reg;