import React from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from "react-router-dom";
import { Carousel } from 'antd-mobile';
import '../assets/css/home.css';
import Cell from '../components/Cell/Cell'
import {asyncAction} from "../store/asyncAction";
import * as types from '../store/types';
import {connect} from "react-redux";
class Home extends React.Component{
    componentDidMount(){
        this.props.getHome();
        this.props.getBanner();
    }

    render(){
        let { home ,banner}=this.props;
        return (
            <div className="home">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        auto: 1000,
                        speed: 100
                    }}
                >
                    {
                        banner.map(item=>(
                            <Link
                                className="banner"
                                key={item._id}
                                to={{pathname:'/detail/'+item._id,search:'dataName=banner'}}
                            >
                                <img src={"http://localhost:3001"+item.banner}/>
                            </Link>
                        ))
                    }

                </ReactSwipe>
                <div className="hotgoods">
                    <p className="title"><img src="img/about.png"/> 爆品推荐</p>
                        <ul className="bplist">
                            {home.map((item)=>(
                                    item.type==="hot"&& <Cell
                                        key={item._id}
                                        data={item}
                                        dataName="home"
                                    />
                            )
                            )}
                        </ul>
                </div>

                <div className="Boutique">
                    <p className="title"><img src="img/collct.png"/>&nbsp;精品</p>
                    <div className="bplist">
                        {
                            home.map(item=>(
                                <Cell
                                    key={item._id}
                                    data={item}
                                    dataName="home"
                                />)
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const initMapStateToProps =state =>({
        home:state.home,
        banner:state.banner
    })
const initMapDispatchToProps =dispatch =>({
    getHome:()=>dispatch(asyncAction({
        url:'/api/home',
        params:{_page:1,_limit:10},
        typeName:types.UPDATE_HOME
    })),
    getBanner:()=>dispatch(asyncAction({
        url:'/api/banner',
        params:{_page:1,_limit:3},
        typeName:types.UPDATE_BANNER
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home)