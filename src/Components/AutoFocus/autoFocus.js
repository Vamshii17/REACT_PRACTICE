import { useEffect, useRef } from "react"


const AutoFocusComponent = () => {
    const reference = useRef();
    useEffect(()=>{
        autoFocusFn();
    }, []);
    const autoFocusFn = () => {
        reference.current.focus();
        console.log(reference.current.value, "Input Value")
    }
    return(
        <>
        <input ref={reference} type="text" />
        </>
    )
}
export default AutoFocusComponent;