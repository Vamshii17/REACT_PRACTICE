import { Component } from "react";
import ChildrenComponent from "./childComponent";


class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            childVisible: true
        }
    }
    childVisibleMethod=()=>{
        this.setState({
            childVisible: !this.state.childVisible
        })
    }
    render(){
        return(
            <>
                <h3>Unmounting Phase</h3>
                <button onClick={this.childVisibleMethod}>Child Hide</button>
                {
                    this.state.childVisible 
                    ? 
                    <ChildrenComponent />
                    :
                    null
                }
            </>
        )
    }
}

export default ParentComponent;