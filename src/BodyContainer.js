// import React, {Component} from 'react';
import React from 'react';



function BodyContainer(props){
        return(
            <div className="form-container">
                {
                props.data.map((index, value)=>{
                    return <div key={value}><input type="text" value={index.todo}/><button id={value} onClick={props.Remove}>Remove</button></div>;
                })
            }
            </div>
        )
  
}



export default BodyContainer; 