import React from "react";

class ChildA_A extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={count:0}
  }

  componentWillUnmount() {
      console.log("component Will Unmount");
  }

  static getDerivedStateFromProps(newProps,state){
    console.log("getDerivedStateFromProps get called");
    return {count:newProps.count+1}
  }


  render() {
    return (
      <div className="app">
         <h1>Child Component Called {this.props.count}</h1>
         <h1>Child Component state Value based upon props {this.state.count}</h1>

      </div>
    );
  }
}

export default ChildA_A;
