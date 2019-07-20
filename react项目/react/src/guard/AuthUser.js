import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";

// class AuthUser extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             hasAuth:false,
//             err:1,
//             data:{}
//         }
//         axios({
//             url:'/api/user'
//         }).then(res=>{
//             console.log(res.data);
//             this.setState({hasAuth:true,err:res.data.err,data:res.data.data})
//         })
//     }
//     render(){
//         if(!this.state.hasAuth) return null;
//         let {component:Component,...rest}=this.props;
//         return (
//             <Route {...rest} render={(props)=>(
//                 this.state.err===0?<Component {...props} data={this.state.data}/>:<Redirect to="/login"/>
//             )}/>
//         )
//     }
// }

const  AuthUser = ({userdata,component:User, ...rest}) =>
    {   console.log(userdata)
        return <Route {...rest} render={(rest)=>(
        userdata.err === 0 ?
            <User {...rest} userdata={userdata}/> :
            <Redirect to="/login" />
    )}/>}
;


const initMapStateToProps = state => ({
    userdata:state.user,
});

const initMapDispatchToProps = dispatch => ({

});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(AuthUser)