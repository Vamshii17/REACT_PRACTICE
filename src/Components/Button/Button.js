

// class ButtonComponent extends Component{
//     render(){
//         return(
//             <button>{this.props.text}</button>
//         )
//     }
// }

const ButtonComponent = (prop)=>{
    console.log(prop)
    const {text, textColor="yellow", onSmash} = prop;
    return(
        <>
        <button style={{color: textColor, backgroundColor: "black"}} onClick={onSmash}>{text}</button>
        </>
    )
} 

export default ButtonComponent;