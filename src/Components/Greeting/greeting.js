

const GreetingComponent=(prop)=>{
    console.log(prop)
    const {children}=prop
    return(
        <h3>Hello, Good Morning {children}</h3>
    )
}

export default GreetingComponent;