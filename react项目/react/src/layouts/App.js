import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Buycar from '../pages/Buycar';
import Accounts from '../pages/Accounts';
import Product from '../pages/Product';
import Reg from '../pages/Reg';
import Login from '../pages/Login';
import User from '../pages/User';
import ErrorPage from "../pages/ErrorPage";
import '../assets/css/bass.css';
import Loading from "../components/Loading/Loading";
import AuthUser from '../guard/AuthUser';

import * as types from '../store/types';
import connect from "react-redux/es/connect/connect";

 class App extends React.Component{
     checkpath(path){
         if(/home/.test(path)){
             this.props.viewNav(true);
             this.props.viewFoot(true);

         }
         if(/user|product|accounts/.test(path)){
             this.props.viewNav(false);
             this.props.viewFoot(true);
         }
         if(/detail|login|reg|buycar/.test(path)){
             this.props.viewNav(false);
             this.props.viewFoot(false);
         }
     }
     componentWillReceiveProps(nextProps){
         let path=nextProps.location.pathname;
         this.checkpath(path);

     }
     componentDidMount() {
         let path=this.props.location.pathname;
         this.checkpath(path);
     }

     render(){
         let {bNav,bFoot,bLoading}=this.props;
         return (
             <div className="app">
                 {bLoading && <Loading/>}
                 {bNav && <Header/>}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/buycar" component={Buycar}/>
                    <Route path="/accounts" component={Accounts}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/login" component={Login}/>
                    <AuthUser path="/user" component={User}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={ErrorPage}/>
                </Switch>
                 {bFoot ? <Footer/>:null}
             </div>
         )
     }
 }
 const initMapstateToProps = state =>({
         bNav:state.bNav,
        bFoot:state.bFoot,
        bLoading:state.bLoading
 });
 const initMapDispatchToProps = dispatch =>({
     viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
     viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
 })
 export default connect(
     initMapstateToProps,initMapDispatchToProps
 )(App)