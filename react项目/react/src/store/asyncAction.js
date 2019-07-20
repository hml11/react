import axios from 'axios';

export const asyncAction = ({
    url,params={},method='get',data={},receipt=false,typeName
})=>(dispatch,getState)=>(
    axios({
        params,method,data,url
    }).then(
        res=>{
            dispatch({type:typeName,payload:res.data});
            if(receipt) return res.data
        }
    )
)