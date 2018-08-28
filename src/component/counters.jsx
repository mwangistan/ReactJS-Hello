import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{

    render(){
        return <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm">Reset</button>
            {this.props.counters.map(counter => 
            <Counter key={counter.id} counter={counter}
            selected={true} onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter)}>
                <h4>Counter #: {counter.id}</h4>
            </Counter>)}
        </div>
    }
}

export default Counters;