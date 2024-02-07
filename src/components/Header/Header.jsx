import { useEffect, useState } from "react";
import { AppRoutes } from "../../lib/appRoutes";
import HeaderMenu from "../HeaderNav/HeaderNav";
import { useGlobal } from "../../hooks/useGlobal";
import { HeaderBox, HeaderBlock, LogoLink } from "./Header.styled";

function Header() {

    const { theme } = useGlobal();

    const [logo, setLogo] = useState("/images/logo.png");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
        if (theme === "light") {
            setLogo("public/logo.png");
        } else {
            setLogo("public/logo_dark.png");
        }
    }, [theme]);


    return (
        <HeaderBox className="header">
            <div className="container">

                <HeaderBlock>
                    <LogoLink to={AppRoutes.HOME}>
                        <img src={logo} alt="logo" />
                    </LogoLink>
                    {/* <div className="header__logo _show _light">
                    <a href="" target="_self">
                        <img src="public/logo.png" alt="logo" />
                    </a>
                </div> */}
                    <LogoLink>
                        <img src={logo} alt="logo" />
                    </LogoLink>
                    {/* <div className="header__logo _dark">
                    <a href="" target="_self">
                        <img src="public/logo_dark.png" alt="logo" />
                    </a>
                </div> */}

                    <HeaderMenu />

                </HeaderBlock>

            </div>
        </HeaderBox>
    )
}
export default Header;