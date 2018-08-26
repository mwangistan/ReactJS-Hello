import React, {Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component{
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(product){
        console.log(product)
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
           <React.Fragment>
               <span className="badge badge-primary">{this.state.count}</span>
               {this.renderTags()}
               <button onClick={() => this.handleIncrement({'id':1})} className="btn btn-secondary btn-sm">Increment</button>
           </React.Fragment> 
        );
    }

}

export default Counter;