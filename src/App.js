import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from "./Component/Counters";
import NavbarComponent from "./Component/NavbarComponent";

class App extends Component {

    state = {
        counters: [
            {id: 1, name: 'Coca Cola', value: 0},
            {id: 2, name: 'Pepsi Cola', value: 0},
            {id: 3, name: 'Coca Zero', value: 0},
            {id: 4, name: 'Seven Up', value: 0}
        ]
    };

    resetBtnStyle = {
        marginTop: '1rem'
    };

    constructor(){
        super();
        console.log('App - Constructor');
    }

    componentDidMount(){
        console.log('App - DidMount');
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters]; // Makes a copy
        const index = counters.indexOf(counter); // Search of the counter
        counters[index] = {...counter}; // Copy of the Parameter
        counters[index].value++; // Increment
        this.setState({counters}); // Update
    };

    handleDecrement = (counter) => {
        if (counter.value === 0) return;

        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleReset = () => {
        const counters = [];
        this.state.counters.forEach(counter => {
            counter.value = 0;
            counters.push(counter);
        });
        this.setState({counters});
    };


    render() {
        console.log('App - Rendered');

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className="App-intro">
                    {/* Pass of the Counters with value greater than 0 */}
                    <NavbarComponent
                        totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </div>
            </div>
        );
    }

}

export default App;
