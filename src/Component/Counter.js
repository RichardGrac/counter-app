import React, {Component} from 'react';
import {Badge} from 'reactstrap';
import {Button} from 'reactstrap';

class Counter extends Component {

    state = {
        value: this.props.counter.value
        // , tags: ["tag1", "tag2", "tag3"]
    };

    /* Arrow function */
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    handleDecrement = () => {
        if (this.state.value === 0) return;
        this.setState({ value: this.state.value - 1 });
    };

    /* Render of a View */
    render() {
        return (
            <div style={{marginTop: 10}}>
                <Badge color={this.getBadgeColor()} className="m-2">
                    {this.formatCount()}
                </Badge>

                {/*Display of the product name*/}
                {this.props.children}

                <Button onClick={this.handleIncrement} className="m-1" color="secondary">+</Button>
                <Button onClick={this.handleDecrement} className="m-1" color="secondary">-</Button>
                <Button onClick={() => this.props.onDelete(this.props.counter.id)} color="danger">Delete</Button>
                {/*<p>*/}
                {/*{this.renderTags()}*/}
                {/*</p>*/}
            </div>
        );
    }

    /* It'll display in the Badge the value */
    formatCount() {
        let counter = this.state.value;
        return counter === 0 ? 'Zero' : counter;
    }

    getBadgeColor() {
        let badgeColor = "";
        badgeColor += this.state.value === 0 ? "warning" : "primary";
        return badgeColor;
    }

    /* To list Render a <ul> with map() */
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>
    //     return <ul className="list-unstyled">
    //         {this.state.tags.map(tag =>
    //             <li key={tag}>{tag}</li>
    //         )}
    //     </ul>
    // }
}

export default Counter;