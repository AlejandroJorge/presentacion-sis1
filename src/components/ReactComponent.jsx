import React, { Component } from "react";

const counterStyle = {
  textAlign: "center",
  margin: "auto",
  width: "200px",
  padding: "20px",
  border: "2px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 5px #aaa",
};

const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={counterStyle}>
        <h1>React Counter</h1>
        <p>Count: {this.state.count}</p>
        <button style={buttonStyle} onClick={this.increment}>
          Increment
        </button>
        <button style={buttonStyle} onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
