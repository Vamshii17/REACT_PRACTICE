const TernaryComponent = () => {
    const isSubscribed = false
    return(
        <>
            {
            isSubscribed 
            ? 
            <h1>Thanks for Subscribe</h1> 
            : 
            <h1>Please Subscribe</h1>
            }
        </>
    )
}
export default TernaryComponent;