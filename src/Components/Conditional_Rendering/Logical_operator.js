const LogicalComponent = () => {
    const isSubscribed=true
    return(
        <>
        {
            isSubscribed && <h1>Thanks for Subscribing</h1>
        }
        </>
    )
}
export default LogicalComponent;