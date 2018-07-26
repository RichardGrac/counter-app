import React, {Component} from 'react';
import {Badge} from 'reactstrap';
import {Button} from 'reactstrap';

class Counter extends Component {

    /* Example about How we could get new Data from an API if any component props changed */
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.counter.value !== this.props.counter.value) {
    //        Ajax call and get new data from the server
    //     }
    // }

    componentWillUnmount() {
        console.log('App - Component (#' + this.props.counter.id + ') Will Unmount');
    }

    /* Render of a View */
    render() {
        return (
            <div style={{marginTop: 10}}>
                <Badge color={this.getBadgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>

                {/*Display of the product name*/}
                {this.props.children}

                <Button onClick={() => this.props.onIncrement(this.props.counter)} className="m-1" color="secondary">+</Button>
                <Button onClick={() => this.props.onDecrement(this.props.counter)} className="m-1" color="secondary">-</Button>
                <Button onClick={() => this.props.onDelete(this.props.counter.id)} color="danger">Delete</Button>
            </div>
        );
    }

    /* It'll display in the Badge the value */
    formatCount() {
        let counter = this.props.counter.value;
        return counter === 0 ? 'Zero' : counter;
    }

    getBadgeColor() {
        let badgeColor = "";
        badgeColor += this.props.counter.value === 0 ? "warning" : "primary";
        return badgeColor;
    }
}

export default Counter;