import React,{useState} from 'react';

class Display extends React.Component{      
    show(msgEvent) {  
        // code   
        console.log("call"); 
         
    };

    render() {        
        // Here, we render the div with an onClick prop      
        return (              
          <div onClick={this.show}>Click Me</div>   
        );      
    }  
};  

export default Display;