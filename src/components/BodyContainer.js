import React, {Component} from 'react';
import {createStore} from 'redux'; 
import reducer from './reducers/reducers';
import Profile from './Profile';
import About from './About';
const store = createStore(reducer,'');
store.subscribe(()=>{
    console.log('store updated', store.getState());
});
class BodyContainer extends Component{
    state = {
        name:'Sheerland'
    }
    onChange=(e)=>{
        const {value} = e.target;
        store.dispatch({type:"CHANGE_NAME",payload:value});
    }
    render(){
        return(
            <div className="form-container">
               <h1>Home</h1>
               <input type="text" onChange={this.onChange}/>
            </div> 
        )
    }
}
export default BodyContainer; 