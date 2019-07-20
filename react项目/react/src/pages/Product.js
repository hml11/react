import React from 'react';
import { Tabs, Badge } from 'antd-mobile';
import {Link} from "react-router-dom";
import Cell from '../components/Cell/Cell'
import '../assets/css/product.css';
import {asyncAction} from "../store/asyncAction";
import * as types from "../store/types";
import {connect} from "react-redux";
const tabs = [
    { title: <Badge>男装</Badge> },
    { title: <Badge>女装</Badge> },
    { title: <Badge>童装</Badge> },
    { title: <Badge>鞋子</Badge> },
]

class Product extends React.Component{
    constructor(props){
        super();
        props.getProduct();
    }
    render(){
        let {product}=this.props;
        console.log(product)
        return (
            <div className="produt">
                <header>
                    <div className="navtitle">
                       <span className="navtitle-goback"  onClick={()=>{window.history.go(-1)}}>
                        </span>
                        <span className="n-title">商品列表</span>
                        <Link to="/home" className="navtitle-home"/>
                    </div>
                </header>
                    <div className="tab">
                        <Tabs tabs={tabs}
                              initialPage={0}
                              tabBarActiveTextColor="red"
                              tabBarUnderlineStyle={{border:"1px solid red"}}
                        >
                            <div style={{ display: 'flex',flexWrap:"Wrap",justifyContent:"center",backgroundColor: '#fff' }}>
                                {product.map(item=>(
                                    item.type==="m"&& <Cell
                                        key={item._id}
                                        data={item}
                                        dataName='product'
                                    />
                                ))}
                            </div>
                            <div style={{ display: 'flex',flexWrap:"Wrap",justifyContent:"center", backgroundColor: '#fff' }}>
                                {product.map(item=>(
                                    item.type==="w"&& <Cell
                                        key={item._id}
                                        data={item}
                                        dataName='product'
                                    />
                                ))}
                            </div>
                            <div style={{ display: 'flex', flexWrap:"Wrap", justifyContent:"center",backgroundColor: '#fff' }}>
                                {product.map(item=>(
                                    item.type==="kid"&& <Cell
                                        key={item._id}
                                        data={item}
                                        dataName='product'
                                    />
                                ))}
                            </div>
                            <div style={{ display: 'flex', flexWrap:"Wrap", justifyContent:"center",backgroundColor: '#fff' }}>
                                {product.map(item=>(
                                    item.type==="shoes"&& <Cell
                                        key={item._id}
                                        data={item}
                                        dataName='product'
                                    />
                                ))}
                            </div>
                        </Tabs>
                    </div>
            </div>
        )
    }
}
const initMapStateToProps =state =>({
   product:state.product
})
const initMapDispatchToProps =dispatch =>({
    getProduct:()=>dispatch(asyncAction({
        url:'/api/product',
        params:{_page:1,_limit:35},
        typeName:types.UPDATE_PRODUCT
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Product)