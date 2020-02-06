import React, {Component} from 'react';
import logo from './emersonLogo.jpg';
class NavBar extends Component{
    render(){
        return(
            <div className="nav-bar-container">
                <div className="nav-bar-holder">
                    <div className="logo-container">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;