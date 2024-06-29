import { useState } from "react";
import ButtonComponent from "../../Button/Button";

const CounterApp=()=>{
    const[count, setCount]=useState(0)

    // const incrementHandler=()=>{
    //     setCount(count+1)
    // }
    // const resetHandler=()=>{
    //     setCount(0)
    // }
    // const decrementHandler=()=>{
    //     if(count>0){
    //         setCount(count-1)
    //     }else{
    //         alert("count value is already 0")
    //     }
    // }

    const countHandler=(action, value=1)=>{
        switch(action){
            case "INCREMENT":
                setCount(count+value)
                break;
            case "DECREMENT":
                if(count>0){
                    setCount(count-value)
                }else{
                    alert("count value is already 0")
                }
                break;
            case "RESET":
                setCount(0)
                break;
            default:
                break;
        }
    }

    return(
        <>
        <h3>Counter App</h3>
        <h4>Count Value is {count}</h4>
        {/* <button onClick={incrementHandler}>Increment</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={decrementHandler}>Decrement</button> */}
        {/* <button onClick={()=>countHandler("INCREMENT", 10)}>Increment</button>
        <button onClick={()=>countHandler("RESET")}>Reset</button>
        <button onClick={()=>countHandler("DECREMENT",10)}>Decrement</button> */}
        <ButtonComponent text="Increment" onSmash={()=>countHandler("INCREMENT", 10)} />
        <ButtonComponent text="Reset" onSmash={()=>countHandler("RESET")} />
        <ButtonComponent text="Decrement" onSmash={()=>countHandler("DECREMENT", 10)} />
        </>
    )
}
export default CounterApp;