import React,{Component} from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
    render(){
        return(
            <div className="form-container">
                <h1>Profile</h1>
                <h2>{this.props.fullname}</h2>
            </div>
            
        );
    }
}
export default connect(fullname => {
    return {
        fullname: fullname
    }
})(Profile);