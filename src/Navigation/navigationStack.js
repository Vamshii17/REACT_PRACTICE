import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../Screens/homeScreen";
import AboutScreen from "../Screens/aboutScreen";
import ContactScreen from "../Screens/contactScreen";
import SettingScreen from "../Screens/settingScreen";
import InvalidScreen from "../Screens/invalidScreen";
import ProductDetailsCmp from "../Components/productListing/productDetails";
import { createContext, useState } from "react";

export const UserInfo = createContext();

const NavigationStack = () => {
    const [userName, setUserName] = useState("Vamshi");
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count+1);
    }

    return(
        <>
        <UserInfo.Provider value={{
            name: userName,
            salary: 2000,
            count: count,
            increaseCount: increaseCount,
            
            }} >
        <BrowserRouter>
            <Routes>
                {/* Static Routes or Valid Screens */}
                <Route path="/" Component={HomeScreen} />
                <Route path="/about" Component={AboutScreen} />
                <Route path="/contact" Component={ContactScreen} />
                <Route path="/setting" Component={SettingScreen} />
                {/* InvalidScreen */}
                <Route path="*" Component={InvalidScreen} />
                {/* Dynamic Routes */}
                <Route path={":category/:productId"} Component={ProductDetailsCmp}/>
            </Routes>
        </BrowserRouter>
        </UserInfo.Provider>
        </>
    )
}

export default NavigationStack;