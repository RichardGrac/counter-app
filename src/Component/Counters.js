import React, {Component} from 'react';
import Counter from "./Counter";
import {Button} from 'reactstrap';

class Counters extends Component {

    render() {
        /* Object destructuring (to not use 'this.props.' */
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

        return (
            <div style={this.resetBtnStyle}>
                <Button onClick={onReset}
                        color="info">
                    Reset all counters
                </Button>
                {/* For each product, display it */}
                {counters.map(counter =>
                    <Counter key={counter.id}
                             counter={counter}
                             onDelete={onDelete}
                             onIncrement={onIncrement}
                             onDecrement={onDecrement}>
                        <span className="m-2">{counter.name}</span>
                    </Counter>
                )}

            </div>
        );
    }
}

export default Counters;