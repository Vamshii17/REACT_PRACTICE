import { useNavigate } from "react-router-dom";

const InvalidScreen = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/")
    }
    return(
        <>
        <h3>InvalidScreen</h3>
        {/* <Link to={"/"}>Back to HomeScreen</Link> */}
        <button onClick={handleRedirect}>Back to HomeScreen</button>
        </>
    )
}
export default InvalidScreen;