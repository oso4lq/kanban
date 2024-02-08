import { useContext, useEffect, useState } from "react";

import { useUser } from "../../hooks/useUser";
import { GlobalContext } from "../../contexts/global-context.jsx";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

import { HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./HeaderNav.styled.js";
import Button from "../Common/Common.styled.js";

function HeaderMenu() {

    const [isOpened, setIsOpened] = useState(false);
    const { userData } = useUser();
    // console.log(userData);

    const togglePopUp = () => {
        setIsOpened((prevState) => !prevState);
    };

    const { theme, themeSwitchHandler } = useContext(GlobalContext);
    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme function
    // const [theme, setTheme] = useState('light');
    // const toggleTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //         //console.log('dark theme');
    //     } else {
    //         setTheme('light');
    //         //console.log('light theme');
    //     }
    // };

    return (
        <HeaderNav>

            <Link to={AppRoutes.ADD_CARD}>
                <Button id="btnMainNew">Create new task</Button>
            </Link>

            {/* <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUp}>
                {userData.name}
            </a> */}
            <HeaderUser onClick={togglePopUp}>{userData.name}</HeaderUser>

            {isOpened && (
                <HeaderPopUserSet className="pop-user-set" id="user-set-target">

                    <PopUserSetName>
                        {userData.name}
                    </PopUserSetName>

                    <PopUserSetMail>
                        {userData.login}
                    </PopUserSetMail>

                    <PopUserSetTheme>
                        <p>Dark theme</p>
                        {/* <input type="checkbox" className="checkbox" name="checkbox" onClick={toggleTheme} /> */}
                        <input type="checkbox" className="checkbox" name="checkbox"
                            onChange={() =>
                                themeSwitchHandler(theme === "dark" ? "light" : "dark")
                            }
                        />
                    </PopUserSetTheme>

                    <Link to={AppRoutes.EXIT}>
                        <Button $transparent>Log out</Button>
                    </Link>

                </HeaderPopUserSet>
            )}

        </HeaderNav>
    )
}

export default HeaderMenu;