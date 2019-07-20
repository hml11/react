import React from 'react';
import './css/loading.css';
class Loading extends React.Component{
    render(){
        return (
            <div className="loadEffect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}
export default Loading;