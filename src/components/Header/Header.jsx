import { useState } from "react";
import { Container, Button } from "../Common/Common.styled";
import { HeaderBox, HeaderBlock, HeaderNav } from "./Header.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

function Header({ addCard, toggleTheme, userData }) {

    const [isOpened, setIsOpened] = useState(false);
    function togglePopUp() {
        setIsOpened((prev) => !prev)
    }

    return <HeaderBox className="header">
        <Container>
            <HeaderBlock>
                <div className="header__logo _show _light">
                    <a href="" target="_self">
                        <img src="public/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self">
                        <img src="public/logo_dark.png" alt="logo" />
                    </a>
                </div>
                <HeaderNav>

                    {/* <Button id="btnMainNew" onClick={addCard}>
                        Create new task
                    </Button> */}

                    <Link to={AppRoutes.ADD_CARD}>
                        <Button id="btnMainNew">Create new task</Button>
                    </Link>

                    <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUp}>
                        {userData.name}
                    </a>

                    {isOpened && <div className="header__pop-user-set pop-user-set">
                        <p className="pop-user-set__name">
                            {userData.name}
                        </p>
                        <p className="pop-user-set__mail">
                            {userData.login}
                        </p>
                        <div className="pop-user-set__theme">
                            <p>Dark theme</p>
                            <input type="checkbox" className="checkbox" name="checkbox" onClick={toggleTheme} />
                        </div>

                        <Link to={AppRoutes.EXIT}>
                            <Button $transparent>Log out</Button>
                        </Link>

                    </div>}

                </HeaderNav>
            </HeaderBlock>
        </Container>
    </HeaderBox>
}
export default Header;