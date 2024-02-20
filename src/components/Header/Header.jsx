import { useEffect, useState } from "react";
import { AppRoutes } from "../../lib/appRoutes";
import HeaderMenu from "../HeaderNav/HeaderNav";
import { useGlobal } from "../../hooks/useGlobal";
import { HeaderBox, HeaderBlock, LogoLink } from "./Header.styled";
import { Link } from "react-router-dom";

function Header({ noButton }) {

    const { theme } = useGlobal();

    const [logo, setLogo] = useState("/images/logo.png");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
        if (theme === "dark") {
            setLogo("public/logo_dark.png");
        } else {
            setLogo("public/logo.png");
        }
    }, [theme]);


    return (
        <HeaderBox className="header">
            <div className="container">

                <HeaderBlock>

                    <Link to={AppRoutes.HOME}>
                        <LogoLink>
                            <img src={logo} alt="logo" />
                        </LogoLink>
                    </Link>

                    <HeaderMenu noButton={noButton} />

                </HeaderBlock>

            </div>
        </HeaderBox>
    )
}
export default Header;