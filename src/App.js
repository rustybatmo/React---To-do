import React, { Component } from "react";

import Ninjas from "./Ninjas.js";

import Addperson from "./addPerson.js";

// function App() {
class App extends Component {
  state = {
    ninjas: [
      { name: "harsh", age: 80, job: "wankah", id: 1 },
      { name: "harish", age: 80, job: "Pposdf", id: 2 },
      { name: "priya", age: 80, job: "wankah", id: 3 },
    ],
  };

  addperson = (person) => {
    person.id = Math.random();
    let ninjas = [...this.state.ninjas, person];
    this.setState({
      ninjas: ninjas,
    });
  };

  deletePerson = (id) => {
    // let ninjas = [...this.state.ninjas];
    console.log(id);
    // let people = [...this.state.ninjas];

    // people.forEach((person) => {
    //   if (person.id === id) people.pop(person);
    // });
    // this.setState({
    //   ninjas: people,
    // });

    const people = this.state.ninjas.filter((person) => {
      return person.id !== id;
    });
    this.setState({
      ninjas: people,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hey there, Harish</h1>
          <p>What up</p>
          <Ninjas ninja={this.state.ninjas} deletePerson={this.deletePerson} />
          <Addperson addperson={this.addperson} />
        </header>
      </div>
    );
  }
}

export default App;
