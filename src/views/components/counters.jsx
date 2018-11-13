import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 3 }, { id: 2, value: 0 }, { id: 3, value: 0 }],
    imageUrl: "https://picsum.photos/100"
  };

  handleTambah = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(counters);
  };

  handleHapus = counterId => {
    console.log("list ini dihapus!", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log();
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} className="d-block" alt="" />
        <button className="btn btn-primary m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onTambah={this.handleTambah}
            onHapus={this.handleHapus}
            counter={counter}
          />
        ))}
        {/* {this.state.lists.length === 3 && <li>has 3 list</li>}
        {this.condtList()} */}
      </div>
    );
  }
}

export default Counters;
