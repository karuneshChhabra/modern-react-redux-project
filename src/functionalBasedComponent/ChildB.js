import React, { useState, useEffect } from "react";
import ChildB_A from "./ChildB_A";

const ChildB = () => {
  const [msg, setMsg] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    setMsg(!msg);
  }

  useEffect(() => {
    console.log("componentDidMount from childB");
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate for childB");
  }, [msg, count]);

  return (
    <div className="app">
      {msg} <br />
      <button
        onClick={() => {
          handleClick();
        }}
      >
       Display Child
      </button>
      <br/>
     
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      {msg && <ChildB_A count={count}></ChildB_A>}
      <br />
    </div>
  );
};

export default ChildB;
