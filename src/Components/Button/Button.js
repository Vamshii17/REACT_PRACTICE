import { Component } from "react";

class ButtonComponent extends Component{
    render(){
        return(
            <button>{this.props.text}</button>
        )
    }
}
// const ButtonComponent = (prop)=>{
//     console.log(prop)
//     const {text, textColor="yellow"} = prop;
//     return(
//         <>
//         <button style={{color: textColor, backgroundColor: "black"}}>{text}</button>
//         </>
//     )
// }

export default ButtonComponent;