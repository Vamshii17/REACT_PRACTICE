import { Component } from "react";

class LifeCycleMethods extends Component{
    constructor(){
        super()
        this.state={
            favoriteColor: "red",
            count: 0
        }
        console.log("constructor....")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps....")
        return {favoriteColor: props.favcol };
    }
    updateCount=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
    componentDidMount(){
        document.title = `React App ${this.state.count}`
        console.log("ComponentDidMount....")
    }
    componentDidUpdate(){
        document.title = `React App ${this.state.count}`
        console.log("ComponentDidUpdate....")
    }
    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate....")
        return true;
    }
    getSnapshotBeforeUpdate(props, state){
        console.log(props, state, "GetSnapshotBeforeUpdate....")
        return null
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount....")
    }
    render(){
        console.log("Render....")
        return(
            <>
                <h3>My favoriteColor is {this.state.favoriteColor}</h3>
                <h3>The updated count is {this.state.count}</h3>
                <button onClick={this.updateCount}>Update Count</button>
            </>
        )
    }
}
export default LifeCycleMethods;