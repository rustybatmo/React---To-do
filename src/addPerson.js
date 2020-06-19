import React, { Component } from "react";

class Addperson extends Component {
  state = {
    name: null,
    age: null,
    job: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addperson(this.state);
  };

  handleChange = (e) => {
    if (e.target.id === "name") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.id === "age") {
      this.setState({
        age: e.target.value,
      });
    } else {
      this.setState({
        job: e.target.value,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={this.handleChange}></input>
        <br></br>

        <label htmlFor="age">Age</label>
        <input type="number" id="age" onChange={this.handleChange}></input>
        <br></br>

        <label htmlFor="job">Job</label>
        <input type="text" id="job" onChange={this.handleChange}></input>
        <br></br>

        <button>Click me</button>
      </form>
    );
  }
}

export default Addperson;
