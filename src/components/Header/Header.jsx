import { useState } from "react";
import { Container, Button } from "../Common/Common.styled";
import { HeaderBox, HeaderBlock, HeaderNav } from "./Header.styled";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

function Header({ addCard, toggleTheme }) {
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

                    <Button id="btnMainNew" onClick={addCard}>
                        Create new task
                    </Button>

                    <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUp}>
                        Authorised Osetr
                    </a>

                    {isOpened && <div className="header__pop-user-set pop-user-set" /*id="user-set-target"*/>
                        {/* <a href="">x</a> */}
                        <p className="pop-user-set__name">Authorised Osetr</p>
                        <p className="pop-user-set__mail">authorised.osetr@gmail.com</p>
                        <div className="pop-user-set__theme">
                            <p>Dark theme</p>
                            <input type="checkbox" className="checkbox" name="checkbox" onClick={toggleTheme} />
                        </div>

                        <Button $transparent>
                            <Link to={AppRoutes.EXIT}>Log ouT</Link>
                            {/* <a href="#popExit">Log out</a> */}
                        </Button>

                    </div>}

                </HeaderNav>
            </HeaderBlock>
        </Container>
    </HeaderBox>
}
export default Header;