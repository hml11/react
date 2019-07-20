import * as types from './types';

const reducer = (state,{type,payload})=>{
    switch(type){
        case types.VIEW_NAV: return {...state,bNav:payload};
        case types.VIEW_FOOT: return {...state,bFoot:payload};
        case types.VIEW_LOADING: return {...state,bLoading:payload};
        case types.UPDATE_HOME: return {...state,home:payload.data};
        case types.UPDATE_PRODUCT: return {...state,product:payload.data};
        case types.UPDATE_BANNER: return {...state,banner:payload.data};
        case types.UPDATE_DETAIL: return {...state,detail:payload.data};
        case types.UPDATE_USER: return {...state,user:payload};
        default:
            return state;
    }
}
export default reducer;