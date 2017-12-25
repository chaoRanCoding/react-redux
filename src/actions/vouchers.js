import * as types from './types';
import { url_coupon } from '../network';
import { post,get  } from '../utils';

import { createAction } from 'redux-actions';

export const load = createAction(
    types.FETCH_COUPON,
    async( params )=>{
        return await post( url_coupon,params);
    },
    ( params ,resolved,rejected )=>{
        return {
            resolved,
            rejected
        }
    }
)


export const loadMore = createAction(
    types.FETCH_COUPON_MORE,
    async( params )=>{
        return await post( url_coupon,params);
    },
    ( params ,resolved,rejected )=>{
        return {
            resolved,
            rejected
        }
    }
)


