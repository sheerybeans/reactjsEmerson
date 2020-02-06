import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import BodyContainer from './BodyContainer';
class App extends Component{

  state={
    display:'sheerland'
  }

  alertFunction= () =>{alert()};

  rewriteTheStars=(e)=>{this.setState({display:e.target.value})}
  Submit=()=>{alert(1);}
  render(){
    return (
      <div className="container">
        <NavBar/>
        <div className="body-container">
        <button onClick={this.Submit}>SUBMIT</button>
        {this.state.display}
        <BodyContainer
        Name = 'test'
        onClick={() =>this.setState({display:'ed'}) }
        CallFunction={this.alertFunction}
        rewriteName={this.rewriteTheStars}
        />
        </div>
        
      </div>
    )
  }
}
export default App;
