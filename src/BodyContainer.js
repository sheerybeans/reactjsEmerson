import React, {Component} from 'react';

class BodyContainer extends Component{
    render(){
        return(
            <div className="form-container">
                <button onClick={this.props.onClick}>change name</button>
                <button onClick={this.props.CallFunction}>call function()</button>
                <h1>{this.props.Name}</h1>
                <input type="text" onChange={this.props.rewriteName}/>
            </div>
        )
    }
}
export default BodyContainer; 