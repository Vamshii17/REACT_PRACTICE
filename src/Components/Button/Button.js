const ButtonComponent = (prop)=>{
    console.log(prop)
    const {text, textColor="yellow"} = prop;
    return(
        <>
        <button style={{color: textColor, backgroundColor: "black"}}>{text}</button>
        </>
    )
}

export default ButtonComponent;