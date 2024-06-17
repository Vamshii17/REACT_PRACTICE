import React, { Component } from "react";

class CounterComponent extends Component {
    state = {
        initialValue: 0
    };

    incrementCounter = () => {
        this.setState({
            initialValue: this.state.initialValue + 1
        });
    };

    decrementCounter = () => {
        this.setState({
            initialValue: this.state.initialValue - 1
        });
    };

    render() {
        return (
            <div>
                <h3>Count: {this.state.initialValue}</h3>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
        );
    }
}

export default CounterComponent;
