'use strict';
import * as types from '../actions/types';

const initialState = {
	lists:[]
};

export default function(state = initialState, action) {
	const { payload = {},  type, error } = action;
	if (  error) {
		return state;
	}
	const { data } = payload;
	switch ( type ) {
		case types.FETCH_ADDRESS:
			return Object.assign({},state,data );
		case types.ADD_ADDRESS:
			return Object.assign({},state,{
				lists:[data,...state.lists ]
			})
		case types.FETCH_ADDRESS_MORE:
			return Object.assign({},state,{
				lists : state.lists.concat( data.lists ),
				curpage : data.curpage,
				total : data.total
			})
		case types.DEL_ADDRESS :
			return Object.assign({},state,{
				lists:state.lists.filter( item => item.id != data.id )
			})
		case types.SETDF_ADDRESS:
			return Object.assign({},state,{
				lists:state.lists.map( item => item.id == data.id ? Object.assign({},item,{default:1}) : Object.assign({},item,{default:0}) )
			});
		case  types.EDIT_ADDRESS:
			return Object.assign({},state,{
				lists:state.lists.map(( item )=>{
					if( item.id == data.id){
						return data;
					}else{
						return item ;
					}
				})
			})
		default:
			return state;
	}
}