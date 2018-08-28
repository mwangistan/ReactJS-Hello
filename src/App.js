import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import Counters from './component/counters';

class App extends Component {
    state={
      counters: [{'id': 0, value: 3},
                  {'id': 1, value: 0},
                  {'id': 2, value: 0},
                  {'id': 3, value: 0}
      ],
  }

  constructor (counterId){
      super();
      this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(counterId){
      const counters = this.state.counters.filter(c => c.id !== counterId)
      this.setState({counters})
  };
  handleReset = () => {
      const counters = this.state.counters.map(c => {c.value = 0; return c});
      this.setState({counters})
  };
  handleIncrement = (counter) =>{
      const counters = this.state.counters.slice(0);
      const index = counters.indexOf(counter);
      counters[index].value++; 
      this.setState({counters})
  };

  render() {
    return (
      <div className="App">
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="container">
            <Counters onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}/>
        </main>
      </div>
    );
  }
}

export default App;