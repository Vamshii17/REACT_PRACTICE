import { PureComponent } from "react";


class ChildrenComponent extends PureComponent{
    componentWillUnmount(){
        alert("Component Unmounting")
    }
    render(){
        return(
            <>
                <h3>Child Component</h3>
            </>
        )
    }
}

export default ChildrenComponent;