import { useContext, useEffect, useState } from "react";

import { useUser } from "../../hooks/useUser";
import { GlobalContext } from "../../contexts/global-context.jsx";

import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

import { HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./HeaderNav.styled.js";
import Button from "../Common/Common.styled.js";

function HeaderMenu({ noButton }) {

    const [isOpened, setIsOpened] = useState(false);
    const { userData } = useUser();

    const togglePopUp = () => {
        setIsOpened((prevState) => !prevState);
    };

    const { theme, themeSwitchHandler } = useContext(GlobalContext);
    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <HeaderNav>

            <Link to={AppRoutes.ADD_CARD}
                className={`${noButton ? '_hide' : ''}`} >
                <Button id="btnMainNew">Create new task</Button>
            </Link>

            <HeaderUser onClick={togglePopUp}>{userData.name}</HeaderUser>

            {
                isOpened && (
                    <HeaderPopUserSet className="pop-user-set" id="user-set-target">

                        <PopUserSetName>
                            {userData.name}
                        </PopUserSetName>

                        <PopUserSetMail>
                            {userData.login}
                        </PopUserSetMail>

                        <PopUserSetTheme>
                            <p>Dark theme</p>
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
                )
            }

        </HeaderNav >
    )
}

export default HeaderMenu;