import React from 'react';
import { Stepper,Button } from 'antd-mobile';
import '../assets/css/buycar.css';
import {Link} from "react-router-dom";
import querystring from "query-string";

class Buycar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val: 1,
            buycar:{}
        };
    }
    onChange = (val) => {
        // console.log(val);
        this.setState({ val});
    }
    componentDidMount() {
       let local=JSON.parse(localStorage.getItem('react_buycar'));
       this.setState({buycar:local})

    }
    render(){
        let {buycar}=this.state;
        buycar.src ? buycar.src : buycar.banner;
        console.log('src',buycar.src);
        return (
            <div className="buycar">
                <header>
                    <div className="navtitle">
                       <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                        <span className="n-title">购物车</span>
                        <Link to="/home" className="navtitle-home"/>
                    </div>
                </header>
                <ul className="plist2" style={{paddingBottom: "50px"}}>
                    <li>
                        <div className="conImg">
                            {buycar.banner && <img src={'http://localhost:3001'+buycar.banner} width="80px" height="80px"/>}
                            {buycar.src && <img src={'http://localhost:3001'+buycar.src} width="80px" height="80px"/>}
                        </div>
                        <div className="content">
                            <p>{buycar.name}</p>
                            <p style={{color: "red", fontSize: "16px"}}>￥{buycar.newprice}</p>
                                <Stepper
                                    style={{ width: '30%', minWidth: '100px' }}
                                    showNumber
                                    max={10}
                                    min={1}
                                    value={this.state.val}
                                    onChange={this.onChange}
                                />
                        </div>
                    </li>
                </ul>
                <div className="btngroup">
                    <div style={{display: "inline-block"}}>
                        共购买 {buycar.num} 件，总计：<span className="redfont" style={{fontWeight: "bold"}}>￥{buycar.newprice}</span>
                    </div>
                    <Button
                        type="warning"
                        inline
                        size="small"
                        style={{ marginRight: '4px' }}
                        onClick={()=>{this.props.history.push('/accounts')}}
                    >确认支付</Button>
                </div>
            </div>
        )
    }
}

export default Buycar;