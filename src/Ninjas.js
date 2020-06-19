import React, { Component } from "react";

class Ninjas extends Component {
  // state = {
  //   name: this.props.name,
  // };

  // deletePerson = (e, id) => {
  //   e.preventDefault();
  //   console.log(id);
  // };

  render() {
    const ninjas = this.props.ninja;

    const ninjaList = ninjas.map((item) => {
      return (
        <div className="person" key={item.id}>
          <div> Name of the person: {item.name}</div>
          <div> Age of the person: {item.age}</div>
          <div> Job of the person: {item.job}</div>
          <button
            onClick={() => {
              this.props.deletePerson(item.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });

    return <div className="ninja">{ninjaList}</div>;
  }
}

export default Ninjas;
