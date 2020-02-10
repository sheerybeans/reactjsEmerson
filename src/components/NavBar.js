import React, {Component} from 'react';
import logo from '../assets/images/emersonLogo.jpg';
import Profile from './Profile';
import BodyContainer from './BodyContainer';
import About from './About';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";
class NavBar extends Component{
    render(){
        return(
            <Router>
                <div className="nav-bar-container">
                    <div className="nav-bar-holder">
                        <div className="logo-container">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="menu-container">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Profile">My Profile</Link></li>
                                <li><Link to="/About">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <Switch>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/">
                            <BodyContainer />
                        </Route>
                    </Switch>
            </Router>
        )
    }
}
export default NavBar;