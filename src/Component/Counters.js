import React, {Component} from 'react';
import Counter from "./Counter";
import {Button} from 'reactstrap';

class Counters extends Component {

    state = {
        counters: [
            {id: 1, name: 'Coca Cola', value: 4},
            {id: 2, name: 'Pepsi Cola', value: 0},
            {id: 3, name: 'Coca Zero', value: 0},
            {id: 4, name: 'Seven Up', value: 0}
        ]
    };

    resetBtnStyle = {
      marginTop: '1rem'
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
      const counters = [];
      this.state.counters.forEach(counter => {
          counter.value = 0;
          counters.push(counter);
      });
      this.setState({ counters });
    };

    render() {
        return (
            <div style={this.resetBtnStyle}>
                <Button onClick={this.handleReset}
                        color="info">
                    Reset all counters
                </Button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id}
                             counter={counter}
                             onDelete={this.handleDelete}>
                        <span className="m-2">{counter.name}</span>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;