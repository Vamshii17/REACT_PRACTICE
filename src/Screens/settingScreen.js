import { useContext } from "react";
import NavBar from "../Components/Nav_Bar/nav_Bar";
import { UserInfo } from "../Navigation/navigationStack";


const SettingScreen = () => {
    const globalInfo = useContext(UserInfo);
    const{increaseCount} = globalInfo
    return(
        <>
        <NavBar />
        <h3>SettingScreen {increaseCount}</h3>
        <button onClick={increaseCount}>Increase Count</button>
        </>
    )
}
export default SettingScreen;