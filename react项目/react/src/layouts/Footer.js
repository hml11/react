import React from 'react';
import '../assets/css/footer.css'
import home from '../assets/images/myhome .png';
import feilei from '../assets/images/myfenlei.png';
import sale from '../assets/images/mysale.png';
import car from '../assets/images/mycar.png';
import my from '../assets/images/myself.png';
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
    render(){
        return(
                <div className="footnav">
                    <NavLink to="/home">
                        <p>
                            <img src={home} alt=""/>
                        </p>
                        <em>首页</em>
                    </NavLink>

                    <NavLink to="/product">
                        <p>
                            <img src={feilei} alt=""/>
                        </p>
                        <em>分类</em>
                    </NavLink>
                    <NavLink to="/home">
                        <p>
                            <img src={sale} alt=""/>
                        </p>
                        <em>特卖</em>
                    </NavLink>
                    <NavLink to="/buycar" style={{position: 'relative'}}>
                        <p>
                            <img src={car} alt=""/>
                        </p>
                        <em>购物车</em>
                        <span className="shopNum">3</span>
                    </NavLink>


                    <NavLink to="/user">
                        <p>
                            <img src={my} alt=""/>
                        </p>
                        <em>我的</em>
                    </NavLink>
                </div>
        )
    }
}


export default Footer;
