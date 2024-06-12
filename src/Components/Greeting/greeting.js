import { Component } from "react";


class GreetingComponent extends Component{
    render(){
        return(
            <h3>Hello, Good Morning {this.prop.name}</h3>
        )
    }
}
// const GreetingComponent=(prop)=>{
//     console.log(prop)
//     const {children}=prop
//     return(
//         <h3>Hello, Good Morning {children}</h3>
//     )
// }

export default GreetingComponent;