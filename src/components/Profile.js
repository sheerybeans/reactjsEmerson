import React,{Component} from 'react';
class Profile extends Component{
    render(){
        return(
            <div className="form-container">
                <h1>{this.props.displayText}</h1>
            </div>
        );
    }
}
export default Profile;