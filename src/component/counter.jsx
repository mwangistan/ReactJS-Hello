import React, {Component } from 'react';

class Counter extends Component{
    state = {
        count: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render() {
        return (
           <React.Fragment>
               {this.props.children}
               <span className="badge badge-primary">{this.props.counter.value}</span>
               <button onClick={this.props.onIncrement} 
               className="btn btn-secondary btn-sm">Increment</button>
               <button onClick={this.props.onDelete} className="btn btn-danger btn-sm">Delete</button>
           </React.Fragment> 
        );
    }

}

export default Counter;