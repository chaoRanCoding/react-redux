import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import App from './app';
import { loadArea as loadAreaAction} from './actions/loadarea';
import StartUpView from './components/StartUp';
class Root extends Component {

    constructor(){
        super();
        this.state = {
            isLoading: true,
            store: configureStore(()=>{
                const { dispatch,getState } = this.state.store;
                const store = getState();
                if( store.areaStore.length>0 ){
	                setTimeout(
		                ()=>{
			                this.setState({isLoading:false})
		                },3000)
                }else{
                    this.loadarea()
                }
            })
        }
    }

    /***初始化省市县***/
    loadareaResolved = ( res ) =>{
	    setTimeout(
		    ()=>{
			    this.setState({isLoading:false})
		    },2000)
    }
    loadareaRejected = ( res ) =>{
        this.setState({isLoading: false});
    }
    loadarea = () =>{
        const { dispatch,getState } = this.state.store;
        dispatch( loadAreaAction(this.loadareaResolved,this.loadareaRejected) );
    }
    render(){
        return (
            <Provider store={this.state.store}>
	            { this.state.isLoading ? (<StartUpView />) : ( <App/> )}
            </Provider>
        )
    }
}

export default Root;

 