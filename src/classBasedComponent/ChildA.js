import React from "react";
import ChildA_A from "./ChildA_A";

class ChildA extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: true, count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount for childA");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate for childA");
  }

  render() {
    return (
      <div className="app">
        {this.state.msg} <br />
        <button
          onClick={() => {
            this.setState({ msg: !this.state.msg});
          }}
        >
          Display Child
        </button>
       
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count {this.state.count}
        </button>
        {this.state.msg && <ChildA_A count={this.state.count}></ChildA_A>}
      </div>
    );
  }
}

export default ChildA;
