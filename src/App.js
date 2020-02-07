import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import BodyContainer from './BodyContainer';
class App extends Component{

  state={
    display:[{"0":"first"},{"1":"second"}]
  }

  alertFunction= () =>{alert()};
  alertMe=()=>{this.setState({display:'testProps'})}
  rewriteTheStars=(e)=>{this.setState({display:e.target.value})}
  Submit=()=>{this.setState({display:'ED'})}
  Remove=(e)=>{
    this.setState({
      display:this.state.display.filter((key,value)=>key[e.target.id])
    })
   
}
  render(){
    return (
      <div className="container">
        <NavBar/>
        <div className="body-container">
        <BodyContainer 
        data={this.state.display}
        Remove = {this.Remove}
        />
        </div>
      </div>
    )
  }
}
export default App;
