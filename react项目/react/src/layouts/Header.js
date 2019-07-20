import React from 'react';
import '../assets/css/header.css';
class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <a href="javascript:;" className="header_left"></a>
                <input type="search" className="header_search" placeholder="搜索商品/店铺"/>
                <i className="header_glass"></i>
                <a className="header_right"></a>
            </div>
        )
    }
}
export default Header;
