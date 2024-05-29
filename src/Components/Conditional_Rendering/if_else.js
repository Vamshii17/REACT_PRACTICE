const IfElseComponent = () => {
    const isSubscribed = true
    if(isSubscribed){
        return <h1>Thanks for Subscribing</h1>
    }else{
        return <h1>Please Subscribe</h1>
    }
}
export default IfElseComponent;