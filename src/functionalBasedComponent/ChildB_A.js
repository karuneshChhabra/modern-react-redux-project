import React, { useState, useEffect ,useRef} from "react";

const ChildB_A = (props) => {

  const [count,setCount] = useState(0);

 


  useEffect(() =>{
  
    console.log("getDerivedStateFromProps get called");
    setCount(props.count+1);
    console.log("getDerivedStateFromProps get called");

    

  },[props.count]); 


  


  

  useEffect(() => {
    return () => {
      /* componentWillUnmount code */
      console.log("componentWillUnmount from childB");
     }
   
  }, []);


  

  return (
    <div className="app">
      <h1>Child Component of function component {props.count}</h1>
      <br />
      <h1>Child Component state Value based upon props {count}</h1>
    

    </div>
  );
};

export default ChildB_A;
