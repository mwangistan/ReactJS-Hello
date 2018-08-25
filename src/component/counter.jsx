import React, {Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    render() {
        return (
           <React.Fragment>
               <h1>Hello World</h1>
               <button>Increment</button>
           </React.Fragment> 
        );
    }
}

export default Counter;