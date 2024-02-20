import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user'))
};

export const UserProvider = ({ children }) => {

    let navigate = useNavigate();

    const [userData, setUserData] = useState(getUserFromLocalStorage());

    const loginUser = (user) => {
        console.log(user);
        setUserData(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(AppRoutes.HOME)
    }

    const logoutUser = () => {
        setUserData(null);
        localStorage.removeItem('user');
        navigate(AppRoutes.LOGIN)
    }
    
    return (
        <UserContext.Provider value={{ userData, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    )
}

