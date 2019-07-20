import React from 'react';
import './assets/cell.css';
import {Link} from "react-router-dom";

class Cell extends React.Component{
    render(){
        let{data,dataName}= this.props;
        return (
            <div className="cell">
                <Link
                    to={{pathname:'/detail/'+data._id,search:`dataName=${dataName}`}}
                    className="goodslist"
                >
                    <div className="goods_img_box">
                        <img className="goods_img" src={"http://localhost:3001"+data.src}/>
                    </div>
                    <div className="name">
                        <label className="goodlist_discount">{data.discount}</label>
                        <i className="brand_name">{data.brandname}</i>
                        <span>{data.name}</span>
                    </div>
                    <div className="price">
                        <b>￥{data.newprice}</b>
                        <i>{data.oldprice}</i>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Cell;