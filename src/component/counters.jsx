import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Counter from './counter';

class Counters extends Component{
    state={
        counters: [{'id': 0, value: 3},
                    {'id': 1, value: 0},
                    {'id': 2, value: 0},
                    {'id': 3, value: 0}
        ],
    }
    render(){
        return <div>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} value={counter.value}
            selected={true}>
                <h4>Counter #: {counter.id}</h4>
            </Counter>)}
        </div>
    }
}

export default Counters;