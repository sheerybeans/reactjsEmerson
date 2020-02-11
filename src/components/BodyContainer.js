import React, {Component} from 'react';
import { connect } from 'react-redux';

import {changeName} from './actions/actionTypes';

class BodyContainer extends Component{
    render(){
        // console.log(this.props);
        return(
            <div className="form-container">
               <h1>Home</h1>
               <input type="text" onChange={e => this.props.palitanAndPangalan(e.target.value)} defaultValue={this.props.fullname}/>
            </div> 
        )
    }
}

const mapStateToProps = (fullname) => {
    return {
        fullname: fullname
    }
};

const mapStateToDispatchProps = dispatch => {
    return {
        palitanAndPangalan: updatedName => dispatch(changeName(updatedName))
    }
};

export default connect(mapStateToProps, mapStateToDispatchProps)(BodyContainer);