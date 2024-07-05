import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../Screens/homeScreen";
import AboutScreen from "../Screens/aboutScreen";
import ContactScreen from "../Screens/contactScreen";
import SettingScreen from "../Screens/settingScreen";
import InvalidScreen from "../Screens/invalidScreen";


const NavigationStack = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                {/* Static Routes or Valid Screens */}
                <Route path="/" Component={HomeScreen} />
                <Route path="/about" Component={AboutScreen} />
                <Route path="/contact" Component={ContactScreen} />
                <Route path="/setting" Component={SettingScreen} />
                {/* InvalidScreen */}
                <Route path="*" Component={InvalidScreen} />
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default NavigationStack;