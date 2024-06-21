import { Component } from "react";

class EvenCounter extends Component{
    state={
        value:0
    }
    increment=()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    render(){
        return(
            <>
            <button onClick={this.increment}>Click to increment</button>
            {
                this.state.value%2===0 && <h1>{this.state.value}</h1>
            }
            </>
        )
    }
}
export default EvenCounter;